import React from "react";
import story from "../assets/Images/story.jpg";
import { ArrowRight } from "lucide-react";

const Story = () => {
  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <section className="px-6 md:px-16 py-16 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
            Tailor Thread was created with a simple idea — clothing should feel
            effortless, inclusive, and easy to wear every day. We focus on clean
            design, comfortable fits, and quality fabrics that move naturally
            with your lifestyle. Our collections are designed for everyone,
            beyond labels and trends. Each piece reflects a balance of modern
            silhouettes and everyday comfort, making it easy to dress your way,
            wherever the day takes you. At Tailor Thread, we believe great style
            doesn’t need to be complicated. Thoughtful design, relaxed fits, and
            timeless appeal come together to create clothing you’ll reach for
            again and again.
          </p>
        </div>
      </section>

      <section className="relative px-6 md:px-16 py-16 flex justify-center items-center">
        <div className="md:flex absolute left-0 lg:-left-[200px] sm:-left-[80px] h-[420px] items-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl   font-[Kinghood] lg:text-7xl font-semibold tracking-widest font-kinghood rotate-[-90deg] text-white whitespace-nowrap">
            The Tailor Thread Story
          </h2>
        </div>

        <img
          src={story}
          alt="Story"
          className="w-full max-w-4xl lg:w-4xl sm:w-2xl  h-[1020px] object-cover  rounded-sm"
        />
      </section>


      <section className="bg-[#9F0F0F] mx-4 md:mx-16 my-16 rounded-2xl px-6 py-10">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-2xl md:text-3xl uppercase tracking-wide text-center">
            Our Promise
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-95 max-w-4xl mx-auto">
            At Tailor Thread, we believe in honest design—clothing created with
            clarity, purpose, and intention. Every piece is thoughtfully
            designed with clean silhouettes, balanced proportions, and
            meaningful details, without excess or compromise.
            <br />
            <br />
            Our commitment to inclusive fashion means creating unisex clothing
            that feels natural on every body and identity. We choose
            comfortable, durable fabrics and refined construction to ensure each
            garment is made to last. Tailor Thread is about fewer, better
            pieces—designed to be worn often, styled freely, and lived in for
            years.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <h1 className="text-2xl md:text-4xl text-center uppercase tracking-wide">
            Our Design Philosophy
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              ["Unisex by nature", "Designed without gender labels or limits."],
              ["Simplicity first", "Clean lines. Minimal details. No excess."],
              ["Comfort focused", "Easy fits and breathable fabrics."],
              ["Timeless design", "Made to last beyond trends."],
              ["Purpose driven", "Every detail has intention."],
              ["Everyday wear", "Designed to move with you."],
            ].map(([title, desc], index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#9F0F0F] flex items-center justify-center rounded-full shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="text-sm opacity-80">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
