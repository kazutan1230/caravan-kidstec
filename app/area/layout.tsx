import type React from "react"

export default function AreaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return <article className="grid gap-6 pb-4 text-center">{children}</article>
}
