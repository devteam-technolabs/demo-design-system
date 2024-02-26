import React from 'react';
import { Story } from '@ladle/react';
import  Button  from '../../../components/Button/Button';
import "../../../index.scss";
import { ControlType } from '@ladle/react';
import ButtonProps from '../../../components/Button/type';


const buttonVariants = ["default", "destructive", "outline", "secondary", "ghost", "link"];

const createButtonStory = (storylabel: string, defaultVariant: string, defaultSize: string) => {

  const ButtonStory = ({ label = storylabel, variant = defaultVariant, size = defaultSize, onClick }: ButtonProps) => (
    <Button variant={variant} size={size} onClick={onClick} label={storylabel}>{label}</Button>
  );

  ButtonStory.args = {
    label: storylabel,
  };

  ButtonStory.argTypes = {
    variant: {
      options: buttonVariants,
      control: { type: "inline-radio" as ControlType },
      defaultValue: defaultVariant,
    },
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "select" as ControlType },
      defaultValue: defaultSize
    },
    onClick: {
      action: "clicked",
    }
  };

  return ButtonStory;
};

export const Default: Story<{ label: string; variant: any; size: any; onClick: () => void; }> = createButtonStory("Default", "default", "default");
export const Destructive: Story<{ label: string; variant: any; size: any; onClick: () => void; }> = createButtonStory("Destructive", "destructive", "default");
export const Outline: Story<{ label: string, variant: any, size: any; onClick: () => void; }> = createButtonStory("Outline", "outline", "default");
export const Secondary: Story<{ label: string, variant: any, size: any; onClick: () => void; }> = createButtonStory("Secondary", "secondary", "default");
export const Ghost: Story<{ label: string, variant: any, size: any; onClick: () => void; }> = createButtonStory("Ghost", "ghost", "default");
export const link: Story<{ label: string, variant: any, size: any; onClick: () => void; }> = createButtonStory("Link", "link", "default");
export const Small: Story<{ label: string, variant: any, size: any; onClick: () => void; }> = createButtonStory("Small", "default", "sm");
export const Large: Story<{ label: string, variant: any, size: any; onClick: () => void; }> = createButtonStory("Large", "default", "lg");

export const a11y: Story = () => (
  <div>
    <Button variant="default" size="default" label={"Example Button"} onClick={function (): void {
      throw new Error('Function not implemented.');
    } }>Example Button</Button>
  </div>
);