// @/components/animations/truck.tsx

"use client";
import Lottie from "lottie-react";
import truckAnimation from "@/../public/animations/truck.json";

interface TruckProps {
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  className?: string;
}

export default function Truck({
  width = 300,
  height = 300,
  loop = true,
  className = "",
}: TruckProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Lottie
        animationData={truckAnimation}
        loop={loop}
        style={{ width, height }}
      />
    </div>
  );
}
