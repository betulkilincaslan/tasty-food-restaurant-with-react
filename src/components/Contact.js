import { useState } from "react";
import { GoLocation, GoMail } from "react-icons/go";
import { BiPhone } from "react-icons/bi";
import serialize from "form-serialize";

const Contact = () => {
  // **********  Adding contact message to db.son ********** //
  const [contactInfo, setContactInfo] = useState([]);

  const addMessage = async (message) => {
    const addMessageURL = "http://localhost:3008/contact-info";

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    };
    await fetch(addMessageURL, requestOptions)
      .then((response) => response.json())
      .then((data) => setContactInfo(contactInfo.concat([data])));
    console.log(contactInfo);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const contactInfo = serialize(e.target, { hash: true });
    addMessage(contactInfo);
  };

  return (
    <section className="mt-16">
      <div className="max-w-6xl px-6 py-16 mx-auto">
        <div className="items-center md:flex md:space-x-12 mb-2">
          <div
            data-aos="fade-up"
            className="md:w-1/2 flex items-center justify-center"
          >
            <div className="flex flex-col gap-8 justify-center p-4 bg-gray-200 w-full sm:rounded-lg">
              <h2 className="text-gray-800 font-bold text-2xl sm:text-3xl">
                Contact Us
              </h2>
              <p
                className="
                  text-xl
                  sm:text-2xl
                  font-medium
                  text-gray-600                
                "
              >
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center  text-gray-600">
                <GoLocation className="w-6 h-6 text-gray-500" />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Lorem ipsum, Street, State, Postal Code
                </div>
              </div>

              <div className="flex items-center text-gray-600">
                <BiPhone className="w-6 h-6 text-gray-500" />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +90 1234567890
                </div>
              </div>

              <div className="flex items-centertext-gray-600">
                <GoMail className="w-6 h-6 text-gray-500" />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  info@email.com
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="mt-8 md:mt-0 md:w-1/2 ">
            <form
              id="contact-info"
              onSubmit={handleFormSubmit}
              className="p-6 flex flex-col justify-center"
            >
              <h2 className="text-gray-800 font-bold mb-6 text-2xl sm:text-3xl">
                Send Message
              </h2>
              <div>
                <div className="flex flex-col mb-3">
                  <label className="font-medium mb-2" htmlFor="full-name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    placeholder="Full Name"
                    required
                    className="
                  px-3
                  py-2
                  bg-gray-200                  
                  rounded                  
                  focus:outline-none
                  focus:bg-gray-300
                  focus:text-gray-900
                "
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="
                    px-3
                    py-2
                    bg-gray-200                  
                    rounded                  
                    focus:outline-none
                    focus:bg-gray-300
                    focus:text-gray-900
                "
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    id="message"
                    placeholder="Enter your message here"
                    required
                    className="
                    px-3
                    py-2
                    bg-gray-200                  
                    rounded                  
                    focus:outline-none
                    focus:bg-gray-300
                    focus:text-gray-900
                "
                  ></textarea>
                </div>
              </div>
              <div className="w-full pt-3">
                <button
                  type="submit"
                  className="
                w-full
                bg-green-800
                text-gray-50
                rounded
                px-4
                py-2
                transition
                duration-300
                focus:outline-none
                font-semibold
                hover:bg-yellow-500              
                text-xl
                cursor-pointer
              "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96496.78541836693!2d38.30919443688659!3d40.90424331397846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40636c6b991a79b7%3A0x2409f2df5be31b5f!2sGiresun%2C%20Giresun%20Merkez%2FGiresun!5e0!3m2!1str!2str!4v1629204644268!5m2!1str!2str"
            width="600"
            height="450"
            loading="lazy"
            className="w-full"
            title="address"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
