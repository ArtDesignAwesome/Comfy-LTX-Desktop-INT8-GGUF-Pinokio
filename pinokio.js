module.exports = {
  version: "5.0",
  title: "Comfy LTX Desktop",
  description: "Pinokio launcher for Comfy LTX Desktop with GGUF and INT8 support.",
  icon: "icon.png",
  pre: [
    {
      icon: "fa-solid fa-diagram-project",
      text: "ComfyUI",
      description: "Install ComfyUI separately and keep it running before launching the app.",
      href: "https://github.com/comfyanonymous/ComfyUI",
    },
  ],
  menu: async (kernel, info) => {
    const installed = info.exists("app/backend/.venv") && info.exists("app/node_modules")
    const running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
    }

    if (running.install) {
      return [
        {
          default: true,
          icon: "fa-solid fa-plug",
          text: "Installing",
          href: "install.js",
        },
      ]
    }

    if (installed) {
      if (running.start) {
        const local = info.local("start.js")
        if (local && local.url) {
          return [
            {
              default: true,
              icon: "fa-solid fa-rocket",
              text: "Open App",
              href: local.url,
            },
            {
              icon: "fa-solid fa-terminal",
              text: "Terminal",
              href: "start.js",
            },
          ]
        }

        return [
          {
            default: true,
            icon: "fa-solid fa-terminal",
            text: "Terminal",
            href: "start.js",
          },
        ]
      }

      if (running.update) {
        return [
          {
            default: true,
            icon: "fa-solid fa-terminal",
            text: "Updating",
            href: "update.js",
          },
        ]
      }

      if (running.reset) {
        return [
          {
            default: true,
            icon: "fa-solid fa-terminal",
            text: "Resetting",
            href: "reset.js",
          },
        ]
      }

      return [
        {
          default: true,
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js",
        },
        {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        },
        {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        },
        {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js",
          confirm: "Are you sure you wish to reset the app?",
        },
      ]
    }

    return [
      {
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      },
    ]
  },
}
