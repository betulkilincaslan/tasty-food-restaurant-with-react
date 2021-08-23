import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Sidebar = (props) => {
  const { toggle, isOpen } = props;

  return (
    <div
      className={
        isOpen
          ? "flex flex-col left-0 w-full fixed top-16 text-center py-4 gap-4 text-xl font-semibold bg-green-800  bg-opacity-90 text-white uppercase tracking-widest"
          : "hidden"
      }
      onClick={toggle}
      style={{ zIndex: "9999" }}
    >
      <Link
        to="/"
        className="text-lg transform hover:text-yellow-400 transition-colors duration-300"
      >
        Home
      </Link>
      <Link
        to="/menu"
        className="text-lg transform hover:text-yellow-400 transition-colors duration-300"
      >
        Menu
      </Link>
      <Link
        to="/contact"
        className="text-lg transform hover:text-yellow-400 transition-colors duration-300"
      >
        Contact Us
      </Link>
      <Link
        to="/cart"
        className="flex gap-2 items-center justify-center text-lg transform hover:text-yellow-400 transition-colors duration-300"
      >
        <span>Cart</span>
        <FaCartPlus size={20} />
      </Link>
    </div>
  );
};

export default Sidebar;
