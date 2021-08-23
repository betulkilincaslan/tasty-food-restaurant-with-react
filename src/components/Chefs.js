import { useState, useEffect } from "react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Chefs = () => {
  // **********  Getting chefs ********** //
  const [chefs, setChefs] = useState([]);

  const getChefs = async () => {
    const chefsURL = "http://localhost:3008/chefs";
    await fetch(chefsURL)
      .then((response) => response.json())
      .then((data) => setChefs(data));
  };

  useEffect(() => {
    getChefs();
  }, []);

  // **********  Slider settings ********** //
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="chefs" className="py-16">
      <div
        data-aos="fade-up"
        className="container mx-auto flex flex-col gap-2 max-w-6xl text-yellow-500"
      >
        <div className="flex flex-col items-center justify-center gap-2 mb-4">
          <h4 className="text-2xl font-secondary tracking-widest font-light">
            Team
          </h4>
          <h4 className="uppercase text-2xl font-semibold tracking-widest">
            Our Chefs
          </h4>
        </div>
        <Slider {...settings}>
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="flex flex-col items-center justify-center text-center text-sm rounded px-4 w-auto"
            >
              <LazyLoadImage
                effect="blur"
                className="bg-center"
                src={chef.image}
                alt="chef-img"
              />
              <span className="text-gray-800">
                <h4 className="font-semibold tracking-widest">
                  {chef.fullName}
                </h4>
                <h4 className="logo tracking-widest">{chef.job}</h4>
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Chefs;
