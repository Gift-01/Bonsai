import React from "react";
import "../styles/Button.css"

const Button = ({ onClick, children, as: Component = "button", ...rest }) => {
  return (
    <Component onClick={onClick} className="button" {...rest}>
      {children}
    </Component>
  );
};

export default Button;
