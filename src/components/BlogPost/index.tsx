import fs from "fs"
import MarkdownToHtml from "@/components/MarkdownToHTML/MarkdownToHTML"
import { routes } from "@/utils/enums"

interface Props {
	blogId: string
}

const BlogPost = ({ blogId }: Props) => {
	const markdown = fs.readFileSync(`${process.cwd()}/public/${routes.blog}/${blogId}.md`, "utf-8")
	return <MarkdownToHtml markdown={markdown} />
}

export default BlogPost
