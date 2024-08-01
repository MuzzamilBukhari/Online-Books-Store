import { ReactNode } from "react";

const Button = ({
  children,
  type,
  onClick,
  className,
  transition,
}: {
  children: ReactNode;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  className?: string;
  transition?: string;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200 ${className}`}
      data-aos={transition}
    >
      {children}
    </button>
  );
};

export default Button;
