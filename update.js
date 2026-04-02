module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: "git pull",
      },
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "git pull",
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
          "pip install --upgrade imageio-ffmpeg==0.6.0",
        ],
      },
    },
  ],
}
