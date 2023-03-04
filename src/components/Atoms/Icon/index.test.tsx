import { render } from "@testing-library/react"

import { Icon } from "@/components/Atoms/Icon"

describe("Icon", () => {
    const testUrl = "https://test.com/image.jpg"

    it("should render Image component with correct props", () => {
        const { getByAltText } = render(<Icon url={testUrl} />)
        const imgElement = getByAltText("logo") as HTMLImageElement
        expect(imgElement).toBeInTheDocument()
        // TODO:mock化する必要がある
        //expect(imgElement.src).toBe(testUrl)
        expect(imgElement.width).toBe(32)
        expect(imgElement.height).toBe(32)
    })

    it("should render Image component with custom props", () => {
        const testWidth = 64
        const testHeight = 64
        const testAlt = "test alt text"
        const { getByAltText } = render(
            <Icon
                url={testUrl}
                width={testWidth}
                height={testHeight}
                alt={testAlt}
            />
        )
        const imgElement = getByAltText(testAlt) as HTMLImageElement
        expect(imgElement).toBeInTheDocument()
        // TODO:mock化する必要がある
        //expect(imgElement.src).toBe(testUrl)
        expect(imgElement.width).toBe(testWidth)
        expect(imgElement.height).toBe(testHeight)
    })
})
