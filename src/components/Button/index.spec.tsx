import { render, screen } from "@testing-library/react"
import Button from "."

describe("Button", () => {
  it("should render disabled button", () => {
    render(<Button label="click" />)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/click/i)
  })

  it("should render button", () => {
    render(<Button label="click" disabled />)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/saving.../i)
    expect(button).toHaveAttribute("disabled")
  })
})
