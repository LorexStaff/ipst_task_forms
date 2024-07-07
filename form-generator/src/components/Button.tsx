import React from "react";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      style={{
        width: "90px",
        height: "40px",
        fontWeight: "bold",
      }}
      className="btn btn-primary mx-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
