import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}
const ButtonCart: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Link href="/store">
         <button
            type="submit"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-4 py-3 text-sm uppercase font-medium text-white"
          >
            {children}
          </button>
    </Link>
  );
};

export default ButtonCart;
