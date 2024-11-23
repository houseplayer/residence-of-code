import { getUsers } from '@/utils/getUsers';
import Users from '../components/Users';
import UserInfo from '@/components/UserInfo';
import Nav from '@/components/Nav';

const Home = async () => {
  const users = await getUsers();

  return (
    <main className="p-4">
      <Nav />
      <UserInfo />
      <Users users={users} />
    </main>
  );
};

export default Home;
