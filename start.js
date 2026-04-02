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
          "corepack enable",
          "corepack prepare pnpm@10.30.3 --activate",
          "pnpm dev",
        ],
      },
    },
  ],
}
