import { useEffect } from "react";
import Contact from "../components/Contact";
import Footer from "../components/common/Footer";

const ContactPage = (props) => {
  const { addMessage, setNavbarBg } = props;

  useEffect(() => {
    setNavbarBg("");
  }, []);

  return (
    <>
      <Contact addMessage={addMessage} />
      <Footer />
    </>
  );
};

export default ContactPage;
