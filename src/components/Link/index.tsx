import { cn } from "@/utils/cn"
import { LinkHTMLAttributes } from "react"

const Link = ({ href, className, children }: LinkHTMLAttributes<HTMLLinkElement>) => {
	return (
		<a
			href={href}
			className={cn("bg-white border-black border-1 px-2 py-1 hover:bg-gray-100", className)}
		>
			{children}
		</a>
	)
}

export default Link
