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
  ],
}
