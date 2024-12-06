import prisma from '@/lib/prisma';
import { mappedPost, Post } from '@/types';

export const getPosts = async () => {
  const posts: Post[] = await prisma.postsCategories.findMany({
    select: {
      post: { select: { id: true, title: true, author: true, createdAt: true, updatedAt: true } },
      category: { select: { name: true } },
    },
  });

  return posts;
};

export const mapPosts = (posts: Post[]) => {
  return posts.reduce((acc: mappedPost[], post) => {
    const currentPost = {
      id: post.post.id,
      title: post.post.title,
      author: post.post.author,
      createdAt: post.post.createdAt,
      updatedAt: post.post.updatedAt,
      categories: [post.category.name],
    };

    if (acc.some((item) => item.id === post.post.id)) {
      const item = acc.find((i) => i.id === post.post.id);
      item?.categories.push(post.category.name);
    } else {
      acc.push(currentPost);
    }
    return acc;
  }, []);
};

export const filterPosts = (posts: mappedPost[], selectedCategories: string[]) => {
  return posts.filter((post) =>
    post.categories.some((category) => selectedCategories.includes(category)),
  );
};
