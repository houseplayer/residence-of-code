import { getSubscribers } from '@/utils/getSubscribers';
import UserInfo from '@/components/UserInfo';
import AddSubscriberForm from '@/components/Subscribers/AddSubscriberForm';

const HomePage = async () => {
  const subscribers = await getSubscribers();

  return (
    <>
      <UserInfo />
      <AddSubscriberForm subscribers={subscribers} />
    </>
  );
};

export default HomePage;
