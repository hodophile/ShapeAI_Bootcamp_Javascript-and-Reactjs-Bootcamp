import React from "react";

function Footer(){

  var currYear = new Date().getFullYear();

  return
         <footer> //a default tag in html
              <p>Copyright @ {currYear}</p>
         </footer>;
}

export default Footer;
