// @/components/common/BackToTop.tsx

"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-red-700 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all"
      aria-label="Back to Top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  ) : null;
};

export default BackToTop;
