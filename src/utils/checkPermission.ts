export const checkPermission = (
	user: { email: string; roles: string[] } | null,
	requiredRole: string,
) => {
	return user?.roles?.includes(requiredRole) ? true : false
}
