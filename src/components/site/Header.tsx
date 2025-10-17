"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, MouseEvent } from "react"; // <-- Import MouseEvent

// Ganti dengan link Notion portfolio kamu
const PORTFOLIO_LINK = "https://slash-saffron-f04.notion.site/Annisa-Cahyani-193cb976b9f2802d90f1e041d2f07a29?source=copy_link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Layanan" },
    { label: "Portfolio" }, // Tanpa href
    { href: "/contact", label: "Order" },
  ];

  const handlePortfolioClick = (e: MouseEvent) => {
    e.preventDefault();
    window.open(PORTFOLIO_LINK, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between ">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Creastik Corner Logo"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <span className="font-semibold tracking-tight">
              Creastik Corner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href || item.label}
                href={item.href || "#"}
                onClick={item.label === "Portfolio" ? handlePortfolioClick : undefined}
                className={`text-sm text--black hover:text-foreground transition-colors ${
                  item.label === "Portfolio" ? "cursor-pointer" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href || item.label}
                href={item.href || "#"}
                onClick={(e: MouseEvent) => {
                  if (item.label === "Portfolio") {
                    e.preventDefault();
                    window.open(PORTFOLIO_LINK, '_blank');
                  } else {
                    setOpen(false);
                  }
                }}
                className="text-sm"
              >
                {item.label}
              </Link>
            ))}
        
          </div>
        </div>
      )}
    </header>
  );
}
