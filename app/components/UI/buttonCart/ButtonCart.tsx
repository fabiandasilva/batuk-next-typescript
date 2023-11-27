
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
const ButtonCart: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (

    <button
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-4 py-3 text-sm uppercase font-medium text-white"
      onClick={onClick}
    >
      {children}
    </button>

  );
};

export default ButtonCart;
