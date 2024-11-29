import clsx from 'clsx';
import { LinkHTMLAttributes } from 'react';

interface Props extends LinkHTMLAttributes<HTMLLinkElement> {}

const Link = ({ href, className, children }: Props) => {
  return (
    <a href={href} className={clsx(className, 'border-black border-1 px-2 py-1 hover:bg-gray-100')}>
      {children}
    </a>
  );
};

export default Link;
