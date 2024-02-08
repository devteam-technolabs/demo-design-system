import type { Story } from "@ladle/react";
import React from "react"; //remember to import React
import { Card } from "./Card";

export const Controls: Story<{
  img: {
    src: string;
    alt: string;
  };
  title: string;
  children?: React.ReactNode;
}> = ({ img, title, children }) => (
 <>
   <Card
    img={img}
    title={title}
    children={children}
   >
   </Card>
 </>
);
Controls.args = {
 img:{
  src:"https://t4.ftcdn.net/jpg/01/43/23/83/360_F_143238306_lh0ap42wgot36y44WybfQpvsJB5A1CHc.jpg",
  alt:"Hello world"
 },
 title:"Hello my buddy"
};
// Controls.argTypes = {
//  variant: {
//    options: ["primary", "secondary"],
//    control: { type: "radio" },
//    defaultValue: "primary",
//  },
// };