"use client";

import { useState } from "react";
import Link from "next/link";
import { brandConfig } from "@/config/brandConfig";
import { useApp } from "@/context/AppContext";
import {
  Cloud,
  Smartphone,
  Laptop,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Percent,
  BookOpen,
  Users2,
  ShieldCheck,
  Zap,
  Clock,
  MessageCircle,
  Play,
  RotateCcw,
  Plus,
} from "lucide-react";

export default function PosOnlinePage() {
  const { formatPrice } = useApp();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  // Estado del mini-simulador de aumentos masivos (Escudo Anti-inflación)
  const [simPercent, setSimPercent] = useState<number>(15);
  const [samplePrice, setSamplePrice] = useState<number>(4500);
  const [applied, setApplied] = useState(false);

  // Formulario de lista de espera
  const [shopName, setShopName] = useState("");
  const [shopCategory, setShopCategory] = useState("almacen");

  const newPrice = Math.round(samplePrice * (1 + simPercent / 100));

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `👋 *SOLICITUD DE ACCESO ANTICIPADO - ADREV POS CLOUD*
---------------------------------------
🏪 *Comercio:* ${shopName || "Sin especificar"}
📦 *Rubro:* ${shopCategory.toUpperCase()}
🚀 *Interés:* Quiero acceder a la Beta Cerrada de ADREV POS Cloud con el beneficio de lanzamiento.
---------------------------------------
_Hola Agustín! Vi la plataforma web de ADREV y quiero anotarme en la lista de espera del sistema de ventas online._`;

    const url = `https://wa.me/${brandConfig.brand.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-20">
      
      {/* 1. HERO PRINCIPAL DE ALTO IMPACTO */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-primary text-xs font-black mb-4 shadow-sm animate-float">
          <Cloud className="w-3.5 h-3.5" />
          <span>SISTEMA SAAS CLOUD · EN EL NAVEGADOR</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          ADREV POS Cloud: Tus ventas, cajas y stock en tiempo real desde tu celular
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Inspirado en la simplicidad de cobrando.app. Sin descargas pesadas ni instalaciones: entrás desde Chrome, Safari o la tablet de tu mostrador y controlás tu negocio estés donde estés.
        </p>

        {/* SELECTOR MENSUAL / ANUAL (-20% OFF) */}
        <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-card border border-border shadow-sm">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${
              billingCycle === "monthly"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Suscripción Mensual
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("annual")}
            className={`px-5 py-2 rounded-full text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              billingCycle === "annual"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>Plan Anual Bonificado</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-primary font-black">
              -20% OFF
            </span>
          </button>
        </div>
      </section>

      {/* 2. PILARES CLOUD: MULTI-DISPOSITIVO Y SIN DEPENDENCIAS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Smartphone className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-black">Acceso Móvil Real</h2>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Mirá la facturación de tu local en vivo desde la playa o tu casa. Compatible con cualquier smartphone o tablet.
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Users2 className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-black">Multi-Caja Sincronizado</h2>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Tené 2 o más cajeros cobrando en paralelo. El stock se descuenta en la nube en tiempo real sin desfases.
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Percent className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-black">Aumentos Masivos %</h2>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Escudo anti-inflación: aumentá un 10% o 15% todo un rubro de tu negocio con un solo botón en 5 segundos.
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-black">Libreta de Fiado Digital</h2>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Cuentas corrientes para clientes del barrio: registrá saldos deudores, entregas a cuenta y recordatorios por WhatsApp.
          </p>
        </div>
      </section>

      {/* 3. SIMULADOR CLOUD: ESCUDO ANTI-INFLACIÓN EN VIVO */}
      <section className="bg-card border-2 border-primary/30 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Función Exclusiva Cloud</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">
              Probá el Modificador Masivo de Precios
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Mirá cómo una distribuidora o almacén actualiza cientos de precios en segundos sin tipear uno por uno.
            </p>
          </div>

          <div className="p-2 rounded-xl bg-secondary text-primary font-bold text-xs flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>Actualización en &lt; 1 segundo</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase block mb-2">
                Seleccioná el porcentaje de ajuste para el rubro "Lácteos / Bebidas":
              </label>
              <div className="flex flex-wrap gap-2">
                {[5, 10, 15, 20, 25].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => {
                      setSimPercent(pct);
                      setApplied(false);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                      simPercent === pct
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border bg-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    +{pct}%
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-secondary/40 border border-border space-y-2 text-xs">
              <span className="font-bold block text-foreground">Regla de Negocio Automatizada:</span>
              <p className="text-muted-foreground">
                El sistema recalcula los precios de venta manteniendo intacto tu margen de ganancia configurado, redondeando automáticamente al entero más cercano.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setApplied(true)}
              className="bg-primary hover:opacity-90 text-primary-foreground font-black text-xs py-3.5 px-6 rounded-xl shadow-md flex items-center gap-2 transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>Simular Aumento Masivo (+{simPercent}%)</span>
            </button>
          </div>

          {/* Tarjeta de resultado interactivo */}
          <div className="lg:col-span-6">
            <div className="bg-secondary/40 border-2 border-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3 text-xs">
                <span className="font-bold text-muted-foreground uppercase">Artículo de Muestra</span>
                <span className="font-mono text-primary font-bold">RUBRO: BEBIDAS</span>
              </div>

              <div>
                <h4 className="font-black text-lg">Aperitivo Fernet Branca 750ml</h4>
                <p className="text-xs text-muted-foreground">Código de Barras: 779000123456</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-card border border-border">
                  <span className="text-[10px] text-muted-foreground font-bold uppercase block">
                    Precio Anterior
                  </span>
                  <span className="text-lg font-black text-muted-foreground line-through">
                    {formatPrice(samplePrice, Math.round(samplePrice / 1100))}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-card border-2 border-primary">
                  <span className="text-[10px] text-primary font-bold uppercase block">
                    Nuevo Precio (+{simPercent}%)
                  </span>
                  <span className="text-lg font-black text-primary">
                    {formatPrice(newPrice, Math.round(newPrice / 1100))}
                  </span>
                </div>
              </div>

              {applied && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-bold text-center animate-fadeIn">
                  ✓ Se actualizaron 148 artículos de esta categoría en la nube con éxito.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLANES CLOUD & RESERVA DE BETA */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LADO IZQUIERDO: Tarjetas de Planes */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              Suscripciones SaaS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">
              Planes Cloud Flexibles (Cancela cuando quieras)
            </h2>
          </div>

          <div className="space-y-4">
            {brandConfig.cloudPosPlans.map((plan) => {
              const discount = billingCycle === "annual" ? 0.8 : 1;
              const displayARS = Math.round(plan.priceARS * discount);
              const displayUSD = Math.round(plan.priceUSD * discount);

              return (
                <div
                  key={plan.id}
                  className={`bg-card border rounded-3xl p-6 sm:p-7 transition-all ${
                    plan.highlighted
                      ? "border-2 border-primary shadow-lg"
                      : "border-border hover:border-primary/40 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      {plan.badge}
                    </span>
                    <span className="text-xs text-muted-foreground font-bold">
                      /{plan.billingType}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-black">{plan.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{plan.description}</p>
                    </div>
                    <span className="text-2xl font-black text-primary">
                      {formatPrice(displayARS, displayUSD)}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2 text-xs">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* LADO DERECHO: Formulario de Acceso Anticipado */}
        <div className="lg:col-span-5 bg-card border-2 border-primary/40 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl lg:sticky lg:top-24">
          <div className="border-b border-border pb-4">
            <span className="text-[10px] font-black uppercase text-primary tracking-wider block">
              Lanzamiento Exclusivo
            </span>
            <h3 className="text-xl font-black">Sumate a la Lista de Espera Beta</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Estamos abriendo cupos reducidos para comercios de confianza con un **50% de descuento durante los primeros 3 meses**.
            </p>
          </div>

          <form onSubmit={handleWaitlistSubmit} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-foreground block mb-1.5">
                Nombre de tu Comercio o Negocio:
              </label>
              <input
                type="text"
                required
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                placeholder="Ej. Almacén Don Juan / Fiambrería Centro"
                className="w-full p-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-foreground block mb-1.5">
                Rubro Principal:
              </label>
              <select
                value={shopCategory}
                onChange={(e) => setShopCategory(e.target.value)}
                className="w-full p-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:border-primary font-medium cursor-pointer"
              >
                <option value="almacen">Almacén / Kiosco / Minimercado</option>
                <option value="fiambreria">Fiambrería / Quesería / Dietética</option>
                <option value="quimica">Química / Limpieza / Perfumería</option>
                <option value="mayorista">Distribuidora / Venta Mayorista</option>
                <option value="otro">Otro Rubro Comercial</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-black text-xs sm:text-sm py-4 px-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Reservar Mi Lugar por WhatsApp</span>
            </button>
          </form>

          <div className="pt-2 text-center">
            <span className="text-[11px] text-muted-foreground block">
              Sin tarjeta de crédito requerida · Contacto directo con el desarrollador
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}