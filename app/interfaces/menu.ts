import type { ElementType } from "react"

export type Menu = {
  name: string
  icon: ElementType
  color: string
  href: string
  submenus: Submenu[]
}

export type MenuPanel = {
  name: string
  icon: ElementType
  color: string
  href: string
}

export type Submenu = {
  name: string
  href: string
}