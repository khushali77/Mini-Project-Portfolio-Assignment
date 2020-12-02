import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(
      <ul className="links">
         <li><Link to='/Home'>Home</Link></li>
         <li><Link to='/About'>About</Link></li>
         <li><Link to='/Contact'>Contact</Link></li>
      </ul>
    );
}

export default Header;