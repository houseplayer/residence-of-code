import fs from "fs"
import MarkdownToHtml from "../MarkdownToHTML/MarkdownToHTML"
import { routes } from "@/utils/enums"

interface Props {
  blogId: string
}

const BlogPost = async ({ blogId }: Props) => {
  const markdown = fs.readFileSync(`${process.cwd()}/public/${routes.blog}/${blogId}.md`, "utf-8")
  return <MarkdownToHtml markdown={markdown} />
}

export default BlogPost
