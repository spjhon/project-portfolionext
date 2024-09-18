import React from "react";
import { Container } from "@/components/Container";


interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <header aria-labelledby="section-title" aria-describedby="section-description">
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.icon && (
        props.icon
      )}

      {props.preTitle && (
        <span className="text-sm font-bold tracking-wider text-accent dark:text-secondary uppercase">
          {props.preTitle}
        </span>
      )}

      {props.title && (
        <h2 id="Title of the section" className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl ">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p id="Description of the section, it could be the stack or the education timeline" className="max-w-2xl py-4 text-lg leading-normal text-gray-900 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
    </header>
  );
};
