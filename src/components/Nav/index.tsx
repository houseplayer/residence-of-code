'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import CustomLink from '../Link';
import { usePathname } from 'next/navigation';
import { routes, userRole } from '@/utils/enums';
import { checkPermission } from '@/utils/checkPermission';

const Nav = () => {
  const { user } = useUser();

  const currentPath = usePathname();

  const authRoutes = user ? (
    <CustomLink href={routes.logout}>Log out</CustomLink>
  ) : (
    <>
      <CustomLink href={routes.login} className="mx-2">
        Log in
      </CustomLink>
      <CustomLink href={routes.signup} className="mx-2">
        Sign Up
      </CustomLink>
    </>
  );

  const publicRoutes = (
    <>
      <Link
        href={routes.home}
        className={currentPath === routes.home ? 'border-slate-700 border-b-2 ml-4' : 'ml-4'}
      >
        Home
      </Link>
      <Link
        href={routes.blog}
        className={currentPath.includes(routes.blog) ? 'border-slate-700 border-b-2 ml-4' : 'ml-4'}
      >
        Blog
      </Link>
    </>
  );

  const adminRoutes = checkPermission(user, userRole.admin) && (
    <Link
      href={routes.admin}
      className={currentPath === routes.admin ? 'border-slate-700 border-b-2 ml-4' : 'ml-4'}
    >
      Admin
    </Link>
  );

  return (
    <div>
      {authRoutes}
      {publicRoutes}
      {adminRoutes}
    </div>
  );
};

export default Nav;
