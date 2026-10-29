"use client";

import { useState } from "react";
import Link from "next/link";
import { brandConfig } from "@/config/brandConfig";
import { useApp } from "@/context/AppContext";
import {
  Monitor,
  WifiOff,
  Database,
  ShieldCheck,
  Scale,
  Receipt,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calculator,
  Download,
  AlertTriangle,
  Play,
  RotateCcw,
  Plus,
  Trash2,
} from "lucide-react";

interface SimProduct {
  id: string;
  name: string;
  price: number;
  stock: number;
  isWeighable: boolean;
  category: string;
}

interface CartItem {
  product: SimProduct;
  qty: number;
}

export default function PosEscritorioPage() {
  const { formatPrice } = useApp();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  // Estado del Simulador Interactivo POS
  const initialProducts: SimProduct[] = [
    { id: "1", name: "Aceite Cocinero 1.5L", price: 5350, stock: 12, isWeighable: false, category: "Almacén" },
    { id: "2", name: "Yerba Playadito 500g", price: 2260, stock: 3, isWeighable: false, category: "Comestibles" },
    { id: "3", name: "Queso Muzzarella Barraza (Kg)", price: 10870, stock: 8.5, isWeighable: true, category: "Lácteos" },
    { id: "4", name: "Jamón Cocido Paladini (Kg)", price: 11390, stock: 2.1, isWeighable: true, category: "Fiambrería" },
  ];

  const [simCart, setSimCart] = useState<CartItem[]>([]);
  const [weighWeight, setWeighWeight] = useState<number>(0.65); // 650 gramos de muestra
  const [simRole, setSimRole] = useState<"cajero" | "admin">("cajero");
  const [ticketPrinted, setTicketPrinted] = useState(false);

  // Agregar al simulador
  const addToSimCart = (prod: SimProduct) => {
    setTicketPrinted(false);
    const qtyToAdd = prod.isWeighable ? weighWeight : 1;
    setSimCart((prev) => {
      const exists = prev.find((item) => item.product.id === prod.id);
      if (exists) {
        return prev.map((item) =>
          item.product.id === prod.id
            ? { ...item, qty: prod.isWeighable ? item.qty + qtyToAdd : item.qty + 1 }
            : item
        );
      }
      return [...prev, { product: prod, qty: qtyToAdd }];
    });
  };

  const removeFromSimCart = (id: string) => {
    setSimCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  const totalSim = simCart.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-20">
      
      {/* 1. ENCABEZADO DE ALTO IMPACTO */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-primary text-xs font-black mb-4 shadow-sm">
          <Monitor className="w-3.5 h-3.5" />
          <span>SOFTWARE DE ESCRITORIO · NATIVO WINDOWS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          ADREV POS: Velocidad extrema en mostrador y cobro sin internet
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Diseñado con arquitectura de alto rendimiento (Tauri + SQLite). Olvidate de las páginas web lentas que se caen cuando falla el Wi-Fi de tu local.
        </p>

        {/* SELECTOR MENSUAL / PAGO DEFINITIVO */}
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
            Licencia Mensual
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
            <span>Licencia Definitiva (Pago Único)</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-primary font-black">
              SIN ALQUILER
            </span>
          </button>
        </div>
      </section>

      {/* 2. LOS 4 PILARES TÉCNICOS DEL SISTEMA */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <WifiOff className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-black">100% Offline (Cero Wi-Fi)</h2>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Base de datos SQLite local en el disco de tu PC. Si se corta la luz o internet, seguís cobrando en mostrador sin demoras.
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Scale className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-black">Productos Pesables x Kg</h2>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Soporte nativo para fracciones decimales (gramos y kilos). Ideal para fiambrerías, queserías, dietéticas y carnicerías.
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-black">Caja Negra de Auditoría</h2>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Registro inalterable de cada anulación, modificación de stock o venta con usuario, hora y fecha exacta para el dueño.
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Receipt className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-black">Tickets PDF & Excel</h2>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Emisión de comprobantes membretados con tu logo y exportación de reportes de ventas filtrados por día, mes o año.
          </p>
        </div>
      </section>

      {/* 3. SIMULADOR INTERACTIVO DEL PUNTO DE VENTA EN VIVO */}
      <section className="bg-card border-2 border-primary/30 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
              <Play className="w-3.5 h-3.5 fill-primary" />
              <span>Simulador Interactivo en Vivo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">
              Probá cómo funciona ADREV POS en mostrador
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Hacé clic en los artículos, pesá por kilo y emití el ticket de muestra.
            </p>
          </div>

          {/* Selector de Rol en el simulador */}
          <div className="flex items-center gap-2 bg-secondary/50 p-1.5 rounded-2xl border border-border text-xs">
            <span className="text-[11px] font-bold text-muted-foreground pl-2">Rol activo:</span>
            <button
              type="button"
              onClick={() => setSimRole("cajero")}
              className={`px-3 py-1.5 rounded-xl font-black transition-all cursor-pointer ${
                simRole === "cajero"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Cajero / Empleado
            </button>
            <button
              type="button"
              onClick={() => setSimRole("admin")}
              className={`px-3 py-1.5 rounded-xl font-black transition-all cursor-pointer ${
                simRole === "admin"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Dueño / Admin
            </button>
          </div>
        </div>

        {/* Grilla del simulador: Izquierda (Catálogo) + Derecha (Ticket de cobro) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LADO IZQUIERDO: Artículos disponibles */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-muted-foreground uppercase">
                Artículos del Mostrador (Tocar para agregar)
              </span>
              <span className="text-xs text-primary font-bold">
                Semáforo de stock activo
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {initialProducts.map((prod) => {
                // Semáforo de stock crítico
                const isCritical = prod.stock <= 4;
                return (
                  <div
                    key={prod.id}
                    onClick={() => addToSimCart(prod)}
                    className="p-4 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 cursor-pointer transition-all flex flex-col justify-between group shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-muted-foreground font-medium">{prod.category}</span>
                        <span
                          className={`inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded-full ${
                            isCritical
                              ? "bg-red-500/15 text-red-500 border border-red-500/30"
                              : "bg-emerald-500/15 text-emerald-500"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isCritical ? "bg-red-500 animate-ping" : "bg-emerald-500"
                            }`}
                          />
                          <span>Stock: {prod.stock} {prod.isWeighable ? "kg" : "un."}</span>
                        </span>
                      </div>
                      <h4 className="font-bold text-sm mt-1.5 group-hover:text-primary transition-colors">
                        {prod.name}
                      </h4>
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-3 border-t border-border/60">
                      <span className="font-black text-sm text-foreground">
                        {formatPrice(prod.price, Math.round(prod.price / 1100))}
                        {prod.isWeighable && <span className="text-[10px] text-muted-foreground"> /kg</span>}
                      </span>
                      <span className="text-xs font-bold text-primary group-hover:underline flex items-center gap-1">
                        <Plus className="w-3.5 h-3.5" />
                        <span>Cobrar</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Balanza para pesables */}
            <div className="p-4 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="font-bold block">Balanza de Mostrador (Simulador)</span>
                  <span className="text-muted-foreground text-[11px]">
                    Peso actual para fiambres y quesos:
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {[0.25, 0.5, 0.65, 1.2].map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setWeighWeight(w)}
                    className={`px-2.5 py-1 rounded-lg font-bold border transition-all cursor-pointer ${
                      weighWeight === w
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {w} kg
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* LADO DERECHO: El Ticket / Mostrador */}
          <div className="lg:col-span-5 bg-card border border-border rounded-2xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="text-xs font-black uppercase text-foreground">
                Ticket de Venta en Curso
              </span>
              <button
                type="button"
                onClick={() => setSimCart([])}
                className="text-[11px] font-bold text-muted-foreground hover:text-red-500 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Limpiar</span>
              </button>
            </div>

            {/* Listado de ítems cobrados */}
            <div className="min-h-[160px] max-h-[220px] overflow-y-auto space-y-2 text-xs">
              {simCart.length === 0 ? (
                <div className="h-40 flex flex-col items-center justify-center text-muted-foreground text-center">
                  <Receipt className="w-8 h-8 opacity-40 mb-2" />
                  <span>El ticket está vacío.</span>
                  <span className="text-[11px]">Toca los productos de la izquierda para cobrar.</span>
                </div>
              ) : (
                simCart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between p-2 rounded-xl bg-secondary/40 border border-border/60"
                  >
                    <div className="truncate pr-2">
                      <span className="font-bold block truncate">{item.product.name}</span>
                      <span className="text-[10px] text-muted-foreground">
                        {item.qty} {item.product.isWeighable ? "kg" : "un."} x{" "}
                        {formatPrice(item.product.price, Math.round(item.product.price / 1100))}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold">
                        {formatPrice(
                          Math.round(item.product.price * item.qty),
                          Math.round((item.product.price * item.qty) / 1100)
                        )}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFromSimCart(item.product.id)}
                        className="text-muted-foreground hover:text-red-500 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Subtotal y Total */}
            <div className="p-4 rounded-xl bg-secondary/50 border border-border space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-muted-foreground font-bold uppercase">Total Mostrador:</span>
                <span className="text-2xl font-black text-primary">
                  {formatPrice(totalSim, Math.round(totalSim / 1100))}
                </span>
              </div>
            </div>

            {/* Botón de Emitir Ticket / Confirmar */}
            <div className="space-y-2">
              <button
                type="button"
                disabled={simCart.length === 0}
                onClick={() => setTicketPrinted(true)}
                className={`w-full py-3.5 px-4 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  simCart.length === 0
                    ? "opacity-50 bg-secondary text-muted-foreground cursor-not-allowed"
                    : "bg-primary text-primary-foreground hover:opacity-90 shadow-md"
                }`}
              >
                <Receipt className="w-4 h-4" />
                <span>Confirmar Venta & Emitir Ticket</span>
              </button>

              {ticketPrinted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs text-center font-bold animate-fadeIn">
                  ✓ Ticket #0042 generado con éxito (Auditado por: {simRole.toUpperCase()})
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLANES Y PRECIOS DE LICENCIA POS */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-primary">
            Precios Claros
          </span>
          <h2 className="text-3xl font-black mt-2">
            Elegí la modalidad de licencia para tu local
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Sin costos ocultos. Podés empezar con un abono mensual o adquirir la licencia definitiva de por vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {brandConfig.posPlans.map((plan) => {
            const isHighlighted = plan.highlighted;
            const waMsg = `Hola ADREV! Quiero consultar para adquirir *${plan.name}* (${formatPrice(
              plan.priceARS,
              plan.priceUSD
            )}). ¿Cómo es el proceso de instalación?`;
            const waUrl = `https://wa.me/${brandConfig.brand.whatsapp}?text=${encodeURIComponent(
              waMsg
            )}`;

            return (
              <div
                key={plan.id}
                className={`bg-card rounded-3xl p-8 border flex flex-col justify-between shadow-sm hover:shadow-xl transition-all ${
                  isHighlighted ? "border-2 border-primary" : "border-border hover:border-primary/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black mt-4">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">{plan.description}</p>

                  <div className="mt-6 p-4 rounded-2xl bg-secondary/60 border border-border flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                        Valor de la Licencia
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-primary">
                        {formatPrice(plan.priceARS, plan.priceUSD)}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">
                      /{plan.billingType}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs sm:text-sm">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-border">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-primary-foreground font-black text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
                  >
                    <span>Solicitar Demostración en Mi Local</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}