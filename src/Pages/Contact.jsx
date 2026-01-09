import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-black text-white px-6 md:px-34 py-20">

     
      <div className="grid grid-cols-1 ml-20 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-5xl font-semibold mb-8">
            Get in touch
          </h2>

          <div className="space-y-5 text-gray-300">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-400">
                Email
              </p>
              <p>hello@tailorthreads.com</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide text-gray-400">
                Contact
              </p>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide text-gray-400">
                Address
              </p>
              <p>
                Tailor Threads Studio <br />
                Kochi, Kerala, India
              </p>
            </div>
          </div>
        </div>

      
        <div className="bg-[#9F0F0F] p-6 md:p-8 rounded-lg max-w-4xl w-full">

          <form className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-white text-black rounded-md focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white text-black rounded-md focus:outline-none"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full px-4 py-3 bg-white text-black rounded-md resize-none focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-md font-medium hover:bg-gray-900 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
