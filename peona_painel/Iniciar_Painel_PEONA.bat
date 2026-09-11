@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ============================================
echo  Painel PEONA — sincroniza saidas do R
echo  (nao altera peona_ipasgo_v2.R)
echo ============================================
echo.

set "RSCRIPT="
if exist "C:\Program Files\R\R-4.6.1\bin\Rscript.exe" set "RSCRIPT=C:\Program Files\R\R-4.6.1\bin\Rscript.exe"
if exist "%LOCALAPPDATA%\Programs\R\R-4.6.1\bin\Rscript.exe" set "RSCRIPT=%LOCALAPPDATA%\Programs\R\R-4.6.1\bin\Rscript.exe"

if "%RSCRIPT%"=="" (
  echo [AVISO] Rscript nao encontrado. Tentando apenas sincronizar CSVs ja existentes...
) else (
  echo Executando peona_ipasgo_v2.R ...
  "%RSCRIPT%" --vanilla "%~dp0..\peona_ipasgo_v2.R"
  if errorlevel 1 (
    echo [ERRO] Falha na execucao do R. O painel usara a ultima saida disponivel, se houver.
  ) else (
    echo R concluido.
  )
)

echo.
echo Sincronizando CSVs para peona_painel\data ...
python "%~dp0sync_dados.py"
if errorlevel 1 (
  echo [ERRO] Falha no sync_dados.py
  pause
  exit /b 1
)

echo.
echo Abrindo painel no navegador...
start "" "%~dp0index_sidebar.html"
echo.
echo Pronto.
pause
