/* eslint-disable @next/next/no-img-element */
// @/components/Hero.tsx

"use client";
import { useT } from "@/lib/translate";

const Hero = () => {
  const t = useT();

  return (
    <section className="relative h-screen bg-red-700 overflow-hidden">

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <img
            src="/images/logo_2.png"
            alt={t.navItems.home}
            className="mx-auto mb-6 w-100 h-100 object-contain"
          />

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.hero.titleLine1}
            <br />
            <span className="text-red-100">{t.hero.titleHighlight}</span>
          </h1>

          <div className="space-y-4 text-red-100 text-lg md:text-xl mb-8">
            <p className="font-medium">{t.hero.line1}</p>
            <p className="font-medium">{t.hero.line2}</p>
            <p className="font-medium">{t.hero.line3}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-red-700 transition-all duration-300 font-semibold"
            >
              {t.hero.getQuoteBtn}
            </button>

            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-red-700 transition-all duration-300 font-semibold"
            >
              {t.hero.learnMoreBtn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
