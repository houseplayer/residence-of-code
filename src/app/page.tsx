import { getSubscribers } from '@/utils/getSubscribers';
import UserInfo from '@/components/UserInfo';
import Nav from '@/components/Nav';
import EmailForm from '@/components/emailForm';
import Subscribers from '@/components/Subscribers';

const Home = async () => {
  const subscribers = await getSubscribers();

  return (
    <main className="p-4">
      <Nav />
      <UserInfo />
      <Subscribers subscribers={subscribers} />
      <EmailForm className="w-72" />
    </main>
  );
};

export default Home;
