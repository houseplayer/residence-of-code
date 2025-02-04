"use client"

import { cn } from "@/utils/cn"
import { ReactNode } from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string
	disabledLabel?: string | ReactNode
	formAction?: (formData: FormData) => Promise<void>
}

const Button = ({
	label,
	disabledLabel = "saving...",
	className,
	formAction,
	disabled,
	onClick,
}: Props) => {
	return (
		<button
			className={cn("bg-white border-black border-1 px-2 py-1 my-2", className)}
			formAction={formAction}
			disabled={disabled}
			onClick={onClick}
		>
			{disabled ? disabledLabel : label}
		</button>
	)
}

export default Button
