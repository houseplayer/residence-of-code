import { ReactNode } from 'react';
import { routes } from '@/utils/enums';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import { Post } from '@/types';
import { mapPosts } from '@/utils/mapposts';

const Layout = async ({ children }: { children: ReactNode }) => {
  const posts: Post[] = await prisma.postsCategories.findMany({
    select: {
      post: { select: { id: true, title: true, author: true, createdAt: true, updatedAt: true } },
      category: { select: { name: true } },
    },
  });

  const mappedPosts = mapPosts(posts);

  const blogList = (
    <ul className="my-4">
      {mappedPosts.map(({ id, title, categories }) => {
        return (
          <Link
            key={id}
            href={`${routes.blog}/${id}`}
            className="block border-b-1 first-of-type:border-t-1 border-gray-400 py-1 hover:bg-gray-100"
          >
            <li className="flex justify-between flex-col xs:flex-row">
              <div>{title}</div>
              <div>
                {categories.map((category) => (
                  <span
                    className="inline-block bg-gray-300 rounded mr-2 my-1 text-[0.6rem] px-2 py-1"
                    key={category}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );

  return (
    <>
      {blogList}
      {children}
    </>
  );
};

export default Layout;
