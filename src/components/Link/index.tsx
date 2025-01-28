import { cn } from "@/utils/cn"
import { LinkHTMLAttributes } from "react"

interface Props extends LinkHTMLAttributes<HTMLLinkElement> {}

const Link = ({ href, className, children }: Props) => {
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
