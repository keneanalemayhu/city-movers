// @/components/animations/box.tsx

"use client";
import Lottie from "lottie-react";
import storageAnimation from "@/../public/animations/storage.json";

interface StorageProps {
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  className?: string;
}

export default function Storage({
  width = 300,
  height = 300,
  loop = true,
  className = "",
}: StorageProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Lottie
        animationData={storageAnimation}
        loop={loop}
        style={{ width, height }}
      />
    </div>
  );
}
