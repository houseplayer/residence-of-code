const Nav = () => {
  return (
    <>
      <div>
        <a href="/api/auth/login" className="mx-2" tabIndex={0}>
          Log in
        </a>

        <a href="/api/auth/logout" className="mx-2" tabIndex={0}>
          Log out
        </a>

        <a href="/api/auth/signup" className="mx-2" tabIndex={0}>
          Sign Up
        </a>
      </div>
    </>
  );
};

export default Nav;
