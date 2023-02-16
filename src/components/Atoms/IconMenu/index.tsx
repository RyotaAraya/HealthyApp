import Image from 'next/image'

export const IconMenu = () => {
    return (
        <Image
            src="/icons/icon_menu.svg"
            alt="Logo"
            width={32}
            height={32}
            priority
        />
    )
}

export default IconMenu
