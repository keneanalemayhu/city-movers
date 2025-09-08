// @/components/animations/box.tsx

"use client";
import Lottie from "lottie-react";
import boxAnimation from "@/../public/animations/box.json";

interface BoxProps {
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  className?: string;
}

export default function Box({
  width = 300,
  height = 300,
  loop = true,
  className = "",
}: BoxProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Lottie
        animationData={boxAnimation}
        loop={loop}
        style={{ width, height }}
      />
    </div>
  );
}
