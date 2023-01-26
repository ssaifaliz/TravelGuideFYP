/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./floatBtn.scss";

export default function floatBtn() {
  return (
    <div className="float">
      <a
        href="https://api.whatsapp.com/send?phone=51955081075&text=The%Explorer."
        target="_blank"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
