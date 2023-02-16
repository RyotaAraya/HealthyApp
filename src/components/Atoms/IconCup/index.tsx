import Image from "next/image"

export const Cup = () => {
    return (
        <Image
            src="/icons/icon_cup.svg"
            alt="Logo"
            width={56}
            height={56}
            priority
        />
    )
}

export default Cup
