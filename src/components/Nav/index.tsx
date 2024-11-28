'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import CustomLink from '../Link';
import { usePathname } from 'next/navigation';
import { routes } from '@/utils/enums';
import { isAdmin } from '@/utils/isUserAdmin';

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
    <Link
      href={routes.home}
      className={currentPath === routes.home ? 'border-slate-700 border-b-2 ml-4' : 'ml-4'}
    >
      Home
    </Link>
  );

  const adminRoutes = isAdmin(user) && (
    <Link
      href={routes.admin}
      className={currentPath === routes.admin ? 'border-slate-700 border-b-2 ml-4' : 'ml-4'}
    >
      Admin
    </Link>
  );

  return (
    <>
      {authRoutes}
      {publicRoutes}
      {adminRoutes}
    </>
  );
};

export default Nav;
