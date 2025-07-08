// components/Layout.js
import React from "react";
import { Navigation } from "./Navigation";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
