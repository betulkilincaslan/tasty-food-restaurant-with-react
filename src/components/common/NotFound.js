import { Link } from "react-router-dom";

const NotFound = (props) => {
  const { setNavbarBg } = props;

  setNavbarBg("");
  return (
    <div
      style={{ height: "calc(100vh - 64px)" }}
      className=" not-found-bg text-gray-50 mt-16 flex"
    >
      <div className=" flex flex-col gap-4 items-center justify-center container mx-auto text-center">
        <h3 className="text-6xl font-bold">404</h3>
        <h3 className="text-6xl font-medium py-8">oops! Page not found</h3>
        <Link
          to="/"
          className="text-2xl font-medium bg-yellow-500  rounded-full px-8 py-4 hover:bg-yellow-400 transition-colors duration-300"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
