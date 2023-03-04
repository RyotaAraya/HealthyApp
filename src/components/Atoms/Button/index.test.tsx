import { fireEvent, render } from "@testing-library/react"

import Button from "@/components/Atoms/Button"

describe("Button", () => {
    it("renders with the correct title", () => {
        const title = "Click me!"
        const { getByText } = render(
            <Button title={title} handlePushButton={() => {}} />
        )
        const button = getByText(title)
        expect(button).toBeInTheDocument()
    })

    it("calls the onClick callback when clicked", () => {
        const handlePushButton = jest.fn()
        const { getByRole } = render(
            <Button title="Click me!" handlePushButton={handlePushButton} />
        )
        const button = getByRole("button")
        fireEvent.click(button)
        expect(handlePushButton).toHaveBeenCalledTimes(1)
    })

    it("applies the correct CSS class", () => {
        const { getByRole } = render(
            <Button title="Click me!" handlePushButton={() => {}} />
        )
        const button = getByRole("button")
        expect(button).toHaveClass("container")
    })
})
