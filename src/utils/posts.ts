import prisma from "@/lib/prisma"
import { mappedPost, Post } from "@/types"

export const getPosts = async () => {
  const posts: any[] = await prisma.post.findMany({
    include: {
      categories: { select: { name: true } },
    },
  })

  return posts
}

export const mapPosts = (posts: Post[]) => {
  const mappedPosts = posts.map((post) => ({
    ...post,
    categories: post.categories.map((category) => category.name),
  }))

  return mappedPosts
}

export const filterPosts = (posts: mappedPost[], selectedCategories: string[]) => {
  return posts.filter((post) =>
    post.categories.some((category) => selectedCategories.includes(category)),
  )
}
