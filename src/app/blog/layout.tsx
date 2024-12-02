import { ReactNode } from 'react';
import { routes } from '@/utils/enums';
import fs from 'fs';
import Link from 'next/link';

const Layout = ({ children }: { children: ReactNode }) => {
  const blogFilenames = fs.readdirSync('src/public/blog');
  const blogTitle = blogFilenames.map((filename) => filename.split('.').slice(0, -1).join('.'));

  const blogList = (
    <ul className="my-4">
      {blogTitle.map((title) => (
        <Link
          key={title}
          href={`${routes.blog}/${title}`}
          className="block border-b-1 first-of-type:border-t-1 border-gray-400 py-1 hover:bg-gray-100"
        >
          <li>{title}</li>
        </Link>
      ))}
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
