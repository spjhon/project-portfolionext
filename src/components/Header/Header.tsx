// components/Header.tsx

import NavigationLink from "../NavigationLink"
import LanguageSwitcher from "../LocaleSwitcher/LocaleSwitchers"
import ThemeSwitch from "@/components/DarkSwitch/DarkSwitch";

export default function Header() {
    return (
        <header className="bg-barra dark:bg-accent">
            <nav className="container flex px-2 py-2 gap-5 ">
                <NavigationLink href="/">Home</NavigationLink>
                <NavigationLink href="/about">About</NavigationLink>
                <ThemeSwitch></ThemeSwitch>
            </nav>
            <LanguageSwitcher></LanguageSwitcher>
        </header>
    )
}