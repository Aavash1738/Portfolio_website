import React from "react";
import { CONTACT } from "../constants/index.js";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">
        Get in <span className="text-neutral-500"> Touch</span>
      </h2>
      <div className="text-center tracking-tighter">
        <p className="my-2">{CONTACT.phoneNo}</p>
        <p className="my-2">{CONTACT.email}</p>
        <p className="my-2">{CONTACT.address}</p>
      </div>
    </div>
  );
};

export default Contact;
