import Image from "next/image"

type Props = {
    url: string
}

//Navのメニューやクローズアイコン
export const IconMenu = ({ url }: Props) => {
    return <Image src={url} alt="icon" width={32} height={32} priority />
}

export default IconMenu
