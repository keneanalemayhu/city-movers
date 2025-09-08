// @/components/Industries.tsx

"use client";
import { Home, Building2, Store, Package } from "lucide-react";
import { useT } from "@/lib/translate";

const Industries = () => {
  const t = useT();

  const industries = [
    {
      icon: <Home className="w-12 h-12 text-purple-600" />,
      name: t.industries.residential,
      color: "purple",
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      name: t.industries.office,
      color: "blue",
    },
    {
      icon: <Store className="w-12 h-12 text-orange-600" />,
      name: t.industries.retail,
      color: "orange",
    },
    {
      icon: <Package className="w-12 h-12 text-green-600" />,
      name: t.industries.packing,
      color: "green",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold text-sm mb-2 tracking-wide uppercase">
            {t.industries.header}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            {t.industries.title}
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-4">
                <div className="p-6 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors shadow-sm group-hover:shadow-md">
                  {industry.icon}
                </div>
              </div>

              {/* Industry Name */}
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-700 transition-colors">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
