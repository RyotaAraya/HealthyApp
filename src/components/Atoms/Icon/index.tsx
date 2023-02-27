import Image from "next/image"

type Props = {
    url: string
    width?: number
    height?: number
}
export const Icon = ({ url, width = 32, height = 32 }: Props) => {
    return <Image src={url} alt="Logo" width={width} height={height} priority />
}

export default Icon
