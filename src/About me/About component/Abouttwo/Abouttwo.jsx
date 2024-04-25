import React from "react";
import "./Abouttwo.scss"

function Abouttwo() {
  return (
    <div id="Abouttwo">
      <h1>ABOUT ME</h1>
      <div id="AboutBorder"></div>

      <h1>FRONT-END WEB DEVELOPER</h1>
      <p>
        A self-motivated, energetic, and passionate professional web Development
        with valuable experience in React, MaterialUi, Frame Motion, SCSS. I
        enjoy turning complex problems into simple, beautiful, and intuitive
        interface designs
      </p>

      <div id="form">
        <form>
        <div className="formab">
          <label><span>Name:</span> Prashant Kushwaha</label>
          
          <label><span>Phone:</span> +91 9795243902</label>
          </div>
           <div className="formab">
          <label>
          <span>Education:</span> Bechelors in Computer Science and Engineering
          </label>
          </div>
          <div>
          <label>
          <span>Address:</span> RGS Nagar Boys Hostel, Avantika extension, Ghaziabad
          </label>
          </div>
          <div className="formab">
          <label><span>Email:</span> prashantkush24@gmail.com</label>
          </div>        
        </form>
      </div>
      <div>
      
      </div>
    </div>
  );
}

export default Abouttwo;
