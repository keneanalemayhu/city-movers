// @/components/StatsSection.tsx

"use client";
import { Users, Truck, Building } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useT } from '@/lib/translate';

const StatsSection = () => {
  const t = useT();

  const stats = [
    {
      icon: <Users className="w-12 h-12 text-red-700" />,
      number: t.statsSection.happyClients.number,
      label: t.statsSection.happyClients.label,
      description: t.statsSection.happyClients.description,
      showPlus: t.statsSection.happyClients.showPlus
    },
    {
      icon: <Truck className="w-12 h-12 text-red-700" />,
      number: t.statsSection.successfulMoves.number,
      label: t.statsSection.successfulMoves.label,
      description: t.statsSection.successfulMoves.description,
      showPlus: t.statsSection.successfulMoves.showPlus
    },
    {
      icon: <Building className="w-12 h-12 text-red-700" />,
      number: t.statsSection.professionalCrew.number,
      label: t.statsSection.professionalCrew.label,
      description: t.statsSection.professionalCrew.description,
      showPlus: t.statsSection.professionalCrew.showPlus
    }
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                  {stat.icon}
                </div>
              </div>

              {/* Number */}
              <div className="mb-2">
                <span className="text-5xl lg:text-6xl font-bold text-gray-800 group-hover:text-red-700 transition-colors">
                  {inView ? <CountUp end={Number(stat.number.replace(/,/g, ""))} duration={2} /> : 0}
                  {stat.showPlus && "+"}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-700 transition-colors">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
