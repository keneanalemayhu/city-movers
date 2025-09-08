// @/app/providers.tsx

"use client";
import { LanguageProvider } from "@/components/context/LanguageContext";
import { Toaster as SonnerToaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <SonnerToaster
        position="bottom-right"
        expand={false}
        richColors
        closeButton
      />
    </LanguageProvider>
  );
}
