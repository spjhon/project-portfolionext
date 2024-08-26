// components/Header.tsx

import NavigationLink from "../NavigationLink"
import LanguageSwitcher from "../LocaleSwitcher/LocaleSwitcher"

export default function Header() {
    return (
        <header className="bg-gray-200 shadow">
            <nav className="container flex px-2 py-2 gap-5 ">
                <NavigationLink href="/">Home</NavigationLink>
                <NavigationLink href="/about">About</NavigationLink>
                
            </nav>
            <LanguageSwitcher></LanguageSwitcher>
        </header>
    )
}