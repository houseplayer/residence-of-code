import { ReactNode } from 'react';
import prisma from '@/lib/prisma';
import { Category, Post } from '@/types';
import BlogList from './BlogList';

const Layout = async ({ children }: { children: ReactNode }) => {
  const posts: Post[] = await prisma.postsCategories.findMany({
    select: {
      post: { select: { id: true, title: true, author: true, createdAt: true, updatedAt: true } },
      category: { select: { name: true } },
    },
  });

  const categories: Category[] = await prisma.category.findMany();

  return (
    <>
      <BlogList posts={posts} categories={categories} />
      {children}
    </>
  );
};

export default Layout;
