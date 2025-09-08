// @/components/AboutSection.tsx

"use client";
import { Globe, Truck, Package, Users } from 'lucide-react';
import { useT } from "@/lib/translate";

const AboutSection = () => {
  const t = useT();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-red-700 font-semibold text-sm mb-2 tracking-wide uppercase">
                {t.aboutSection.ourCompany}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                {t.aboutSection.title.line1}
                <br />
                <span className="text-red-800">{t.aboutSection.title.highlight1}</span> {t.aboutSection.title.line2}
                <br />
                <span className="text-red-700">{t.aboutSection.title.highlight2}</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {t.aboutSection.description1}
            </p>

            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-bold text-red-700">CityMovers</span> {t.aboutSection.description2}
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-red-700 text-white px-8 py-3 rounded hover:bg-red-900 transition-colors font-semibold">
                {t.aboutSection.learnMore}
              </button>
            </div>
          </div>

          {/* Right Content - Circular Graphic */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-red-700 opacity-20"></div>

              {/* Center Globe */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-red-400 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                <Globe className="w-16 h-16 text-white" />
              </div>

              {/* Orbiting Icons */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-400 to-red-700 rounded-lg flex items-center justify-center shadow-lg rotate-45">
                <Truck className="w-8 h-8 text-white -rotate-45" />
              </div>

              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-400 to-red-700 rounded-lg flex items-center justify-center shadow-lg rotate-12">
                <Package className="w-8 h-8 text-white -rotate-12" />
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-400 to-red-700 rounded-lg flex items-center justify-center shadow-lg -rotate-45">
                <Users className="w-8 h-8 text-white rotate-45" />
              </div>

              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-400 to-red-700 rounded-lg flex items-center justify-center shadow-lg -rotate-12">
                <Globe className="w-8 h-8 text-white rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
