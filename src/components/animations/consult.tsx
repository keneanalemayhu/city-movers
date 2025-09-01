// @/components/animations/box.tsx

"use client";
import Lottie from "lottie-react";
import consultAnimation from "@/../public/animations/consult.json";

interface ConsultProps {
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  className?: string;
}

export default function Consult({
  width = 300,
  height = 300,
  loop = true,
  className = "",
}: ConsultProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Lottie
        animationData={consultAnimation}
        loop={loop}
        style={{ width, height }}
      />
    </div>
  );
}
