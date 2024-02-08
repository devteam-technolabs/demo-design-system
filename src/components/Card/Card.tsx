import React from "react";
import "./Card.css";interface CardProps {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  children?: React.ReactNode;
}

export function Card({ img, title, children }: CardProps): JSX.Element {
  return (
    <article>
      <img src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      {children}
    </article>
  );
}