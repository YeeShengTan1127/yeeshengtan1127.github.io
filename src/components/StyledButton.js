import React from "react";
import { Button } from "react-bootstrap";
import "./StyledButton.css";

function StyledButton({ onClick, title, children, customStyle, variant }) {
  return (
    <Button
      variant={variant}
      title={title}
      onClick={onClick}
      className={customStyle}
    >
      {children}
    </Button>
  );
}

export default StyledButton;
