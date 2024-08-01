import { NAVIGATION } from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export function Footer(): JSX.Element {
  return (
    <footer className="bg-base-300 grid items-center justify-center p-4 text-base-content">
      <nav>
        <ul className="grid grid-cols-2 menu p-0 sm:grid-cols-4">
          {NAVIGATION.map((menu) => (
            <li key={menu.name}>
              {menu.submenus.length === 0 ? (
                <Link
                  href={menu.href}
                  className="font-bold link-hover justify-center"
                >
                  {menu.name}
                </Link>
              ) : (
                <>
                  <strong className="justify-center">{menu.name}</strong>
                  <ul>
                    {menu.submenus.map((submenu) => (
                      <li key={submenu.name}>
                        <Link
                          href={menu.href + submenu.href}
                          className="link-hover"
                        >
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <aside className="flex justify-between items-center">
        <p className="text-sm">
          Copyright © Open Up Group Inc.&nbsp;
          <br className="block sm:hidden" />
          All rights reserved.
        </p>
        <Link
          href="https://github.com/OpenUp-LabTakizawa/caravan-kidstec"
          target="_blank"
        >
          <Image
            src="/github-mark.svg"
            width={24}
            height={24}
            alt="GitHub"
            className="size-8"
          />
        </Link>
      </aside>
    </footer>
  )
}
