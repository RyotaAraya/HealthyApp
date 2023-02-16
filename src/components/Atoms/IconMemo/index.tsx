import Image from 'next/image'

export const IconMemo = () => {
    return (
        <Image
            src="/icons/icon_memo.svg"
            alt="Logo"
            width={32}
            height={32}
            priority
        />
    )
}

export default IconMemo
