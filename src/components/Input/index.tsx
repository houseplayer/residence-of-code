import { cn } from "@/utils/cn"
import { forwardRef } from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string
}

const Input = forwardRef<HTMLInputElement, Props>(({ className, error, ...props }, ref) => {
	return (
		<>
			<input
				className={cn("border-1 border-black px-2 py-1 my-2", className)}
				ref={ref}
				{...props}
			/>
			{error && <p className="text-red-500 text-sm">{error}</p>}
		</>
	)
})

Input.displayName = "Input"

export default Input
