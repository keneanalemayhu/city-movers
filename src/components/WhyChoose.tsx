// @/components/WhyChoose.tsx

"use client";
import { useT } from "@/lib/translate";

const WhyChoose = () => {
  const t = useT();

  const benefits = [
    {
      number: t.whyChoose.benefits[0].number,
      title: t.whyChoose.benefits[0].title,
      description: t.whyChoose.benefits[0].description,
    },
    {
      number: t.whyChoose.benefits[1].number,
      title: t.whyChoose.benefits[1].title,
      description: t.whyChoose.benefits[1].description,
    },
    {
      number: t.whyChoose.benefits[2].number,
      title: t.whyChoose.benefits[2].title,
      description: t.whyChoose.benefits[2].description,
    },
    {
      number: t.whyChoose.benefits[3].number,
      title: t.whyChoose.benefits[3].title,
      description: t.whyChoose.benefits[3].description,
    },
  ];

  return (
    <section className="py-16 bg-red-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 border border-white rotate-45 transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 border border-white -rotate-12 transform -translate-x-24 translate-y-24"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-red-200 font-semibold text-sm mb-2 tracking-wide uppercase">
            {t.whyChoose.header}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            {t.whyChoose.title}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-4xl lg:text-5xl font-bold text-red-200">
                    {benefit.number}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-red-100 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
