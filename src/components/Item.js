import "../App.css";
import Apple from "../images/icons/appel.png";

const Item = () => {
  return (
    <li>
      <img className="item-icon" src={Apple} />
      <p className="item-name">Item Name</p>
    </li>
  );
};

export default Item;
