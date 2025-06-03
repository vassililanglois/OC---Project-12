/**
 * React component to display the topnav.
 *
 * @returns {JSX.Element}
 *
 * @description
 * This component display the topnav wich contains the website logo and the links
 * to others pages.
 */

import logo from "../assets/icons/logo.png";

function TopNav() {
  return (
    <div className="topnav">
      <img src={logo} alt="Logo du site SportSee" />
      <a href="#">Accueil</a>
      <a href="#">Profil</a>
      <a href="#">Réglages</a>
      <a href="#">Communauté</a>
    </div>
  );
}

export default TopNav;
