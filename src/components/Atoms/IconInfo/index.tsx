import Image from 'next/image'

export const IconInfo = () => {
    return (
        <Image
            src="/icons/icon_info.svg"
            alt="Logo"
            width={32}
            height={32}
            priority
        />
    )
}

export default IconInfo
