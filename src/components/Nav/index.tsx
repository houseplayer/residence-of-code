'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from '../Link';

const Nav = () => {
  const { user, isLoading } = useUser();
  if (isLoading) return;

  return user ? (
    <Link href="/api/auth/logout">Log out</Link>
  ) : (
    <>
      <Link href="/api/auth/login" className="mx-2">
        Log in
      </Link>

      <Link href="/api/auth/signup" className="mx-2">
        Sign Up
      </Link>
    </>
  );
};

export default Nav;
