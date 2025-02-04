import { render, screen } from "@testing-library/react"
import Input from "."

describe("Input", () => {
	it("should render input", () => {
		render(<Input />)

		const header = screen.getByRole("textbox")

		expect(header).toBeInTheDocument()
	})

	it("should render error message if error prop is provided", () => {
		render(<Input error="error" />)

		const header = screen.getByText("error")

		expect(header).toBeInTheDocument()
	})
})
