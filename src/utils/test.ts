import { filterPosts, mapPosts } from './posts';

describe('mapPosts', () => {
  const post1 = {
    post: {
      id: 'test id 1',
      title: 'test title',
      author: 'test author',
      createdAt: new Date('2024-12-08'),
      updatedAt: new Date('2024-12-08'),
    },
    category: {
      name: 'test category 1',
    },
  };

  const post2 = {
    post: {
      id: 'test id 1',
      title: 'test title',
      author: 'test author',
      createdAt: new Date('2024-12-08'),
      updatedAt: new Date('2024-12-08'),
    },
    category: {
      name: 'test category 2',
    },
  };

  const post3 = {
    post: {
      id: 'test id 2',
      title: 'test title',
      author: 'test author',
      createdAt: new Date('2024-12-08'),
      updatedAt: new Date('2024-12-08'),
    },
    category: {
      name: 'test category 2',
    },
  };

  test('posts empty array should be mapped to empty array', () => {
    expect(mapPosts([])).toEqual([]);
  });

  test('single post should be mapped to single mapped post', () => {
    expect(mapPosts([post1])).toEqual([
      {
        id: 'test id 1',
        title: 'test title',
        author: 'test author',
        createdAt: new Date('2024-12-08'),
        updatedAt: new Date('2024-12-08'),
        categories: ['test category 1'],
      },
    ]);
  });

  test('two posts with same id should be mapped to single mapped post with merged categories', () => {
    expect(mapPosts([post1, post2])).toEqual([
      {
        id: 'test id 1',
        title: 'test title',
        author: 'test author',
        createdAt: new Date('2024-12-08'),
        updatedAt: new Date('2024-12-08'),
        categories: ['test category 1', 'test category 2'],
      },
    ]);
  });

  test('two posts with different id should be mapped to two mapped post', () => {
    expect(mapPosts([post1, post3])).toEqual([
      {
        id: 'test id 1',
        title: 'test title',
        author: 'test author',
        createdAt: new Date('2024-12-08'),
        updatedAt: new Date('2024-12-08'),
        categories: ['test category 1'],
      },
      {
        id: 'test id 2',
        title: 'test title',
        author: 'test author',
        createdAt: new Date('2024-12-08'),
        updatedAt: new Date('2024-12-08'),
        categories: ['test category 2'],
      },
    ]);
  });
});

describe('filterPosts', () => {
  test('filtered empty posts array by empty categories array should result in empty posts array', () => {
    expect(filterPosts([], [])).toEqual([]);
  });
  test('filtered posts array with single post by empty categories array should result in empty posts array', () => {
    expect(
      filterPosts(
        [
          {
            id: 'test id 1',
            title: 'test title',
            author: 'test author',
            createdAt: new Date('2024-12-08'),
            updatedAt: new Date('2024-12-08'),
            categories: ['test category 1'],
          },
        ],
        [],
      ),
    ).toEqual([]);
  });
});
