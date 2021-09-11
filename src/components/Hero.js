import { Link } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";

const Hero = () => {
  return (
    <section id="home" className="hero-bg flex items-center justify-center">
      <div className="hero-container">
        <h1 data-aos="fade-up" className="hero-title">
          Tasty food
        </h1>
        <h2 data-aos="fade-up" className="mt-6 text-2xl">
          Try the best food
        </h2>
        <div data-aos="fade-up" className="flex justify-center mt-8">
          <Link to="/menu" className="hero-link">
            View Menu
            <BiFoodMenu className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
