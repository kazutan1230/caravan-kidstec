import Image from "next/image"
import Link from "next/link"
import type React from "react"

export function ChibaLine(): React.JSX.Element {
  return (
    <Link href="https://lin.ee/a1BRnXT" className="w-fit mx-auto">
      <Image
        src="/line_add_friends.webp"
        width={232}
        height={72}
        alt="友だち追加"
        className="border-0 w-auto"
      />
    </Link>
  )
}
