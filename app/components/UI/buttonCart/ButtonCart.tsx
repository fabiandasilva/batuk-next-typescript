
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}
const ButtonCart: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (

    <button
      className={`mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-4 py-3 text-sm uppercase font-medium text-white ${disabled ? 'bg-gray-400' : 'bg-black'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>

  );
};

export default ButtonCart;
