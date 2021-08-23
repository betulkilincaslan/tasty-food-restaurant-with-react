import { Link as LinkScroll } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl px-6 py-16 mx-auto">
        <div className="items-center text-center md:text-left  md:flex md:space-x-16">
          <div
            data-aos="fade-up"
            className="md:w-1/2 flex flex-col gap-6 justify-center items-center md:items-start"
          >
            <h4 className="text-green-700 text-xl md:text-2xl font-semibold font-secondary tracking-widest">
              About us
            </h4>
            <h2 className="text-gray-800 font-bold text-2xl md:text-3xl">
              Who we are
            </h2>
            <p className="text-gray-700 font-semibold text-lg md:text-xl max-w-md text-center md:text-left">
              Just let this happen. We just let this flow right out of our
              minds. These little son of a guns hide in your brush and you just
              have to push them out. A fan brush can be your best friend.
            </p>
            <LinkScroll
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-64}
              duration={1500}
              className="py-3 px-5 md:py-5 md:px-8 bg-yellow-500 rounded-full text-xl sm:text-2xl font-semibold hover:bg-yellow-400 hover:text-gray-50 transition-all duration-300 ease-in-out inline-flex items-center cursor-pointer"
            >
              Testimonials
            </LinkScroll>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/2">
            <div className="flex items-center justify-center">
              <div className="max-w-md">
                <img
                  data-aos="fade-up"
                  style={{ height: "450px" }}
                  src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="About us"
                  className="object-cover object-center rounded-md shadow w-96"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
