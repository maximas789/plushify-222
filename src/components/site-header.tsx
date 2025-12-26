"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu } from "lucide-react";
import { UserProfile } from "@/components/auth/user-profile";
import { MobileNav } from "./shared/mobile-nav";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:rounded-md"
      >
        Skip to main content
      </a>
      <header className="border-b" role="banner">
        <nav
          className="container mx-auto px-4 py-4 flex justify-between items-center"
          aria-label="Main navigation"
        >
          <h1 className="text-2xl font-bold">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="Plushify - Go to homepage"
            >
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10"
                aria-hidden="true"
              >
                <Heart className="h-5 w-5" />
              </div>
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Plushify
              </span>
            </Link>
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-4" role="group" aria-label="User actions">
            <UserProfile />
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <MobileNav open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
    </>
  );
}
