import { Link } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";

const Hero = () => {
  return (
    <section id="home" className="hero-bg flex items-center justify-center">
      <div className="flex flex-col gap-4 text-center uppercase tracking-widest  font-bold text-gray-50">
        <h1
          data-aos="fade-up"
          className="lg:text-8xl text-6xl border-b-8 border-yellow-500 p-2"
        >
          Tasty food
        </h1>
        <h2 data-aos="fade-up" className="mt-6 text-2xl">
          Try the best food
        </h2>
        <div data-aos="fade-up" className="flex justify-center mt-8">
          <Link
            to="/menu"
            className="py-4 px-8 text-2xl font-bold bg-transparent border-2 border-yellow-500 rounded-full hover:bg-yellow-400 transition-all transform duration-300 flex items-center"
          >
            View Menu
            <BiFoodMenu className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
