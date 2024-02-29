import React from "react";
import './Contact.css';

function Contact() {
    return  <div id="Contact"> 
           <div id="contactText">
           <div id="Contacthead">
            <h1>Let's Work<br></br>togrther</h1>
           </div>
           <div id="Contactdata">
            <h1>Mail</h1>
            <span>prashantkush24@gmail.com</span>
           </div>
           <div id="Contactdata">
           <h1>Address</h1>
            <span>RGS Nagar Boys Hostel,<br></br> Avantika extension, Ghaziabad</span>
           </div>
           <div id="Contactdata">
           <h1>Phone</h1>
            <span>+91 9795243902</span>
           </div>

           </div>
           <div id="contactArea">
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
               <textarea rows={9} placeholder="Massage" />
               <button>Submit </button>
            </form>
           </div>
    </div> 
}

export default Contact;