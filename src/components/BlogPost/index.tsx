import fs from "fs/promises"
import MarkdownToHtml from "../MarkdownToHTML/MarkdownToHTML"
import { routes } from "@/utils/enums"

interface Props {
  blogId: string
}

const BlogPost = async ({ blogId }: Props) => {
  const markdown = await fs.readFile(`${process.cwd()}/public/${routes.blog}/${blogId}.md`, "utf-8")
  return <MarkdownToHtml markdown={markdown} />
}

export default BlogPost
