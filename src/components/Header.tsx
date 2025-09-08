/* eslint-disable @next/next/no-img-element */
// @/components/common/Header.tsx

"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { useT } from '@/lib/translate';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useT();

  const navLinks = [
    { label: t.navItems.aboutUs, id: "about" },
    { label: t.navItems.whatWeDo, id: "services" },
    { label: t.navItems.howItWorks, id: "call-to-action" },
    { label: t.navItems.whyChooseUs, id: "why-choose" },
    { label: t.navItems.contact, id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">

            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/images/logo.png"
                alt={t.navItems.home}
                className="w-12 h-12 object-contain rounded"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8 mx-auto">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-red-700 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                className="text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      scrollToSection(link.id);
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-red-700 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}

                <div className="flex space-x-2 pt-2">
                  <LanguageToggle />
                </div>
              </div>
            </div>
          )}

        </div>
      </nav>
    </header>
  );
};

export default Header;
