// components/Header.tsx

import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-200 shadow">
            <nav className="container flex px-2 py-2 gap-5 ">
                <Link href="/">Home</Link>
                <Link href="/es/about">About</Link>
                
            </nav>
        </header>
    )
}