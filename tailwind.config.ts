import daisyui from "daisyui"
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        zenMaruGothic: ["var(--font-zen-maru-gothic)"],
        zenKakuGothicNew: ["var(--font-zen-kaku-gothic-new)"],
      },
    },
  },
  plugins: [daisyui],
}
export default config
