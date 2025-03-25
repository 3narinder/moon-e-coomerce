import React, { ReactNode } from "react";

interface ButtonProps {
  text: string;
  variant?: "fill" | "border" | "footer" | "disabled" | "white";
  width?: number;
  height?: number;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode; // Accepts React components (icons)
}

const Button = ({
  text,
  variant = "fill",
  width = 11,
  height = 11,
  onClick,
  disabled,
  icon,
}: ButtonProps) => {
  const getButtonClass = () => {
    switch (variant) {
      case "fill":
        return "bg-neutral-8 text-neutral-2";
      case "white":
        return "bg-white text-green-dark";
      case "border":
        return "border border-neutral-8 text-neutral-8";
      case "footer":
        return "border border-neutral-2 text-neutral-2";
      case "disabled":
        return "bg-neutral-3 text-neutral-6 cursor-not-allowed";
      default:
        return "border border-neutral-2 text-neutral-2 py-2";
    }
  };

  return (
    <button
      disabled={disabled || variant === "disabled"}
      onClick={onClick}
      className={`px-4 py-2 flex items-center justify-center gap-1 cursor-pointer w-full ${getButtonClass()}`}
    >
      <span className="text-display-1 tracking-wider font-semibold">
        {text}
      </span>

      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
