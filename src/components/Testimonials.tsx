import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-slate-300 font-semibold text-sm mb-2 tracking-wide uppercase">
            TESTIMONIAL
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            What Saying Our Customers
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-slate-700 bg-opacity-50 rounded-xl p-8 lg:p-12 backdrop-blur-sm border border-slate-600">

          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="text-center mb-8">
            <p className="text-lg lg:text-xl leading-relaxed text-slate-100 max-w-4xl mx-auto">
              Top Technologies was instrumental in transforming our operations. Their expertise in
              implementing our <span className="font-bold text-white">Odoo ERP system</span> brought
              remarkable efficiency, centralized our data, and provided the clarity we needed for
              significant growth at Getasew Ayalew Import & Export. We highly recommend their
              professional and dedicated team.
            </p>
          </div>

          {/* Customer Info */}
          <div className="text-center">
            {/* Customer Avatar */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">GA</span>
              </div>
            </div>

            {/* Customer Details */}
            <h4 className="text-xl font-bold text-white mb-1">
              Getasew Ayalew
            </h4>
            <p className="text-slate-300 text-sm">
              Founder & CEO, Getasew Import & Export
            </p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
