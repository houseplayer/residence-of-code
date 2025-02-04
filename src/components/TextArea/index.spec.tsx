import { render, screen } from "@testing-library/react"
import TextArea from "."

describe("Input", () => {
	it("should render input", () => {
		render(<TextArea />)

		const header = screen.getByRole("textbox")

		expect(header).toBeInTheDocument()
	})

	it("should render error message if error prop is provided", () => {
		render(<TextArea error="error" />)

		const header = screen.getByText("error")

		expect(header).toBeInTheDocument()
	})
})
