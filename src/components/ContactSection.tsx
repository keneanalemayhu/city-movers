/* eslint-disable @typescript-eslint/no-explicit-any */
// @/components/ContactSection.tsx

"use client";
import { useState } from "react";
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { useT } from "@/lib/translate";

const ContactSection = () => {
  const t = useT();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      const data = await res.json();
      alert(data.message);

      if (data.success) {
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error(error);
      alert(t.contactSection.errorMessage);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column - Contact Info */}
          <div className="bg-red-700 text-white p-8 lg:p-12 rounded-xl">
            <div className="mb-8">
              <p className="text-purple-200 font-semibold text-sm mb-2 tracking-wide uppercase">
                {t.contactSection.header}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {t.contactSection.titleLine1}
                <br />
                {t.contactSection.titleLine2}
              </h2>
              <p className="text-purple-100 max-w-md">
                {t.contactSection.description}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t.contactSection.phoneLabel}</h4>
                  {t.contactSection.phones.map((p, i) => (
                    <p key={i} className="text-purple-100">{p}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t.contactSection.emailLabel}</h4>
                  {t.contactSection.emails.map((e, i) => (
                    <p key={i} className="text-purple-100">
                      {e.label && <span className="font-medium">{e.label}</span>} {e.address}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t.contactSection.websiteLabel}</h4>
                  <p className="text-purple-100">{t.contactSection.website}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t.contactSection.addressLabel}</h4>
                  <p className="text-purple-100">{t.contactSection.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 lg:p-12 rounded-xl shadow-lg">
            <div className="mb-8">
              <p className="text-red-700 font-semibold text-sm mb-2 tracking-wide uppercase">
                {t.contactSection.formHeader}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                {t.contactSection.formTitle}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.contactSection.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contactSection.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex">
                  <span className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-600">
                    +251
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t.contactSection.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => {
                      let digits = e.target.value.replace(/\D/g, "");
                      if (digits.length > 9) digits = digits.slice(0, 9);
                      setFormData({ ...formData, phone: digits });
                    }}
                    pattern="\d{9}"
                    maxLength={9}
                    className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {t.contactSection.phoneHint}
                </p>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder={t.contactSection.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-colors transform hover:scale-105 duration-200"
                >
                  {t.contactSection.submitButton}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
