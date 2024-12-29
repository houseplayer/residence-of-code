"use client"

import { clsx } from "clsx"
import Loader from "@/components/Loader"
import { ReactNode } from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  disabledLabel?: string | ReactNode
  formAction?: (formData: FormData) => Promise<void>
}

const Button = ({ label, disabledLabel, className, formAction, disabled, onClick }: Props) => {
  disabledLabel = disabledLabel || "saving..."

  return (
    <button
      className={clsx(className, "border-black border-1 px-2 py-1 my-2")}
      formAction={formAction}
      disabled={disabled}
      onClick={onClick}
    >
      {disabled ? disabledLabel : label}
    </button>
  )
}

export default Button
