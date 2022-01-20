import "../App.css";
import Logo from "../images/logo1.svg";

const Header = () => {
  return (
    <header>
      {/* <div className="header-icons">[]icons[]</div> */}
      <div className="header-text">
        {/* <h1>Pick 'Em</h1> */}
        <img src={Logo} className="logo" />

        {/* <h2>Shopping List App</h2> */}
      </div>
      {/* <div className="header-icons">[]icons[]</div> */}
    </header>
  );
};

export default Header;
