import React from "react";
import WassapLogo from "./svgLinkBar/WassapLogo";
import LinkedinLogo from "./svgLinkBar/LinkedinLogo";
import GithubLogo from "./svgLinkBar/GithubLogo";

const LinkBar = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-row space-x-4 landscape:flex-col landscape:space-x-0 landscape:space-y-4">
        <div className="z-30 relative group transition-transform duration-300 transform hover:scale-105 flex items-center justify-center w-16 h-16">
          <a
            href="https://github.com/spjhon"
            target="_blank"
            rel="noopener"
            title="Visita mi Github"
            className="relative z-30 hover:shadow"
          >
            <GithubLogo />
          </a>
          
          {/* Efecto de brillo, bright effect */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div
              className={`absolute inset-0 rounded-full blur-xl dark:bg-white opacity-60 `}
            ></div>
            <div
              className={`absolute inset-0 rounded-full blur-3xl dark:bg-white opacity-40  `}
            ></div>
          </div>

        </div>
        <div className="z-30 relative group transition-transform duration-300 transform hover:scale-105 flex items-center justify-center w-16 h-16">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
            title="Visita mi linkedin"
            className="relative z-30 hover:shadow"
          >
            <LinkedinLogo />
          </a>

          {/* Efecto de brillo, bright effect */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div
              className={`absolute inset-0 rounded-full blur-xl dark:bg-white opacity-60 `}
            ></div>
            <div
              className={`absolute inset-0 rounded-full blur-3xl dark:bg-white opacity-40  `}
            ></div>
          </div>

        </div>

        <div className=" z-30 relative group transition-transform duration-300 transform hover:scale-105 flex items-center justify-center w-16 h-16">
          <a
            href="https://wa.me/3215224583"
            target="_blank"
            rel="noopener"
            title="Escribenos a whatsapp"
            className="relative z-30 hover:shadow"
          >
            <WassapLogo />
          </a>

          {/* Efecto de brillo, bright effect */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div
              className={`absolute inset-0 rounded-full blur-xl dark:bg-white opacity-60 `}
            ></div>
            <div
              className={`absolute inset-0 rounded-full blur-3xl dark:bg-white opacity-40  `}
            ></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LinkBar;
