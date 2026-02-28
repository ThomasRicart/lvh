@echo off
set /p message="Entrez votre message de commit (ex: Mise a jour doc) : "

echo --- Debut du processus complet ---

:: 1. Sauvegarde du code source sur GitHub (branche main)
echo [1/3] Sauvegarde du code source (Markdown et Python)...
git add .
git commit -m "%message%"
git push
if %ERRORLEVEL% NEQ 0 (
    echo Erreur lors du push Git. Verification necessaire.
    pause
    exit /b
)

:: 2. Generation et deploiement du site (GitHub Pages)
echo [2/3] Deploiement MkDocs en cours...
call mkdocs gh-deploy --force

:: 3. Nettoyage du dossier local "site"
echo [3/3] Nettoyage du dossier local 'site'...
if exist site (
    rd /s /q site
    echo Dossier 'site' supprime.
)

echo --- Termine ! Tout est a jour ---
pause