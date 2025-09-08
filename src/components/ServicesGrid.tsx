// @/components/ServicesGrid.tsx

"use client";
import { Truck, Box, Shield, Users } from 'lucide-react';
import { useT } from '@/lib/translate';

const ServicesGrid = () => {
  const t = useT();

  const services = [
    {
      icon: <Truck className="w-12 h-12 text-red-700" />,
      title: t.servicesGrid.service1.title,
      description: t.servicesGrid.service1.description,
      link: "#"
    },
    {
      icon: <Box className="w-12 h-12 text-red-700" />,
      title: t.servicesGrid.service2.title,
      description: t.servicesGrid.service2.description,
      link: "#"
    },
    {
      icon: <Shield className="w-12 h-12 text-red-700" />,
      title: t.servicesGrid.service3.title,
      description: t.servicesGrid.service3.description,
      link: "#"
    },
    {
      icon: <Users className="w-12 h-12 text-red-700" />,
      title: t.servicesGrid.service4.title,
      description: t.servicesGrid.service4.description,
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
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

export default ServicesGrid;
