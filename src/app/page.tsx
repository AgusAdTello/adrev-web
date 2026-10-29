"use client";

import Link from "next/link";
import { brandConfig } from "@/config/brandConfig";
import { useApp } from "@/context/AppContext";
import {
  Globe,
  Monitor,
  Cloud,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  Calculator,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const { formatPrice } = useApp();

  return (
    <div className="relative overflow-hidden">
      {/* Resplandor ambiental de fondo */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-primary/15 blur-[140px] rounded-full" />

      {/* Hero Principal */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-16 lg:pt-24 lg:pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card shadow-sm text-xs font-bold mb-6 animate-float">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>SOLUCIONES DE SOFTWARE & E-COMMERCE B2B</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] max-w-5xl mx-auto">
          Tecnología creada para potenciar tus{" "}
          <span className="text-primary underline decoration-primary/30 decoration-wavy">
            ventas y gestión comercial.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          En <strong className="text-foreground">{brandConfig.brand.name}</strong> combinamos desarrollo web de alto rendimiento con sistemas de punto de venta (POS) listos para usar en mostrador o en la nube.
        </p>

        {/* Acciones principales con bordes suaves */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/desarrollo-web"
            className="bg-primary hover:opacity-90 text-primary-foreground font-black text-sm px-7 py-4 rounded-2xl shadow-lg shadow-primary/25 flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            <Globe className="w-4 h-4" />
            <span>Ver Planes Web</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/pos-escritorio"
            className="bg-card hover:bg-secondary border border-border text-foreground font-bold text-sm px-6 py-4 rounded-2xl flex items-center gap-2 transition-all shadow-sm"
          >
            <Monitor className="w-4 h-4 text-primary" />
            <span>POS Escritorio (Offline)</span>
          </Link>

          <Link
            href="/pos-online"
            className="bg-card hover:bg-secondary border border-border text-foreground font-bold text-sm px-6 py-4 rounded-2xl flex items-center gap-2 transition-all shadow-sm"
          >
            <Cloud className="w-4 h-4 text-primary" />
            <span>POS Cloud Web</span>
          </Link>
        </div>
      </section>

      {/* Cinta Móvil Infinita (Marquee Activo) */}
      <div className="border-y border-border bg-card/60 backdrop-blur-sm py-4 overflow-hidden">
        <div className="animate-marquee flex items-center gap-10">
          {[...brandConfig.techStack, ...brandConfig.techStack].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs font-bold tracking-wider text-muted-foreground uppercase whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grilla de las 3 Divisiones con Tarjetas Modernas y Redondeadas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-primary">
            Ecosistema ADREV
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-2">
            Elige la herramienta exacta para tu negocio
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Desarrollo web a medida para marcas y distribuidoras, o software de cobro y stock para comercios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {/* Tarjeta 1: Desarrollo Web */}
          <div className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Agencia & Factory
              </span>
              <h3 className="text-2xl font-black mt-3">Desarrollo Web & B2B</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Landing pages para publicidad, webs corporativas y catálogos mayoristas con doble lista y carga por Excel.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Landing Pages y Tiendas con Carrito a WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Catálogos B2B con Precios P1/P2 y Pesables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Sistemas con Login y Ruteo de Vendedores</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-border">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs text-muted-foreground font-bold">Desde:</span>
                <span className="text-xl font-black text-primary">{formatPrice(180000, 160)}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/desarrollo-web"
                  className="bg-primary text-primary-foreground font-black text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-1 hover:opacity-90 transition-opacity"
                >
                  <span>Ver Planes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/cotizador-web"
                  className="bg-secondary text-foreground font-bold text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-1 hover:bg-secondary/80 transition-colors"
                >
                  <Calculator className="w-3.5 h-3.5 text-primary" />
                  <span>Cotizador</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjeta 2: POS Escritorio */}
          <div className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Monitor className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                100% Offline · Windows
              </span>
              <h3 className="text-2xl font-black mt-3">ADREV POS Escritorio</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Software nativo para mostrador. Funciona al 100% sin conexión a internet y sin pagar servidores.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Base de datos SQLite local (No depende de Wi-Fi)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Control de stock, pesables por kilo y tickets PDF</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Auditoría con roles de Dueño y Empleados</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-border">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs text-muted-foreground font-bold">Planes desde:</span>
                <span className="text-xl font-black text-primary">{formatPrice(30000, 28)}/mes</span>
              </div>
              <Link
                href="/pos-escritorio"
                className="w-full bg-primary text-primary-foreground font-black text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <span>Ver Simulador POS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Tarjeta 3: POS Cloud Web */}
          <div className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                En el Navegador
              </span>
              <h3 className="text-2xl font-black mt-3">ADREV POS Cloud</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Plataforma de ventas online estilo cobrando.app. Accedé desde cualquier PC, tablet o celular en tiempo real.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Sin instalaciones: entrás directo por la web</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Libreta de fiado digital y apertura/cierre de caja</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Control de múltiples cajas en vivo desde tu casa</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-border">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs text-muted-foreground font-bold">Suscripción desde:</span>
                <span className="text-xl font-black text-primary">{formatPrice(18000, 16)}/mes</span>
              </div>
              <Link
                href="/pos-online"
                className="w-full bg-secondary text-foreground font-black text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors"
              >
                <span>Conocer Plan Cloud</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}