import { getUsers } from '@/utils/getUsers';
import Users from '../components/Users';

const Home = async () => {
  const users = await getUsers();

  return (
    <main className="p-4">
      <Users users={users} />
    </main>
  );
};

export default Home;
