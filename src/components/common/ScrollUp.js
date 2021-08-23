import { useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollUp = (props) => {
  const { toggleHome } = props;

  // **********  Handling scroll ********** //
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY >= 800;
      if (show) {
        document.getElementById("scroll-up").style.display = "block";
      } else {
        document.getElementById("scroll-up").style.display = "none";
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div onClick={toggleHome} className="scroll-container">
      <FaArrowCircleUp id="scroll-up" className="scroll-icon" />
    </div>
  );
};

export default ScrollUp;
