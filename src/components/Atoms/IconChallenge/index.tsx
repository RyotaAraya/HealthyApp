import Image from 'next/image'

export const IconChallenge = () => {
    return (
        <Image
            src="/icons/icon_challenge.svg"
            alt="Logo"
            width={32}
            height={32}
            priority
        />
    )
}

export default IconChallenge
