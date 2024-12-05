import UserInfo from '@/components/UserInfo';
import { checkPermission } from '@/utils/checkPermission';
import { routes, userRole } from '@/utils/enums';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

const UserPage = async () => {
  const session = await getSession();

  if (!checkPermission(session?.user, userRole.admin)) {
    redirect(routes.home);
  }
  return <UserInfo />;
};

export default UserPage;
