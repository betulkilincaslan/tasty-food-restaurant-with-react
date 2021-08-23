import { useState, useEffect } from "react";
import Slider from "react-slick";

const Testimonials = () => {
  // **********  Getting testimonials ********** //
  const [testimonials, setTestimonials] = useState([]);

  const getTestimonials = async () => {
    const testimonialsURL = "http://localhost:3008/testimonials";
    await fetch(testimonialsURL)
      .then((response) => response.json())
      .then((data) => setTestimonials(data));
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section
      id="testimonials"
      className="testimonials-container text-center font-semibold text-gray-50 "
    >
      <div className="container mx-auto flex flex-col gap-2 max-w-6xl">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center gap-4"
        >
          <h4 className="text-yellow-500 text-2xl font-secondary tracking-widest font-light">
            Customer's Review
          </h4>
          <h4 className="text-yellow-500 uppercase text-2xl">What they say</h4>
          <hr className="w-64 mx-auto mb-4" />
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              data-aos="fade-up"
              key={testimonial.id}
              className="flex flex-col items-center justify-center text-center text-sm"
            >
              <p className="px-8 mb-4">{testimonial.message}</p>
              <h5 className="font-secondary tracking-widest">
                {testimonial.name}
              </h5>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
