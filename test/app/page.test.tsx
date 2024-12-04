import { describe, expect, test } from "bun:test"
import Home from "@/app/page.tsx"
import { render } from "@testing-library/react"

render(<Home />)

describe("className test", () => {
  test("article test", () => {
    const article = document.querySelector("article")
    expect(article?.className).toEqual("pb-4 text-center")
  })

  test("section test", () => {
    const sections = document.querySelectorAll("section")
    expect(sections[0]?.className).toEqual(
      "font-bold leading-7 mt-6 space-y-4 text-base text-center tracking-[.29em]",
    )
    expect(sections[1]?.className).toEqual(
      "bg-sky-300 mt-6 mx-2 pb-2 rounded-2xl space-y-2",
    )
    expect(sections[2]?.className).toEqual("mt-6 space-y-4")
    expect(sections[3]?.className).toEqual("relative mt-6")
  })
})
