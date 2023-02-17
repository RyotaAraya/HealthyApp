import Image from 'next/image'

export const Logo = () => {
    return (
        <Image
            src="/logo.svg"
            alt="Logo"
            width={144}
            height={64}
            priority
        />
    )
}

export default Logo
