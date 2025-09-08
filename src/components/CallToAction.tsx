/* eslint-disable @next/next/no-img-element */
// @/components/CallToAction.tsx

"use client";
import { Phone } from 'lucide-react';
import { useT } from "@/lib/translate";

const CallToAction = () => {
  const t = useT();

  return (
    <section className="relative py-16 bg-gradient-to-br from-red-700 via-red-600 to-red-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white -rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border border-white -rotate-45"></div>

        <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/1D6A4970.png"
            alt={t.callToAction.imageAlt}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content on the right */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Phone Icon */}
          <div className="flex justify-center lg:justify-start mb-6">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Phone className="w-10 h-10 text-red-700" />
            </div>
          </div>

          <h2 className="text-white text-lg font-semibold mb-4 tracking-wide">
            {t.callToAction.title}
          </h2>

          <h3 className="text-white text-4xl lg:text-5xl font-bold mb-6">
            {t.callToAction.phoneNumbers}
          </h3>

          <div className="mb-8">
            <p className="text-white text-lg leading-relaxed mb-2">
              {t.callToAction.description1}
            </p>
            <p className="text-white text-lg leading-relaxed">
              {t.callToAction.description2}
            </p>
          </div>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white hover:bg-gray-100 text-red-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t.callToAction.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
