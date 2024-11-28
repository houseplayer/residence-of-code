import { userRole } from './enums';

export const isAdmin = (user: { [x: string]: any } | undefined) => {
  const userRoles = user?.['/roles'];
  if (userRoles) {
    return userRoles.includes(userRole.admin);
  } else {
    return false;
  }
};
