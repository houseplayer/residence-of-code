import { render, screen } from "@testing-library/react"
import Pagination from "."

describe("Pagination", () => {
  test("should render correctly", () => {
    render(
      <Pagination totalItems={100} itemsPerPage={10} currentPage={1} onPageChange={() => {}} />,
    )
    const buttons = screen.getAllByRole("button")
    expect(buttons).toHaveLength(12)
    expect(buttons[0]).toHaveTextContent("Previous")
    expect(buttons[buttons.length - 1]).toHaveTextContent("Next")
  })
})
