# Comfy LTX Desktop Pinokio Launcher

A dedicated Pinokio launcher repo for:

- `https://github.com/ArtDesignAwesome/Comfy-LTX-Desktop_INT8_GGUF-SUPPORT`

This repository is intentionally small. Pinokio installs this launcher repo first, then the launcher clones the actual LTX Desktop app into `app/` and manages its dependencies there.

## What it does

- Clones the app repo into `app/`
- Installs Node dependencies with `pnpm install`
- Creates the backend helper environment with `uv sync --frozen --extra dev`
- Starts the app with `pnpm dev`

## Before using

- Install ComfyUI separately
- Make sure ComfyUI is already running before you click `Start`

## Publishing

After pushing this launcher repo to GitHub, add the repository topic:

- `pinokio`

That gives Pinokio's community app indexer the best chance to recognize and list it.
