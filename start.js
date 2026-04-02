module.exports = {
  requires: {
    bundle: "ai",
  },
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "pnpm dev",
        ],
      },
    },
  ],
}
