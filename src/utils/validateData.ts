export const validateData = (data: Record<string, any>, schema: any) => {
	const validationResult = schema.safeParse(data)
	if (!validationResult.success) {
		let errorMsg = ""
		validationResult.error.errors.forEach((error: Error) => (errorMsg += `${error.message}\n`))
		throw new Error(errorMsg)
	}
}
