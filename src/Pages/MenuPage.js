import { useEffect } from "react";
import CategoryList from "../components/Menu/CategoryList";
import MenuList from "../components/Menu/MenuList";
import SearchMenuItem from "../components/Menu/SearchMenuItem";
import Footer from "../components/common/Footer";

const MenuPage = (props) => {
  const { toggleHome, setNavbarBg } = props;
  useEffect(() => {
    setNavbarBg("");
  }, []);

  return (
    <>
      <section className="flex mt-16 mb-16">
        <CategoryList toggleHome={toggleHome} />
        <aside className="min-h-screen p-4 mx-auto max-w-screen-3xl w-full items-center justify-center">
          <main className="mt-16">
            <SearchMenuItem />
            <MenuList />
          </main>
        </aside>
      </section>
      <Footer />
    </>
  );
};

export default MenuPage;
