import { getUsers } from '@/utils/getUsers';
import Users from '../components/Users';
import UserInfo from '@/components/UserInfo';

const Home = async () => {
  const users = await getUsers();

  return (
    <main className="p-4">
      <a href="/api/auth/login" className="mx-2" tabIndex={0}>
        Log in
      </a>

      <a href="/api/auth/logout" className="mx-2" tabIndex={0}>
        Log out
      </a>

      <a href="/api/auth/signup" className="mx-2" tabIndex={0}>
        Sign Up
      </a>

      <Users users={users} />
      <UserInfo />
    </main>
  );
};

export default Home;
