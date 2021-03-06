import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaCartPlus } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <footer style={{ zIndex: "9990" }} className="bg-green-800">
      <div className="max-w-6xl px-6 py-8 mx-auto text-center text-gray-50">
        <div className="grid gap-12 mt-12 md:mt-16 sm:grid-cols-2 md:grid-cols-3">
          <div className="footer-brand-link logo" onClick={toggleHome}>
            <span className="text-yellow-500">TASTY</span> &nbsp;FOOD
          </div>
          <div className="flex justify-center items-center">
            <div className="flex gap-4 items-center justify-center">
              <span>
                <Link to="/menu" className="footer-link">
                  Menu
                </Link>
              </span>
              <span>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </span>
              <span>
                <Link to="/cart" className="footer-cart-link">
                  <FaCartPlus size={20} />
                  <span>Cart</span>
                </Link>
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex gap-6">
              <span className="">
                <a href="/">
                  <FaFacebook className="social-link" />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaInstagram className="social-link" />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaTwitter className="social-link" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-12 border-t-4 border-green-700 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-xs mb-2 text-gray-100">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
