import "../App.css";
import Logo from "../images/logo1.svg";

const Header = () => {
  return (
    <header>
      <img src={Logo} className="logo" alt="pick 'em logo" />
    </header>
  );
};

export default Header;
