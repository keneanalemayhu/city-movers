// @/components/DetailedServices.tsx

"use client";
import { Settings, Truck, Users, MapPin, Package } from 'lucide-react';
import { useT } from "@/lib/translate";

const DetailedServices = () => {
  const t = useT();

  const services = [
    {
      number: "01",
      icon: <Truck className="w-12 h-12 text-red-700" />,
      title: t.detailedServices.residentialMoves.title,
      description: t.detailedServices.residentialMoves.description,
      link: "#"
    },
    {
      number: "02",
      icon: <Users className="w-12 h-12 text-red-700" />,
      title: t.detailedServices.officeRelocations.title,
      description: t.detailedServices.officeRelocations.description,
      link: "#"
    },
    {
      number: "03",
      icon: <Package className="w-12 h-12 text-red-700" />,
      title: t.detailedServices.packingUnpacking.title,
      description: t.detailedServices.packingUnpacking.description,
      link: "#"
    },
    {
      number: "04",
      icon: <MapPin className="w-12 h-12 text-red-700" />,
      title: t.detailedServices.localLongDistance.title,
      description: t.detailedServices.localLongDistance.description,
      link: "#"
    },
    {
      number: "05",
      icon: <Settings className="w-12 h-12 text-red-700" />,
      title: t.detailedServices.customPlans.title,
      description: t.detailedServices.customPlans.description,
      link: "#"
    },
    {
      number: "06",
      icon: <Truck className="w-12 h-12 text-red-700" />,
      title: t.detailedServices.safeTransport.title,
      description: t.detailedServices.safeTransport.description,
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-red-700 font-semibold text-sm mb-2 tracking-wide uppercase">
            {t.detailedServices.header}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            {t.detailedServices.titleLine1}<br />
            <span className="text-red-700">{t.detailedServices.titleHighlight}</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-red-500 group relative overflow-hidden"
            >

              {/* Number Badge */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-red-100 group-hover:text-red-200 transition-colors">
                {service.number}
              </div>

              <div className="relative z-10">
                <div className="flex justify-start mb-6">
                  <div className="p-3 bg-red-50 rounded-full group-hover:bg-white transition-colors">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DetailedServices;
