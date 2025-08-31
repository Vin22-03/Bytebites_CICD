import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/bytebitesss.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import blackLogo from "../../assets/images/blklogo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <nav>
        <span>Get the App</span>
        <div className="right">
          <span>Investor Relations</span>
          <span>Add restaurant</span>
          <span>Log in</span>
          <span>Sign up</span>
        </div>
      </nav>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
      </div>
      {open && (
        <div className="sideMenu">
          <img src={blackLogo} alt="logo" />
          <div className="innerMenu">
            <span>Investor Relations</span>
            <span>Add restaurants</span>
            <span>Log In</span>
            <span>Sign Up</span>
          </div>
        </div>
      )}
      <div className="headerContent">
        <img src={Logo} alt="logo" />
        <h3>Discover the Best Food & Drinks in Hubballi</h3>
        <div className="input">
          <select name="" id="">
            <option value="Hubballi">Hubballi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Chennai">Chennai</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            
          </select>
          |
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
