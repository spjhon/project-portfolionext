"use client";
import ThemeChanger from "../DarkSwitch/DarkSwitch";
import NavigationLink from "../NavigationLink";
import LanguageSwitcher from "../LocaleSwitcher/LocaleSwitchers";
import { useTranslations } from "next-intl";

import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
  CloseButton,
} from "@headlessui/react";



export const Navbar = () => {
  const t = useTranslations("NavigationLinks");
  const navigation = [
    { LinkName: t("home"), href: "/" },
    { LinkName: t("projects"), href: "/projects" },
  ];

  /*

Explicacion del sideño del componente:

- El nav bar esta hecho para verse en tres partes cuanto esta en pantallas grande (el logo, el menu y el boton de llamado a la accion con una
pequeña adicon de una forma de cambiar el theme)

- Luego en el logo hay algo bastante creativo, el logo contiene un disclosure escondido que solo se muestra cuando esta en pantallas
pequeñas, cuando esta en pantallas grandes solo se muestra el logo, osea que el logo siempre esta visible sin importar la pantalla

- El open es un state que viene con el componente disclosure para tener el state y de acuerto a ese state hacer cambios en el codigo
  */

/*

Explanation of the component design:

- The navbar is designed to display in three parts on large screens (the logo, the menu, and the call-to-action button with a small addition of a theme switcher).

- Then, there's something quite creative with the logo. It contains a hidden disclosure that only appears on small screens. On large screens, only the logo is visible, meaning the logo is always shown regardless of screen size.

- The `open` is a state that comes with the disclosure component to manage the state and, based on that state, make changes in the code.

*/

  return (
    <nav aria-label="Main Navigation" className=" shadow-xl relative z-10 mt-3 landscape:mt-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-900 dark:border-gray-100 ">
      {/* Logo  */}
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex flex-wrap justify-center">

           

              <DisclosureButton
                aria-label={open ? "Close Menu" : "Open Menu"}
                className="px-4 py-2 rounded-md lg:hidden hover:text-secondary dark:hover:text-primary focus:text-accent dark:focus:bg-secondary focus:bg-secondary focus:outline-none "
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </DisclosureButton>

                <div className="flex items-center lg:hidden">
              <ThemeChanger />
              </div>

              <div className="lg:hidden">
              <LanguageSwitcher />
              </div>

              <DisclosurePanel
                transition
                className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 flex flex-wrap justify-center w-full my-5 lg:hidden"
              >
                <>
                  {navigation.map((item, index) => (
                    <CloseButton
                      key={index}
                      as={NavigationLink}
                      href={item.href}
                      className="w-full px-4 py-2  rounded-md focus:outline-none text-center flex justify-center dark:text-white"
                    >
                      {item.LinkName}
                    </CloseButton>
                  ))}
                  <CloseButton
                    as="a"
                    href="https://wa.me/3147045347"
                    target="_blank"
                    rel="noopener"
                    title="Escribenos a whatsapp"
                    className="transition-transform duration-300 transform hover:scale-105 w-full px-6 py-2 mt-3 my-4 text-center text-white bg-accent rounded-md lg:ml-5"
                  >
                    Escribenos a WhatsApp
                  </CloseButton>
                  
                </>
              </DisclosurePanel>
            </div>
          </>
        )}
      </Disclosure>

      {/* menu  */}
      <div className="hidden text-center lg:flex lg:items-center lg:justify-evenly">
        <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
          {navigation.map((item, index) => (
            <li className="mr-3" key={index}>
              <NavigationLink
                href={item.href}
                className="inline-block px-4 py-2 text-lg font-normal no-underline rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {item.LinkName}
              </NavigationLink>
            </li>
          ))}
          <li className="mr-3">
            <ThemeChanger />
          </li>
          <li className="mr-3">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};
