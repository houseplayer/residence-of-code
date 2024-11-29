export const checkPermission = (user: { [x: string]: any } | undefined, requiredRole: string) => {
  const userRoles = user?.['/roles'];

  return userRoles?.includes(requiredRole) ? true : false;
};
