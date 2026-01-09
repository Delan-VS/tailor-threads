import React from "react";
import Banner from "../Components/Banner";
import aboutimg from "../assets/images/aboutimag.png";
import sea1 from "../assets/Images/sea1.jpg";
import sea2 from "../assets/Images/sea2.jpg";
import effortimg from "../assets/Images/effortimg.png";
import logo from "../assets/Images/logo.png";
import testimg from "../assets/Images/testimg.png";
import profile from "../assets/Images/profileimg.png";
import Review from "../Components/Review";

const Home = () => {
  return (
    <div className="w-full ">
      <Banner />

      <section className="bg-black w-full text-white py-0 px-6 md:px-0">
        <div className="w-full ">
          <div className="max-w-9xl mx-auto px-4 md:px-0 relative z-10">
            <div className="flex">
              <div className="hidden md:block md:w-[15%]" />

              <div className="flex w-full md:w-[75%]">
                <div className="flex items-start md:-mb-66">
                  <h2
                    className="text-white font-semibold tracking-widest
                       text-4xl md:text-8xl leading-[0.9]
                       text-center mr-6 relative z-20"
                    style={{ fontFamily: "Italiana" }}
                  >
                    A<br />
                    B<br />
                    O<br />
                    U<br />T
                  </h2>
                </div>

                {/* TEXT CONTENT */}
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed text-base md:text-xl">
                    At Tailor Threads, we believe great style begins with
                    perfect tailoring and thoughtful design. Every garment is
                    crafted with refined craftsmanship, premium fabrics, and
                    attention to detail. Our collections blend modern
                    silhouettes with timeless elegance to suit every occasion.
                    Designed for everyday comfort and lasting confidence, Tailor
                    Threads brings effortless style to life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen relative -mt-2 md:-mt-2">
            <img
              src={aboutimg}
              alt="About Tailor Threads"
              className="w-full h-[620px] md:h-[920px] object-cover"
            />
          </div>
        </div>

        <section className="w-full py-24 overflow-hidden ">
          <div className="max-w-[1400px] mx-auto px-4 mb-20">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl leading-tight font-medium">
                <span className="block">Curated styles for the season</span>
                <span className="block text-gray-400 text-right">
                  clean lines,
                </span>
              </h1>
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6">
              <div className="relative h-[340px]">
                <img
                  src={sea1}
                  alt="Seasonal style"
                  className="absolute inset-0 w-[180%] h-full
                     object-cover rounded-xl"
                />
              </div>

              <div className="flex items-center h-[360px] ">
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-md space-y-4 w-full">
                  <h4 className="uppercase tracking-widest text-sm text-gray-500">
                    Upgrade your
                  </h4>
                  <h2 className="text-3xl text-gray-700 font-semibold">
                    Wardrobe Now.
                  </h2>
                  <h3 className="text-lg text-gray-600">
                    Find your perfect fit with us.
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expertly tailored clothing crafted to match your unique fit,
                    refined style, and everyday comfort.
                  </p>
                  <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                    Get Yours Today
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6">
              <div className="flex items-center h-[360px] order-2 md:order-1">
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-md space-y-4 w-full">
                  <h4 className="uppercase tracking-widest text-sm text-gray-500">
                    Upgrade your
                  </h4>
                  <h2 className="text-3xl text-gray-700 font-semibold">
                    Wardrobe Now.
                  </h2>
                  <h3 className="text-lg text-gray-600">
                    Find your perfect fit with us.
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expertly tailored clothing crafted to match your unique fit,
                    refined style, and everyday comfort.
                  </p>
                  <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                    Get Yours Today
                  </button>
                </div>
              </div>

              <div className="relative h-[340px] order-1 md:order-2">
                <img
                  src={sea2}
                  alt="Tailored wear"
                  className="absolute inset-0 w-[120%] h-full
                     object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center text-center gap-6 px-6 md:px-16 py-8">
            <h3
              className="text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: "CaramelloFree" }}
            >
              effortless layers,
              <span className="block">elevated basics.</span>
            </h3>
          </div>

          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <img
              src={effortimg}
              alt="effort style"
              className="w-full h-auto object-cover bg-[#9F0F0F]"
            />
          </div>
        </div>

        <section className="w-full py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-2">
            <div className="flex items-center text-2xl md:text-3xl font-medium mb-12">
              <h1 className="uppercase tracking-wide md:-mr-16 -mr-6">why</h1>

              <img
                src={logo}
                alt="logo"
                className="h-36 w-36 md:h-86 md:w-86  bottom-12 object-contain"
              />

              <h1 className="leading-tight -ml-6 md:-ml-16">
                Designed for Everyday Wear
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {/* ITEM 1 */}
              <div>
                <h3 className="text-xl font-semibold">Modern Silhouettes</h3>
                <p className="text-gray-600 mt-2 max-w-md">
                  Clean, relaxed shapes that work across styles and seasons.
                </p>
                <hr className="mt-6" />
              </div>

              {/* ITEM 2 */}
              <div>
                <h3 className="text-xl font-semibold">Unisex Design</h3>
                <p className="text-gray-600 mt-2 max-w-md">
                  Clothing made for everyone, beyond trends and categories.
                </p>
                <hr className="mt-6" />
              </div>

              {/* ITEM 3 */}
              <div>
                <h3 className="text-xl font-semibold">Premium Fabrics</h3>
                <p className="text-gray-600 mt-2 max-w-md">
                  Soft, durable materials chosen for comfort and longevity.
                </p>
                <hr className="mt-6" />
              </div>

              {/* ITEM 4 */}
              <div>
                <h3 className="text-xl font-semibold">Effortless Styling</h3>
                <p className="text-gray-600 mt-2 max-w-md">
                  Easy-to-wear pieces that fit into your everyday wardrobe.
                </p>
                <hr className="mt-6" />
              </div>
            </div>
          </div>
        </section>

        <div className="text-center py-12">
          <h1 className="text-4xl">STYLE PHILOSOPHY</h1>
          <p>Wear It Your Way</p>

          <p className="mt-4 text-center ">
            <span className="inline-block border p-10 border-gray-300 rounded-full px-10 py-5">
              Our clothing is designed to adapt to your style, your mood, and{" "}
              <br />
              your routine whether you dress it up or keep it casual.
            </span>
          </p>
        </div>

        <div
          className="w-full min-h-[400px] flex items-start justify-center bg-no-repeat bg-center bg-contain px-6"
          style={{
            backgroundImage: `url(${testimg})`,
          }}
        >
          <div className="text-center max-w-md">
            <img
              src={profile}
              alt="profile"
              className="w-30 h-30 mx-auto rounded-full mb-4"
            />
            <p className="text-lg mb-4 pt-10">
              “The fit is perfect and the fabric feels <br /> Simple,
              comfortable, and easy to style”
            </p>
            <p className="font-semibold">~ Ryan Miller</p>
          </div>
        </div>

     <section className="w-full py-24 md:py-32 bg-black text-white relative overflow-hidden">

  <div className="relative text-center z-10">
    <h1 className="font-extrabold text-5xl sm:text-6xl md:text-9xl mb-12">
      TESTIMONIALS
    </h1>

    <div className="hidden md:block absolute left-0 top-[55%] z-20">
      <Review />
    </div>

  
    <div className="hidden md:block absolute right-0 top-[55%] z-20">
      <Review />
    </div>
  </div>


  <div className="flex justify-center relative z-10 mt-6 md:mt-10">
    <button className="border border-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg hover:bg-white hover:text-black transition">
      Read Testimonials
    </button>
  </div>


  <div className="mt-16 md:mt-24 flex justify-center relative z-10">
    <Review />
  </div>
</section>


      </section>
    </div>
  );
};

export default Home;
