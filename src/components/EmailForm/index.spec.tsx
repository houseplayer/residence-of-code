import { render, screen } from "@testing-library/react"
import EmailForm from "."

describe("EmailForm", () => {
	it("should render email form", () => {
		render(<EmailForm />)

		const header = screen.getByRole("heading")

		expect(header).toBeInTheDocument()
		expect(header).toHaveTextContent(/Send email to subscribers/i)
	})
})
