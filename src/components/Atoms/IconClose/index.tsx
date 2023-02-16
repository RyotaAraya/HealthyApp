import Image from 'next/image'

export const IconClose = () => {
    return (
        <Image
            src="/icons/icon_close.svg"
            alt="Logo"
            width={32}
            height={32}
            priority
        />
    )
}

export default IconClose
