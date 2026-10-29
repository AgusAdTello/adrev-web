"use client";

import Link from "next/link";
import { brandConfig } from "@/config/brandConfig";
import { Code2, MessageCircle, MapPin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const waUrl = `https://wa.me/${brandConfig.brand.whatsapp}?text=${encodeURIComponent(
    "Hola ADREV! Vi tu plataforma web y quiero consultar por un desarrollo / Sistema POS."
  )}`;

  return (
    <footer className="theme-bg-surface border-t theme-border pt-14 pb-10 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b theme-border">
        
        {/* Columna 1: Identidad ADREV */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black">
              <Code2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="font-black text-xl tracking-tight theme-text-main">
              {brandConfig.brand.name}{" "}
              <span className="text-emerald-500 text-sm font-bold">
                {brandConfig.brand.suffix}
              </span>
            </span>
          </div>
          <p className="theme-text-muted text-xs sm:text-sm max-w-md leading-relaxed">
            {brandConfig.brand.slogan}. Desarrollamos desde Landing Pages de alta conversión hasta Catálogos Mayoristas B2B Marca Blanca y Software POS de escritorio.
          </p>
        </div>

        {/* Columna 2: Pestañas del Sitio */}
        <div>
          <h4 className="font-extrabold text-xs uppercase tracking-wider theme-text-main mb-4">
            Navegación
          </h4>
          <ul className="space-y-2.5 text-xs font-medium theme-text-muted">
            {brandConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-emerald-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Contacto Directo */}
        <div>
          <h4 className="font-extrabold text-xs uppercase tracking-wider theme-text-main mb-4">
            Contacto Directo
          </h4>
          <ul className="space-y-2.5 text-xs theme-text-muted">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{brandConfig.brand.email}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{brandConfig.brand.location}</span>
            </li>
            <li className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 font-extrabold hover:underline"
              >
                <span>Hablar por WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs theme-text-muted gap-2">
        <p>© {new Date().getFullYear()} {brandConfig.brand.name}. Todos los derechos reservados.</p>
        <p>Desarrollado con Next.js, TypeScript & Tauri Architecture.</p>
      </div>

      {/* Botón Flotante de WhatsApp siempre visible */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 p-4 rounded-full shadow-2xl flex items-center gap-2 group transition-all hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-slate-950" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-black pr-0 group-hover:pr-2">
          Consultar a ADREV
        </span>
      </a>
    </footer>
  );
}