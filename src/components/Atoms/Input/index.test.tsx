import { fireEvent, render } from "@testing-library/react"

import Input from "@/components/Atoms/Input"

describe("Input", () => {
    test("renders correctly", () => {
        const { getByPlaceholderText } = render(
            <Input
                value=""
                placeholder="Input Test"
                loading={false}
                handleInputChange={() => {}}
            />
        )
        const input = getByPlaceholderText("Input Test")
        expect(input).toBeInTheDocument()
    })

    test("handles input change", () => {
        const handleInputChange = jest.fn()
        const { getByPlaceholderText } = render(
            <Input
                value="initial value"
                placeholder="Input Test"
                loading={false}
                handleInputChange={handleInputChange}
            />
        )
        const input = getByPlaceholderText("Input Test")

        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute("value", "initial value")
        fireEvent.change(input, { target: { value: "after" } })
        expect(handleInputChange).toHaveBeenCalledWith("after")
    })

    test("disables input when loading is true", () => {
        const { getByPlaceholderText } = render(
            <Input
                value=""
                placeholder="Input Test"
                loading={true}
                handleInputChange={() => {}}
            />
        )
        const input = getByPlaceholderText("Input Test")
        expect(input).toBeDisabled()
    })
})
