'use client';

import Multiselect from '@/components/Multiselect';
import { Category, Post } from '@/types';
import { mapCategories } from '@/utils/categories';
import { filterPosts, mapPosts } from '@/utils/posts';
import { routes } from '@/utils/enums';
import Link from 'next/link';
import { MultiSelectChangeEvent } from 'primereact/multiselect';
import { useState } from 'react';

interface Props {
  posts: Post[];
  categories: Category[];
}

const BlogList = ({ posts, categories }: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const mappedPosts = mapPosts(posts);
  const mappedCategories = mapCategories(selectedCategories);
  const filteredPosts = filterPosts(mappedPosts, mappedCategories);

  return (
    <>
      <p className="mt-4">Select blog category</p>
      <Multiselect
        options={categories}
        placeholder="categories"
        className="border-1 border-black w-full my-2 text-sm rounded-none"
        selectedOptions={selectedCategories}
        onChange={(e: MultiSelectChangeEvent) => setSelectedCategories(e.value)}
      />
      <ul className="my-4">
        {filteredPosts.map(({ id, title, categories }) => (
          <Link
            key={id}
            href={`${routes.blog}/${id}`}
            className="block border-b-1 first-of-type:border-t-1 border-gray-400 py-1.5 hover:bg-gray-100"
          >
            <li className="flex justify-between flex-col xs:flex-row">
              <div>{title}</div>
              <div className="flex">
                {categories.map((category) => (
                  <span
                    className="inline-block bg-gray-300 rounded ml-0 mr-2 xs:ml-2 xs:mr-0 text-[0.6rem] px-2 py-1"
                    key={category}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
