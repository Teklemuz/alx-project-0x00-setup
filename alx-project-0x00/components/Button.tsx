import React from "react";

interface ButtonProps {
  title: string;
  styles: "small" | "medium" | "large"; 
  shape: "rounded-sm" | "rounded-md" | "rounded-full"; 
}

const Button: React.FC<ButtonProps> = ({ title, styles, shape }) => {
  const sizeClasses = {
    small: "py-1 px-4 text-sm",
    medium: "py-2 px-6 text-base",
    large: "py-3 px-8 text-lg",
  };

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  const buttonClass = `bg-blue-500 text-white hover:bg-blue-700 ${sizeClasses[styles]} ${shapeClasses[shape]} transition-all duration-200`;

  return <button className={buttonClass}>{title}</button>;
};

export default Button;
