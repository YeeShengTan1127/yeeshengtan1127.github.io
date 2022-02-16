import React from "react";
import StyledButton from "./StyledButton";
import "./WhatsappButton.css";

function WhatsappButton() {
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
        openWhatsappInNewTab(
          "https://wa.me/6596129066?text=Hi%2C%20I%27m%20interest%20on%20your%20services.%20Could%20you%20please%20provide%20more%20info%3F"
        )
      }
    />
  );
}

export default WhatsappButton;
