'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

const Nav = () => {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <a href="/api/auth/logout" className="mx-2" tabIndex={0}>
          Log out
        </a>
      ) : (
        <div>
          <a href="/api/auth/login" className="mx-2" tabIndex={0}>
            Log in
          </a>

          <a href="/api/auth/signup" className="mx-2" tabIndex={0}>
            Sign Up
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
