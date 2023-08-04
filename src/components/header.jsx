"use client";

import { useState } from "react";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar z-50  ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="navbar_logo">Logo</div>
      <ul className="navbar_links list-none m-0 p-0 flex">
        <li className="navbar_item">
          <Link className="navbar_link" href="">
          <span className="text-customyello">01.</span> Accueil
          </Link>
        </li>
        <li className="navbar_item">
          <Link className="navbar_link" href="/styles/themes">
            <span className="text-customyello">02.</span> Styles
          </Link>
        </li>
        <li className="navbar_item">
          <Link className="navbar_link" href="">
          <span className="text-customyello">03.</span> Comparision
          </Link>
        </li>
      </ul>
      <button
        className="navbar_burger w-10 h-10 bg-transparent border-none text-inherit hidden"
        onClick={handleShowLinks}
      >
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Header;
