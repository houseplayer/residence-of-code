"use client"

import { addSubscriberAction } from "@/actions/subscriberActions"
import Button from "@/components/Button"
import Input from "@/components/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import useOptimistic from "@/hooks/useOptimistic"
import { useToken } from "@/lib/zustand"
import { Action, Subscriber } from "@/types"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import { subscriberFormSchema, SubscriberFormSchema } from "./schema"

interface Props {
	subscribers: Subscriber[]
}

const AddSubscriberForm = ({ subscribers }: Props) => {
	const { token } = useToken()
	const { setOptimisticData } = useOptimistic({
		data: subscribers,
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<SubscriberFormSchema>({
		resolver: zodResolver(subscriberFormSchema),
		mode: "onSubmit",
		reValidateMode: "onChange",
	})

	const addSubscriber = async (formData: SubscriberFormSchema) => {
		setOptimisticData({
			action: Action.ADD,
			item: {
				id: String(Math.random()),
				email: formData.email,
				name: formData.name,
				createdAt: new Date(),
			},
		})

		const response = await addSubscriberAction(formData, token)

		if (response.success) {
			toast.success(response.message)
			reset()
		} else {
			toast.error(response.message)
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(addSubscriber)}
				className="flex justify-center flex-col w-72 my-4 mx-auto"
			>
				<h1 className="mx-auto font-semibold">Subscribe to our newsletter</h1>
				<Input {...register("email")} error={errors.email?.message} placeholder="email" />
				<Input
					{...register("name")}
					error={errors.name?.message}
					placeholder="name"
					className="mt-2"
				/>
				<Button label="subscribe" className="mt-2" disabled={isSubmitting} />
			</form>
		</>
	)
}

export default AddSubscriberForm
