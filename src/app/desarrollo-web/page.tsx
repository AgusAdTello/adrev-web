"use client";

import { useState } from "react";
import Link from "next/link";
import { brandConfig } from "@/config/brandConfig";
import { useApp } from "@/context/AppContext";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  CreditCard,
  ShieldCheck,
  Zap,
  FileSpreadsheet,
  Lock,
  Calculator,
} from "lucide-react";

export default function DesarrolloWebPage() {
  const { formatPrice } = useApp();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [simMode, setSimMode] = useState<"P2" | "P1">("P2");
  const [simQty, setSimQty] = useState<number>(3);

  const unitPriceARS = simMode === "P2" ? 10870 : 12400;
  const unitPriceUSD = simMode === "P2" ? 9.5 : 11;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-20">
      {/* 1. ENCABEZADO */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-primary text-xs font-black mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PLANES DE DESARROLLO A MEDIDA</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          De una Landing de alta conversión a una Plataforma B2B con Logins
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Elegí la escala de tu proyecto. Diseños únicos, sin plantillas genéricas, optimizados para cargar en milisegundos y con código 100% de tu propiedad.
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
            Pago Estándar
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
            <span>Plan Anual con Soporte</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-primary font-black">
              -20% OFF
            </span>
          </button>
        </div>
      </section>

      {/* 2. GRILLA DE PLANES (REDONDEADAS ESTILO MODERNO) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {brandConfig.webPlans.map((plan) => {
          // Si elige anual, aplicamos 20% de descuento en el valor de desarrollo/mantenimiento
          const discountMultiplier = billingCycle === "annual" ? 0.8 : 1;
          const displayPriceARS = Math.round(plan.priceARS * discountMultiplier);
          const displayPriceUSD = Math.round(plan.priceUSD * discountMultiplier);

          const waMessage = `Hola ADREV! Me interesa el plan *${plan.name}* en modalidad ${
            billingCycle === "annual" ? "Anual (-20% OFF)" : "Estándar"
          } (${formatPrice(displayPriceARS, displayPriceUSD)}).`;
          const waLink = `https://wa.me/${brandConfig.brand.whatsapp}?text=${encodeURIComponent(
            waMessage
          )}`;

          return (
            <div
              key={plan.id}
              className={`bg-card rounded-3xl p-7 sm:p-9 border flex flex-col justify-between relative shadow-sm hover:shadow-xl transition-all ${
                plan.popular ? "border-2 border-primary" : "border-border hover:border-primary/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 right-6 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  Más Elegido por Mayoristas
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-primary">
                    {plan.tier}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    {plan.deliveryTime}
                  </span>
                </div>

                <h2 className="text-2xl font-black mt-2">{plan.name}</h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">{plan.tagline}</p>

                {/* Caja de Precio Curvada */}
                <div className="mt-6 p-4 rounded-2xl bg-secondary/60 border border-border flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                      {billingCycle === "annual" ? "Inversión Anual Bonificada" : "Inversión Llave en Mano"}
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl sm:text-3xl font-black text-primary">
                        {formatPrice(displayPriceARS, displayPriceUSD)}
                      </span>
                      {billingCycle === "annual" && (
                        <span className="text-xs line-through text-muted-foreground font-bold">
                          {formatPrice(plan.priceARS, plan.priceUSD)}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-[11px] font-black px-2.5 py-1 rounded-xl bg-card border border-border text-foreground">
                    0% Comisión
                  </span>
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                  <strong className="text-foreground">Ideal para:</strong> {plan.idealFor}
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-2.5 text-xs sm:text-sm">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2.5 text-primary font-bold">
                    <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>3 rondas de revisión estética post-entrega incluidas[cite: 4]</span>
                  </li>
                </ul>
              </div>

              {/* Botones de Acción */}
              <div className="mt-8 pt-5 border-t border-border space-y-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CreditCard className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    <strong className="text-foreground">Plan de pago:</strong> {plan.paymentPlan}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary text-primary-foreground font-black text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity shadow-md"
                  >
                    <span>Contratar este Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/cotizador-web"
                    className="bg-card hover:bg-secondary border border-border font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Calculator className="w-3.5 h-3.5 text-primary" />
                    <span>Sumar Adicionales</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. CASO B2B INTERACTIVO (DISTRIBUIDORA FRATELLI) */}
      <section className="bg-card rounded-3xl p-7 sm:p-10 border border-border shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              Caso Real · Nivel 3 B2B
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Arquitectura Mayorista: +739 artículos con Doble Lista y Excel[cite: 1, 2]
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Desarrollamos para <strong className="text-foreground">Distribuidora Fratelli</strong> una plataforma B2B con filtrado en 0 milisegundos[cite: 1], soporte para precios mayoristas (<code className="text-primary font-bold">X CANT P2</code>)[cite: 1] y unitarios (<code className="text-primary font-bold">X UNID P1</code>)[cite: 1], artículos pesables por Kg y sincronización directa con planillas de cálculo[cite: 1].
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-secondary/50 border border-border">
                <Zap className="w-5 h-5 text-primary mb-1" />
                <div className="font-black text-sm">&lt; 0.2 seg</div>
                <p className="text-[10px] text-muted-foreground">Búsqueda veloz[cite: 1]</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-secondary/50 border border-border">
                <FileSpreadsheet className="w-5 h-5 text-primary mb-1" />
                <div className="font-black text-sm">Excel Sync</div>
                <p className="text-[10px] text-muted-foreground">Actualización masiva[cite: 1, 4]</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-secondary/50 border border-border">
                <Lock className="w-5 h-5 text-primary mb-1" />
                <div className="font-black text-sm">Escalable</div>
                <p className="text-[10px] text-muted-foreground">Login y Zonas[cite: 2, 4]</p>
              </div>
            </div>
          </div>

          {/* Tarjeta Interactiva con Bordes Suaves */}
          <div className="lg:col-span-5">
            <div className="bg-secondary/40 border border-border rounded-2xl p-5 space-y-4 shadow-md">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  Tarjeta B2B Interactiva
                </span>
                <span className="text-[11px] font-bold text-amber-500">⚖️ Pesable x Kg[cite: 1]</span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase">
                  QUESOS BLANDOS · BARRAZA[cite: 1]
                </span>
                <h4 className="font-black text-base mt-0.5">
                  MUZZARELLA CILINDRO BARRAZA HORMAS[cite: 1]
                </h4>
              </div>

              {/* Precios apilados */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSimMode("P2")}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    simMode === "P2"
                      ? "border-primary bg-card shadow-sm"
                      : "border-border opacity-70"
                  }`}
                >
                  <span className="text-[10px] font-black uppercase text-primary block">
                    X CANT (P2 Mayorista)[cite: 1]
                  </span>
                  <span className="text-base font-black">
                    {formatPrice(10870, 9.5)}/kg[cite: 1]
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSimMode("P1")}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    simMode === "P1"
                      ? "border-primary bg-card shadow-sm"
                      : "border-border opacity-70"
                  }`}
                >
                  <span className="text-[10px] font-black uppercase text-muted-foreground block">
                    X UNID (P1 Minorista)[cite: 1]
                  </span>
                  <span className="text-base font-black">
                    {formatPrice(12400, 11)}/kg[cite: 1]
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSimQty(Math.max(1, simQty - 1))}
                    className="w-8 h-8 rounded-lg bg-card border border-border font-black cursor-pointer hover:bg-secondary"
                  >
                    -
                  </button>
                  <span className="font-black text-sm w-7 text-center">{simQty}</span>
                  <button
                    type="button"
                    onClick={() => setSimQty(simQty + 1)}
                    className="w-8 h-8 rounded-lg bg-card border border-border font-black cursor-pointer hover:bg-secondary"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-muted-foreground block">Subtotal estimado:</span>
                  <span className="font-black text-base text-primary">
                    {formatPrice(unitPriceARS * simQty, unitPriceUSD * simQty)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}