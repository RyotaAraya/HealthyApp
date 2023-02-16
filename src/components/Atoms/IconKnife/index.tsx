import Image from "next/image"

export const IconKnife = () => {
    return (
        <Image
            src="/icons/icon_knife.svg"
            alt="Logo"
            width={56}
            height={56}
            priority
        />
    )
}

export default IconKnife
