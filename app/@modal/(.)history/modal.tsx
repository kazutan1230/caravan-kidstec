"use client"

import { XMarkIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"
import {
  type JSX,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
} from "react"
import styles from "./modal.module.css"

export function Modal({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const router = useRouter()
  const dialogRef: RefObject<HTMLDialogElement> =
    useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  })

  return (
    <dialog
      ref={dialogRef}
      onClose={router.back}
      className={`bg-transparent duration-200 ease-out fixed grid group h-full inset-0 items-center justify-items-center m-0 max-h-none max-w-none opacity-0 overflow-hidden overscroll-contain p-0 pointer-events-none text-inherit w-full z-50 backdrop:bg-[#0006] open:opacity-100 open:pointer-events-auto open:visible ${styles.dialog}`}
    >
      <div className="bg-base-100 col-start-1 duration-200 ease-out max-h-[90vh] max-w-3xl overflow-y-auto overscroll-contain p-6 rounded-b-box rounded-t-box row-start-1 scale-90 shadow-2xl space-y-4 transition w-11/12 group-open:scale-100 group-open:translate-y-0">
        <button
          type="button"
          onClick={router.back}
          className="absolute button-pop right-2 rounded-full size-6 top-2 hover:bg-gray-300 hover:scale-110"
        >
          <XMarkIcon className="size-6" />
        </button>
        {children}
        <button
          type="button"
          onClick={router.back}
          className="bg-gray-100 button-pop flex float-right font-bold gap-2 h-12 items-center justify-center px-4 rounded-xl shadow-sm text-sm hover:bg-gray-300"
        >
          <XMarkIcon className="size-6" />
          閉じる
        </button>
      </div>
      <button
        type="button"
        aria-label="閉じる"
        onClick={router.back}
        className="col-start-1 grid justify-self-stretch row-start-1 self-stretch -z-[1]"
      />
    </dialog>
  )
}
