import { cn } from "@/utils/cn"
import { forwardRef } from "react"

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
	({ className, error, rows, ...props }, ref) => {
		return (
			<>
				<textarea
					className={cn("border-1 border-black px-2 py-1 my-2", className)}
					rows={rows || 5}
					ref={ref}
					{...props}
				/>
				{error && <p className="text-red-500 text-sm">{error}</p>}
			</>
		)
	},
)

TextArea.displayName = "TextArea"

export default TextArea
