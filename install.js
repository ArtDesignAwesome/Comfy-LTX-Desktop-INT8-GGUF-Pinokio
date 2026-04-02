module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: "git clone https://github.com/ArtDesignAwesome/Comfy-LTX-Desktop_INT8_GGUF-SUPPORT.git app",
      },
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "corepack enable",
          "corepack prepare pnpm@10.30.3 --activate",
          "pnpm install",
        ],
      },
    },
    {
      method: "shell.run",
      params: {
        path: "app/backend",
        venv: ".venv",
        venv_python: "3.10",
        message: [
          "pip install imageio-ffmpeg==0.6.0",
        ],
      },
    },
    {
      method: "notify",
      params: {
        html: "Installation complete. The launcher uses a lightweight Python 3.10 helper venv for ffmpeg support. Start ComfyUI, then click Start.",
      },
    },
  ],
}
