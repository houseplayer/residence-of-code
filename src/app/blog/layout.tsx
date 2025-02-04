import { ReactNode } from "react"
import BlogList from "./BlogList"
import { getPosts } from "@/utils/posts"
import { getCategories } from "@/utils/categories"

const Layout = async ({ children }: { children: ReactNode }) => {
	const posts = await getPosts()
	const categories = await getCategories()

	return (
		<>
			<BlogList posts={posts} categories={categories} />
			{children}
		</>
	)
}

export default Layout
