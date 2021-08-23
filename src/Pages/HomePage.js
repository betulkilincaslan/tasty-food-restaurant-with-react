import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/common/Footer";
import Testimonials from "../components/Testimonials";
import Chefs from "../components/Chefs";

const HomePage = (props) => {
  const { setNavbarBg } = props;

  useEffect(() => {
    setNavbarBg("bg-transparent");

    const handleScroll = () => {
      const scroll = window.scrollY >= 64;
      if (scroll) {
        setNavbarBg("");
      } else {
        setNavbarBg("bg-transparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Chefs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
