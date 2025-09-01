/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @/app/page.tsx

"use client";
import { JSX, useEffect, useRef, useState } from "react";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/aceternity/resizable-navbar";
import Truck from "@/components/animations/truck";
import Box from "@/components/animations/box";
import Consult from "@/components/animations/consult";
import Storage from "@/components/animations/storage";
import { useT } from "@/lib/translate";
import { useCalendar } from "@/hooks/useCalendar";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  const { toEthiopian } = useCalendar();
  const { navItems: tNav, hero: tHero, aboutUs: tAbout, whatWeDo: tFeatures, whyChooseUs: tWhy, howItWorks: tHow, contact: tContact, footer: tFooter } = useT();

  const navItems = [
    { name: tNav.home, link: "#hero-section" },
    { name: tNav.aboutUs, link: "#aboutus" },
    { name: tNav.whatWeDo, link: "#what-we-do" },
    { name: tNav.whyChooseUs, link: "#why-choose-us" },
    { name: tNav.howItWorks, link: "#how-it-works" },
    { name: tNav.contact, link: "#contact" },
  ];

  const iconMap: Record<string, JSX.Element> = {
    consult: <Consult width={64} height={64} />,
    box: <Box width={64} height={64} />,
    truck: <Truck width={64} height={64} />,
    storage: <Storage width={64} height={64} />,
    openBox: <Box width={64} height={64} />,
  };

  const getCurrentYear = () => {
    const fullDate = toEthiopian(new Date());
    const year = fullDate.split(" ").pop();
    return year || new Date().getFullYear();
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const smootherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap/dist/ScrollToPlugin").then((mod) => {
        const ScrollToPlugin = mod.ScrollToPlugin;
        gsap.registerPlugin(ScrollToPlugin);

        const sections = document.querySelectorAll("#smooth-content section");
        let current = 0;
        let isScrolling = false;

        const scrollToSection = (index: number, isManual?: boolean) => {
          if (isScrolling || index < 0 || index >= sections.length) return;
          isScrolling = true;
          gsap.to(window, {
            scrollTo: { y: sections[index], offsetY: document.querySelector('nav')?.clientHeight || 0 },
            duration: 1,
            ease: "power1.inOut",
            onComplete: () => {
              isScrolling = false;
              current = index;
              if (isManual) current = index;
            },
          });
        };

        const wheelHandler = (e: WheelEvent) => {
          e.preventDefault();
          if (e.deltaY > 0) scrollToSection(current + 1);
          else if (e.deltaY < 0) scrollToSection(current - 1);
        };

        const keyHandler = (e: KeyboardEvent) => {
          if (e.key === "ArrowDown") scrollToSection(current + 1);
          else if (e.key === "ArrowUp") scrollToSection(current - 1);
        };

        window.addEventListener("wheel", wheelHandler, { passive: false });
        window.addEventListener("keydown", keyHandler);

        return () => {
          window.removeEventListener("wheel", wheelHandler);
          window.removeEventListener("keydown", keyHandler);
        };
      });
    }
  }, []);


  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then((mod: any) => {
        const gsap = mod.default;
        const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

        const words = document.querySelectorAll("#city-movers-text span");
        const truckDuration = 3;
        const wordStagger = 0.3;

        tl.fromTo(
          "#truck-container",
          { x: -220 },
          { x: "100%", duration: truckDuration }
        );

        words.forEach((word, index) => {
          const delay = truckDuration * 0.7 + index * wordStagger;
          tl.to(
            word,
            { opacity: 1, y: 0, duration: 0.5 },
            delay
          );
        });
      });
    }
  }, []);

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const secEls = Array.from(document.querySelectorAll("#smooth-content section"));

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const index = secEls.findIndex((el) => {
        const htmlEl = el as HTMLElement;
        const top = htmlEl.getBoundingClientRect().top + window.scrollY;
        const bottom = top + htmlEl.offsetHeight;
        return scrollPos >= top && scrollPos < bottom;
      });
      if (index !== -1 && index !== currentSection) setCurrentSection(index);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentSection]);

  return (
    <>
      <div id="smooth-wrapper" className="overflow-hidden min-h-screen flex flex-col">
        {/* Navbar stays outside smoother */}
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </NavBody>

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>

        <div id="smooth-content" ref={smootherRef}>
          {/* Hero Section */}
          <section
            className="relative w-full h-screen flex flex-col items-center justify-center bg-blue-50 dark:bg-neutral-900 overflow-hidden"
            style={{
              backgroundImage: "url('/images/1D6A4847.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            id="hero-section"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

            {/* Text + Truck Container */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
              {/* Text container for truck overlay */}
              <div className="relative inline-block overflow-hidden">
                <h1
                  id="city-movers-text"
                  className="text-5xl font-bold text-white md:text-6xl flex space-x-4 justify-center overflow-hidden"
                >
                  {tHero.headline.map((word, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{ opacity: 0 }}
                      data-word-index={i}
                    >
                      {word}
                    </span>
                  ))}
                </h1>

                <div
                  id="truck-container"
                  className="absolute -bottom-2 left-0 w-full h-[80px]"
                >
                  <Truck width={200} height={80} />
                </div>
              </div>

              {/* Paragraph below */}
              <p className="text-lg text-white max-w-xl mt-12 md:text-xl">
                {tHero.subtitle}
              </p>
            </div>
          </section>

          {/* About Us */}
          <section
            id="aboutus"
            className="w-full min-h-[80vh] md:h-screen flex flex-col md:flex-row items-center bg-white dark:bg-black text-black dark:text-white snap-start"
          >
            {/* Left: Text */}
            <div className="w-full md:w-1/2 px-4 sm:px-8 md:px-16 mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-6">{tAbout.title}</h2>
              {tAbout.paragraphs.map((p, i) => (
                <p key={i} className="text-base sm:text-lg md:text-lg leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>

            {/* Right: Animated Box */}
            <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
              <Box className="w-3/4 md:w-full" width={300} height={3000} />
            </div>
          </section>

          {/* What we do */}
          {tFeatures.map((feature, idx) => (
            <section
              key={idx}
              className="w-full h-screen flex items-center bg-white dark:bg-black text-black dark:text-white snap-start"
              id="what-we-do"
            >
              {/* Left: Content */}
              <div className="w-1/2 px-16">
                <h3 className="text-5xl font-bold mb-4">{feature.title}</h3>
                <p className="text-xl">{feature.description}</p>
              </div>

              {/* Right: Person Image */}
              <div className="w-1/2 h-full flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-[80%] object-contain"
                />
              </div>
            </section>
          ))}

          {/* Why Choose Us */}
          <section
            id="why-choose-us"
            className="w-full min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white snap-start px-12 py-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">{tWhy.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
              {tWhy.items.map((item, i, arr) => (
                <div
                  key={i}
                  className={`p-6 rounded-md border-4 border-amber-900 shadow-lg shadow-neutral-700/40 transform rotate-[-1deg] hover:rotate-0 transition duration-300 relative
text-white
${i === arr.length - 1 && arr.length % 3 !== 0 ? "lg:col-start-2" : ""}`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
  <rect width='200' height='200' fill='%23b88746'/>
  <path d='M0 25h200M0 50h200M0 75h200M0 100h200M0 125h200M0 150h200M0 175h200' 
        stroke='%238c6239' stroke-width='1' opacity='0.4'/>
  <path d='M25 0v200M50 0v200M75 0v200M100 0v200M125 0v200M150 0v200M175 0v200' 
        stroke='%23a97442' stroke-width='0.5' opacity='0.2'/>
</svg>")`,
                    backgroundRepeat: "repeat",
                    backgroundColor: "#b88746",
                    color: "white",
                  }}
                >
                  {/* Fragile duct tape */}
                  <div
                    className="absolute top-2 right-6 rotate-[8deg] px-12 py-1 text-xs font-bold uppercase tracking-wide"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, #b30000, #b30000 10px, #cc0000 10px, #cc0000 20px)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
                      border: "2px solid #7a0000",
                      color: "white",
                    }}
                  >
                    {tWhy.fragile}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>


          {/* How It Works */}
          <section id="how-it-works" className="py-32 bg-white dark:bg-black flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-12 text-center">{tHow.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-6xl">
              {tHow.steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4">{iconMap[step.icon]}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-neutral-700 dark:text-neutral-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="flex flex-col items-center bg-white dark:bg-neutral-950">
  {/* Title & Subtitle */}
  <h2 className="text-4xl font-bold mb-6 text-center">{tContact.title}</h2>
  <p className="text-center text-neutral-700 dark:text-neutral-300 mb-12 max-w-2xl">
    {tContact.subtitle}
  </p>

  {/* Map */}
  <div className="w-full max-w-6xl h-96 md:h-[500px] mb-12">
    <iframe
      title="Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1143.9863050712224!2d38.801843134146615!3d9.00056353615726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8500444fad5b%3A0x7f62f36a8efad200!2sBMA%20PLAZA!5e1!3m2!1sen!2set!4v1756756868336!5m2!1sen!2set"
      width="100%"
      height="100%"
      className="border-0 rounded-lg shadow-md"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <div className="flex flex-col md:flex-row w-full max-w-6xl gap-16 px-4 mb-12">
    {/* Left: Info */}
    <div className="flex-1 flex flex-col gap-6 text-neutral-800 dark:text-neutral-200">
      <div>
        <h3 className="text-2xl font-semibold mb-2">
          {tContact.locationLabel || "Location"}
        </h3>
        {Array.isArray(tContact.location)
          ? tContact.location.map((loc, i) => <p key={i}>{loc}</p>)
          : <p>{tContact.location}</p>
        }
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-2">{tContact.phonesLabel || "Phones"}</h3>
        {tContact.phones.map((phone, i) => <p key={i}>{phone}</p>)}
      </div>
    </div>

    {/* Right: Form */}
    <form className="flex-1 flex flex-col gap-4">
      <input
        type="text"
        placeholder={tContact.namePlaceholder || "Your Name"}
        className="px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
      />
      <input
        type="email"
        placeholder={tContact.emailPlaceholder || "Your Email"}
        className="px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
      />
      <textarea
        placeholder={tContact.messagePlaceholder || "Message"}
        className="px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded font-bold 
      bg-black text-white 
      dark:bg-white dark:text-black 
      hover:bg-gray-800 dark:hover:bg-gray-200 
      transition"
      >
        {tContact.sendButton || "Send Message"}
      </button>
    </form>
  </div>

  {/* Footer */}
  <div className="w-full flex justify-center items-center p-6 border-t border-gray-200 dark:border-gray-700">
    <p className="text-sm text-gray-500 dark:text-gray-400">
      {tFooter.text.replace("{year}", getCurrentYear()?.toString())}
    </p>
  </div>
</section>

        </div >
      </div >
    </>
  );
}
