/* eslint-disable @next/next/no-img-element */
// @/components/Footer.tsx

"use client";
import { Phone, Mail, Globe } from 'lucide-react';
import { useCalendar } from '@/hooks/useCalendar';
import { useT } from '@/lib/translate';

const Footer = () => {
  const { getYear } = useCalendar();
  const t = useT();

  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/images/logo.png" alt={t.footer.companyName} className="w-8 h-8 object-contain" />
              <span className="ml-2 text-white font-semibold">{t.footer.companyName}</span>
            </div>

            <p className="text-white text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.mainMenu.title}</h3>
            <ul className="space-y-3">
              {t.footer.mainMenu.items.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-white hover:text-white transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.services.title}</h3>
            <ul className="space-y-3">
              {t.footer.services.items.map((service, i) => (
                <li key={i}>
                  <a href={service.href} className="text-white hover:text-white transition-colors text-sm">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.contact.title}</h3>
            <div className="space-y-4 text-sm text-white">
              <p>{t.footer.contact.address}</p>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{t.footer.contact.phone}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{t.footer.contact.email}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>{t.footer.contact.website}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center text-white text-sm">
            © {getYear()} {t.footer.companyName}. {t.footer.rightsReserved}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
