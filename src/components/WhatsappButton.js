import React from "react";
import StyledButton from "./StyledButton";
import "./WhatsappButton.css";

function WhatsappButton({ phoneNumber, text }) {
  const openWhatsappInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <StyledButton
      variant={"success"}
      title={"Contact us via Whatsapp!"}
      customStyle={"whatsapp_button"}
      children={
        <div className="align-item-center">
          <i className="fab fa-whatsapp" />
        </div>
      }
      onClick={() =>
        openWhatsappInNewTab("https://wa.me/" + phoneNumber + "?text=" + text)
      }
    />
  );
}

export default WhatsappButton;
