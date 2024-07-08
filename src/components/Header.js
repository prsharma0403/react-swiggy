import { useState } from "react";

import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
  const[btnnameReact,setBtnNameReact]=useState('Login');
 
  
    return (
      <div className="flex">
        
          
          <img className="p-10" alt="IMG-logo" src={LOGO_URL } />
          <div className="">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/price">Price</Link></li>
              <li><Link to="/offers">Offers</Link></li>
              <li><Link to="/helps">Helps</Link></li>
              <li><Link to="/cart">Cart</Link></li>
             
              <button onClick={()=>{btnnameReact==='Login'?setBtnNameReact("Logout"):setBtnNameReact("Login")}
             
              } className="login">{btnnameReact}</button>
            </ul>
          </div>
        
      </div>
    );
  };
  export default Header;