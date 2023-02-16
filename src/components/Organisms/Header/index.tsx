import Link from "next/link"
export const Header = () => {
    return (
        <header>
            <Link href="/">ロゴ</Link>
            <div>
                <Link href="/my-record">
                    <p>自分の記録</p>
                </Link>
                <Link href="#">
                    <p>チャレンジ</p>
                </Link>
                <Link href="/news">
                    <p>お知らせ</p>
                </Link>
                <button>ボタン</button>
            </div>
        </header>
    )
}

export default Header
