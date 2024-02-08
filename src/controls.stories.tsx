import type { Story } from "@ladle/react";

export const Controls: Story<{
 label: string,
 disabled: boolean,
 colors: string,
 variant: string,
 size: string,
}> = ({ disabled, label, colors, variant, size }) => (
 <>
   <button
     disabled={disabled}
     style={{
       backgroundColor: colors,
       color: "white",
       padding: "16px 32px",
       width: size,
     }}
   >
     {label}
   </button>
   {disabled ? (
     <h3>The button above is disabled</h3>
   ) : (
     <h3>The button above can be clicked</h3>
   )}
 </>
);
Controls.args = {
 label: "Hello world",
 disabled: false,
 size: "big",
 colors: "blue",
};
Controls.argTypes = {
 variant: {
   options: ["primary", "secondary"],
   control: { type: "radio" },
   defaultValue: "primary",
 },
};