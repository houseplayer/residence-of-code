import BlogPost from "@/components/BlogPost"

const Blog = (req: any) => {
  const { blogId } = req.params
  return <>{<BlogPost blogId={blogId} />}</>
}

export default Blog
