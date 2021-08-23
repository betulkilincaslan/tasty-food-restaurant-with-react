//npx json-server --watch src/api/db.json --port 3008
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";
const Navbar = React.lazy(() => import("./components/Navbar"));
const Sidebar = React.lazy(() => import("./components/Sidebar"));
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const ContactPage = React.lazy(() => import("./Pages/ContactPage"));
const MenuPage = React.lazy(() => import("./Pages/MenuPage"));
const CartPage = React.lazy(() => import("./Pages/CartPage"));
const NotFound = React.lazy(() => import("./components/common/NotFound"));
const ScrollToTop = React.lazy(() => import("./components/common/ScrollToTop"));
const ScrollUp = React.lazy(() => import("./components/common/ScrollUp"));

function App() {
  // **********  For Hamburger Menu ********** //
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const hideMenu = () => {
    if (window.innerWidth > 768 && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Initialize AOS effect
    AOS.init({ duration: 1000 });

    hideMenu();
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  // **********  Scroll to Top ********** //
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // **********  Change Navbar Background ********** //
  const [navbarBg, setNavbarBg] = useState("");

  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <ScrollUp toggleHome={toggleHome} />
      <ScrollToTop />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} toggleHome={toggleHome} navbarBg={navbarBg} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage {...props} setNavbarBg={setNavbarBg} />}
        />
        <Route
          path="/menu"
          render={(props) => (
            <MenuPage
              {...props}
              toggleHome={toggleHome}
              setNavbarBg={setNavbarBg}
            />
          )}
        />
        <Route
          path="/contact"
          render={(props) => (
            <ContactPage {...props} setNavbarBg={setNavbarBg} />
          )}
        />

        <Route
          path="/cart"
          render={(props) => <CartPage {...props} setNavbarBg={setNavbarBg} />}
        />
        <Route
          render={(props) => <NotFound {...props} setNavbarBg={setNavbarBg} />}
        />
      </Switch>
    </React.Suspense>
  );
}

export default App;
