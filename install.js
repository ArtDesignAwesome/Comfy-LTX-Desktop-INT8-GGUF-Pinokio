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
          "pnpm install",
        ],
      },
    },
    {
      method: "shell.run",
      params: {
        path: "app/backend",
        message: [
          "uv sync --frozen --extra dev",
        ],
      },
    },
    {
      method: "notify",
      params: {
        html: "Installation complete. Start ComfyUI, then click Start.",
      },
    },
  ],
}
