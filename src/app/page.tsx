import { getUsers } from '@/utils/getUsers';
import Users from '../components/Users';
import UserInfo from '@/components/UserInfo';
import Nav from '@/components/Nav';
import EmailForm from '@/components/emailForm';

const Home = async () => {
  const users = await getUsers();

  return (
    <main className="p-4">
      <Nav />
      <UserInfo />
      <Users users={users} />
      <EmailForm className="w-1/3" />
    </main>
  );
};

export default Home;
