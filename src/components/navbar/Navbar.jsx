import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Richard.</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>
          <a href="https://drive.google.com/file/d/1zcFlZcdKg-L2rAx3iP4zxqH6qkGX4MUQ/view?usp=sharing">
            Resume
          </a>
        </p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>Contact</p>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Richard.</a>
              </p>
              &nbsp;
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Resume</p>
              &nbsp;
              <p>Contact</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
