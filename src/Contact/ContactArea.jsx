import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";


function ContactArea() {
    return <div id="contactArea">
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea rows={6} placeholder="Massage" />
      <button>Submit </button>
    </form>
  </div>
}

export default ContactArea