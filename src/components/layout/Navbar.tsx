"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brandConfig } from "@/config/brandConfig";
import { useApp } from "@/context/AppContext";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, currency, setCurrency } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        
        {/* Identidad ADREV */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-lg tracking-tight text-foreground">
              {brandConfig.brand.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground border-l border-border pl-2">
              SOFTWARE LAB
            </span>
          </div>
        </Link>

        {/* Pestañas de Navegación Técnica */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold">
          {brandConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? "text-foreground font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded border border-border bg-secondary text-secondary-foreground">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Controles de Utilidad */}
        <div className="flex items-center gap-2.5">
          {/* Selector ARS / USD */}
          <div className="hidden sm:flex items-center border border-border rounded bg-secondary/40 p-0.5 text-[11px] font-mono">
            <button
              type="button"
              onClick={() => setCurrency("ARS")}
              className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                currency === "ARS"
                  ? "bg-background text-foreground shadow-xs font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ARS
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                currency === "USD"
                  ? "bg-background text-foreground shadow-xs font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              USD
            </button>
          </div>

          {/* Toggle Modo Claro / Oscuro */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="p-2 rounded border border-border bg-card hover:bg-secondary transition-colors cursor-pointer text-foreground"
          >
            {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Botón Acción Principal */}
          <Link
            href="/cotizador-web"
            className="hidden sm:inline-flex items-center gap-1.5 bg-foreground text-background font-semibold text-xs px-3.5 py-2 rounded hover:opacity-90 transition-opacity"
          >
            <span>Cotizar Proyecto</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-border text-foreground"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 py-4 space-y-2">
          {brandConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded text-xs font-semibold ${
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-border">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}