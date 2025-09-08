/* eslint-disable @next/next/no-img-element */
const Partners = () => {
  const partners = [
    {
      name: "Odoo",
      logo: "https://ext.same-assets.com/3550215502/628787640.png",
      alt: "Odoo ERP"
    },
    {
      name: "GIG",
      logo: "https://ext.same-assets.com/3550215502/3214728406.png",
      alt: "GIG People First"
    },
    {
      name: "Afrimedex",
      logo: "https://ext.same-assets.com/3550215502/2288584491.png",
      alt: "Afrimedex"
    },
    {
      name: "EASE",
      logo: "https://ext.same-assets.com/3550215502/2654799153.png",
      alt: "EASE"
    }
  ];

  return (
    <section className="py-12 bg-purple-800">
      <div className="max-w-7xl mx-auto px-4">

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center group"
            >
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-12 w-auto mx-auto filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
