# Comfy LTX Desktop Pinokio Launcher

A dedicated Pinokio launcher repo for:

- `https://github.com/ArtDesignAwesome/Comfy-LTX-Desktop_INT8_GGUF-SUPPORT`

This repository is intentionally small. Pinokio installs this launcher repo first, then the launcher clones the actual LTX Desktop app into `app/` and manages its dependencies there.

## What it does

- Clones the app repo into `app/`
- Installs Node dependencies with `pnpm install`
- Creates `app/backend/.venv` with Python 3.10 and installs `imageio-ffmpeg`
- Starts the app with `pnpm dev`

This launcher intentionally avoids syncing the full upstream backend project because that project targets newer Python versions than many Pinokio installs ship by default. The desktop runtime only needs the helper `ffmpeg` package from `backend/.venv`, so the launcher keeps that environment lightweight and Python 3.10 compatible.

## Before using

- Install ComfyUI separately
- Make sure ComfyUI is already running before you click `Start`

## Publishing

After pushing this launcher repo to GitHub, add the repository topic:

- `pinokio`

That gives Pinokio's community app indexer the best chance to recognize and list it.
