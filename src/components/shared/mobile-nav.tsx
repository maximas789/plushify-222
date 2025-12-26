"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Docs" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => onOpenChange(false)}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
