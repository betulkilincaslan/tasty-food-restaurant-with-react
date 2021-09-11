import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Sidebar = (props) => {
  const { toggle, isOpen } = props;

  return (
    <div
      className={isOpen ? "sidebar" : "hidden"}
      onClick={toggle}
      style={{ zIndex: "9999" }}
    >
      <Link to="/" className="sidebar-link">
        Home
      </Link>
      <Link to="/menu" className="sidebar-link">
        Menu
      </Link>
      <Link to="/contact" className="sidebar-link">
        Contact Us
      </Link>
      <Link to="/cart" className="sidebar-cart-link">
        <span>Cart</span>
        <FaCartPlus size={20} />
      </Link>
    </div>
  );
};

export default Sidebar;
