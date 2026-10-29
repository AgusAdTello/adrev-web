"use client";

import { useState } from "react";
import Link from "next/link";
import { brandConfig } from "@/config/brandConfig";
import { useApp } from "@/context/AppContext";
import {
  Calculator,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Zap,
  Layers,
  HelpCircle,
  RefreshCw,
} from "lucide-react";

export default function CotizadorWebPage() {
  const { formatPrice } = useApp();

  // Estados de la calculadora
  const [selectedPlanId, setSelectedPlanId] = useState<string>("b2b-whitelabel");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "mod-sheets",
    "mod-dual-price",
  ]);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [clientType, setClientType] = useState<"pyme" | "mayorista" | "corporativo">("mayorista");

  // Plan base seleccionado
  const currentPlan =
    brandConfig.webPlans.find((p) => p.id === selectedPlanId) ||
    brandConfig.webPlans[2];

  // Alternar módulos adicionales
  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Cálculo de totales
  const addonsTotalARS = selectedAddons.reduce((acc, addonId) => {
    const mod = brandConfig.addonModules.find((m) => m.id === addonId);
    return acc + (mod ? mod.priceARS : 0);
  }, 0);

  const addonsTotalUSD = selectedAddons.reduce((acc, addonId) => {
    const mod = brandConfig.addonModules.find((m) => m.id === addonId);
    return acc + (mod ? mod.priceUSD : 0);
  }, 0);

  const subtotalARS = currentPlan.priceARS + addonsTotalARS;
  const subtotalUSD = currentPlan.priceUSD + addonsTotalUSD;

  // Descuento del 20% si elige el plan anual
  const discountMultiplier = billingCycle === "annual" ? 0.8 : 1;
  const totalARS = Math.round(subtotalARS * discountMultiplier);
  const totalUSD = Math.round(subtotalUSD * discountMultiplier);

  // Estimación de anticipo inicial (50%)
  const advanceARS = Math.round(totalARS * 0.5);
  const advanceUSD = Math.round(totalUSD * 0.5);

  // Armado del mensaje estructurado para WhatsApp
  const addonsSelectedNames = selectedAddons
    .map((id) => brandConfig.addonModules.find((m) => m.id === id)?.name)
    .filter(Boolean);

  const waText = `👋 *SOLICITUD DE COTIZACIÓN WEB - ADREV*
---------------------------------------
🏢 *Tipo de Proyecto:* ${clientType.toUpperCase()}
📦 *Plan Base Elegido:* ${currentPlan.name}
⚙️ *Módulos Adicionales (${selectedAddons.length}):*
${
  addonsSelectedNames.length > 0
    ? addonsSelectedNames.map((name) => ` • ${name}`).join("\n")
    : " • Ninguno (solo base)"
}

💳 *Modalidad:* ${billingCycle === "annual" ? "Plan Anual Bonificado (-20% OFF)" : "Pago Estándar"}
💰 *Presupuesto Total Estimado:* ${formatPrice(totalARS, totalUSD)}
💵 *Anticipo sugerido al iniciar (50%):* ${formatPrice(advanceARS, advanceUSD)}
⏱️ *Plazo estimado de entrega:* ${currentPlan.deliveryTime}
---------------------------------------
_Hola Agustín! Armé esta propuesta en el cotizador de ADREV y me gustaría coordinar una llamada para evaluar los detalles técnicos._`;

  const waUrl = `https://wa.me/${brandConfig.brand.whatsapp}?text=${encodeURIComponent(
    waText
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-16">
      {/* 1. ENCABEZADO */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-primary text-xs font-black mb-4 shadow-sm">
          <Calculator className="w-3.5 h-3.5" />
          <span>CALCULADORA DE INVERSIÓN DIGITAL</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          Cotizá tu proyecto web con total transparencia
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Seleccioná la escala base de tu sitio y sumá los módulos específicos que necesita tu operación comercial. Los valores se ajustan en vivo y podés enviarnos el resumen directo a WhatsApp.
        </p>

        {/* Switch Facturación */}
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
            Pago Estándar (50/50)
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

      {/* 2. GRILLA PRINCIPAL: CONFIGURADOR + RESUMEN FLOTANTE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* COLUMNA IZQUIERDA: SELECTORES (8 COLS) */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* PASO 1: Elegir Plan Base */}
          <section className="bg-card border border-border rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <span className="text-xs font-black text-primary uppercase tracking-wider block">
                  Paso 1
                </span>
                <h2 className="text-xl font-black">Elegí la Arquitectura Base</h2>
              </div>
              <span className="text-xs font-bold text-muted-foreground">
                Obligatorio
              </span>
            </div>

            <div className="space-y-3">
              {brandConfig.webPlans.map((plan) => {
                const isSelected = selectedPlanId === plan.id;
                return (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isSelected
                        ? "border-2 border-primary bg-secondary/30 shadow-md"
                        : "border-border hover:border-primary/40 bg-card"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border"
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-background" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-black text-base leading-snug">{plan.name}</h3>
                          {plan.popular && (
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                              Mayoristas
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{plan.tagline}</p>
                      </div>
                    </div>

                    <div className="text-left sm:text-right shrink-0 pl-8 sm:pl-0">
                      <span className="text-sm sm:text-base font-black text-primary block">
                        {formatPrice(plan.priceARS, plan.priceUSD)}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-bold">
                        ⏱️ {plan.deliveryTime}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PASO 2: Módulos Adicionales */}
          <section className="bg-card border border-border rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <span className="text-xs font-black text-primary uppercase tracking-wider block">
                  Paso 2
                </span>
                <h2 className="text-xl font-black">Sumá Módulos Funcionales Extra</h2>
              </div>
              <span className="text-xs font-bold text-muted-foreground">
                {selectedAddons.length} seleccionados
              </span>
            </div>

            <div className="space-y-3">
              {brandConfig.addonModules.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isChecked
                        ? "border-2 border-primary bg-secondary/30 shadow-sm"
                        : "border-border hover:border-primary/40 bg-card"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center shrink-0 ${
                          isChecked
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm leading-snug">{addon.name}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{addon.description}</p>
                      </div>
                    </div>

                    <div className="text-left sm:text-right shrink-0 pl-8 sm:pl-0">
                      <span className="text-sm font-black text-primary block">
                        +{formatPrice(addon.priceARS, addon.priceUSD)}
                      </span>
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">
                        Pago único
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PASO 3: Tipo de Operación */}
          <section className="bg-card border border-border rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="border-b border-border pb-3">
              <span className="text-xs font-black text-primary uppercase tracking-wider block">
                Paso 3
              </span>
              <h2 className="text-xl font-black">Tu Tipo de Comercio</h2>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: "pyme", label: "Comercio / PyME" },
                { id: "mayorista", label: "Distribuidora B2B" },
                { id: "corporativo", label: "Marca Líder / SaaS" },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setClientType(t.id as any)}
                  className={`p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer text-center ${
                    clientType === t.id
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA: RESUMEN FLOTANTE (4 COLS) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <div className="bg-card border-2 border-primary/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-primary block">
                  Resumen Presupuestario
                </span>
                <h3 className="text-xl font-black">Inversión Final</h3>
              </div>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-secondary text-primary">
                ADREV EST.
              </span>
            </div>

            {/* Desglose de ítems */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-border/60">
                <span className="font-bold">{currentPlan.name}</span>
                <span className="font-mono font-bold text-foreground">
                  {formatPrice(currentPlan.priceARS, currentPlan.priceUSD)}
                </span>
              </div>

              {selectedAddons.map((id) => {
                const mod = brandConfig.addonModules.find((m) => m.id === id);
                if (!mod) return null;
                return (
                  <div key={id} className="flex items-center justify-between text-muted-foreground">
                    <span className="truncate pr-2">• {mod.name}</span>
                    <span className="font-mono shrink-0 font-bold">
                      +{formatPrice(mod.priceARS, mod.priceUSD)}
                    </span>
                  </div>
                );
              })}

              {billingCycle === "annual" && (
                <div className="flex items-center justify-between text-primary font-bold pt-1">
                  <span>Bonificación Anual (20% OFF)</span>
                  <span className="font-mono">
                    -{formatPrice(
                      Math.round(subtotalARS * 0.2),
                      Math.round(subtotalUSD * 0.2)
                    )}
                  </span>
                </div>
              )}
            </div>

            {/* Total Destacado */}
            <div className="p-4 rounded-2xl bg-secondary/60 border border-border space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-muted-foreground uppercase font-bold">
                  Total Final Estimado:
                </span>
                <span className="text-2xl sm:text-3xl font-black text-primary">
                  {formatPrice(totalARS, totalUSD)}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t border-border">
                <span>Anticipo al iniciar (50%):</span>
                <span className="font-bold text-foreground">
                  {formatPrice(advanceARS, advanceUSD)}
                </span>
              </div>
            </div>

            {/* Botón WhatsApp */}
            <div className="space-y-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-black text-sm py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Enviar Presupuesto a WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-muted-foreground">
                Sin compromiso. Se abrirá tu WhatsApp con el detalle técnico precargado.
              </p>
            </div>

            {/* Garantías técnicas */}
            <div className="pt-4 border-t border-border space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>3 rondas de ajuste estético post-entrega incluidas</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary shrink-0" />
                <span>Plazo comprometido: {currentPlan.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-primary shrink-0" />
                <span>Código 100% tuyo sin ataduras ni comisiones[cite: 1]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}