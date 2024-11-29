import fs from 'fs';
import MarkdownToHtml from '../MarkdownToHTML';
import { routes } from '@/utils/enums';

interface Props {
  blogId: string;
}

const BlogPost = async ({ blogId }: Props) => {
  const markdown = fs.readFileSync(`src/public/${routes.blog}/${blogId}.md`, 'utf-8');
  return <MarkdownToHtml markdown={markdown} />;
};

export default BlogPost;
