import Image from "next/image"

export const InfoCount = () => {
    return (
        <Image
            src="/info_count.svg"
            alt="Logo"
            width={32}
            height={32}
            priority
        />
    )
}

export default InfoCount
