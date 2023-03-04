import Image from "next/image"

type Props = {
    url: string
    width?: number
    height?: number
    alt?: string
}
export const Icon = ({ url, width = 32, height = 32, alt = "logo" }: Props) => {
    return (
        <Image
            src={url}
            alt={alt}
            width={width}
            height={height}
            priority={true}
        />
    )
}

export default Icon
