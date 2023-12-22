import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Link href="/store/Todos">
      <div className="text-white text-xs font-medium text-center uppercase no-underline border-solid border-1 border-white border-2 bg-transparent cursor-pointer inline-block py-3 px-7">
        {children}
      </div>
    </Link>
  );
};

export default Button;
