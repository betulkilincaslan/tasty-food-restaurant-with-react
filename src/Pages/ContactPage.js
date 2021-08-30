import { useEffect } from "react";
import Contact from "../components/Contact";
import Footer from "../components/common/Footer";

const ContactPage = ({ setNavbarBg }) => {
  useEffect(() => {
    setNavbarBg("");
  }, []);

  return (
    <>
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
