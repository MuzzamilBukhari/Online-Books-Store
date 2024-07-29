import { ReactNode } from "react";

const Button = ({
  children,
  type,
  onClick,
  className,
}: {
  children: ReactNode;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
