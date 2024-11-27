import EmailForm from '@/components/emailForm';
import SubscribersList from '@/components/Subscribers/SubscribersList';
import { getSubscribers } from '@/utils/getSubscribers';

const AdminPage = async () => {
  const subscribers = await getSubscribers();

  return (
    <>
      <EmailForm className="w-72" />
      <SubscribersList subscribers={subscribers} />
    </>
  );
};

export default AdminPage;
