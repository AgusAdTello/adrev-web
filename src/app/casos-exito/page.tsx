"use client";

import { useState } from "react";
import Link from "next/link";
import { brandConfig } from "@/config/brandConfig";
import { useApp } from "@/context/AppContext";
import {
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Zap,
  Layers,
  Monitor,
  Globe,
  Database,
  FileSpreadsheet,
  Receipt,
  Scale,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function CasosExitoPage() {
  const { formatPrice } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-20">
      
      {/* 1. ENCABEZADO */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-primary text-xs font-black mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTFOLIO TÉCNICO & CASOS DE ESTUDIO</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          Soluciones de software puestas a prueba en el mercado real
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          No mostramos maquetas ficticias. Estos son proyectos reales diseñados y construidos bajo la ingeniería de <strong className="text-foreground">{brandConfig.brand.name}</strong>, resolviendo problemas de alta demanda operativa.
        </p>
      </section>

      {/* 2. CASO INSIGNIA 1: DISTRIBUIDORA FRATELLI B2B */}
      <section className="bg-card border-2 border-primary/30 rounded-3xl p-7 sm:p-10 shadow-xl space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
              <Globe className="w-4 h-4" />
              <span>E-Commerce Mayorista B2B · En Producción</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">
              Distribuidora Fratelli: Catálogo Masivo con Doble Lista
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Distribuidora de productos alimenticios, fiambres, quesos y congelados para comercios gastronómicos.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-secondary text-primary border border-border">
              +739 Artículos
            </span>
            <a
              href="https://fratellidistribuidora2.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-black text-xs px-4 py-2 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
            >
              <span>Ver Web en Vivo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <h3 className="font-black text-base text-foreground">El Desafío Comercial:</h3>
            <p>
              El cliente enviaba semanalmente listas de precios en formato PDF de más de 60 páginas que resultaban incómodas para los almacenes y pizzerías al comprar desde el celular. Necesitaban un catálogo veloz, categorizado por rubros y con pedido estructurado a WhatsApp sin comisiones por transacción.
            </p>

            <h3 className="font-black text-base text-foreground pt-2">Solución de Ingeniería Aplicada:</h3>
            <ul className="space-y-2 text-foreground font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Doble Motor de Precios:</strong> Descuento automático a precio mayorista (<code>X CANT P2</code>) al alcanzar el mínimo de bultos configurado o precio unitario (<code>X UNID P1</code>).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Soporte para Pesables por Balanza:</strong> Los quesos y fiambres al peso viajan en el pedido indicando la cotización sujeta a pesaje exacto en depósito.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Panel /admin con Sincronización Excel:</strong> Actualización masiva de precios arrastrando la planilla o mediante Google Sheets en vivo en 10 segundos.
                </span>
              </li>
            </ul>

            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="p-3.5 rounded-2xl bg-secondary/50 border border-border">
                <Zap className="w-4 h-4 text-primary mb-1" />
                <div className="font-black text-sm text-foreground">&lt; 0.2s</div>
                <div className="text-[10px] text-muted-foreground">Búsqueda Instantánea</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-secondary/50 border border-border">
                <FileSpreadsheet className="w-4 h-4 text-primary mb-1" />
                <div className="font-black text-sm text-foreground">Excel Sync</div>
                <div className="text-[10px] text-muted-foreground">0 Código para el Dueño</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-secondary/50 border border-border">
                <Scale className="w-4 h-4 text-primary mb-1" />
                <div className="font-black text-sm text-foreground">Pesables</div>
                <div className="text-[10px] text-muted-foreground">Control por Kilo</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-secondary/30 border border-border rounded-2xl p-6 space-y-4">
            <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest block">
              FICHA TÉCNICA DEL PROYECTO
            </span>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Cliente:</span>
                <span className="font-bold text-foreground">Distribuidora Fratelli</span>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Stack Tecnológico:</span>
                <span className="font-bold text-foreground">Next.js 16, TypeScript, Tailwind</span>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Volumen de Artículos:</span>
                <span className="font-bold text-foreground">739 ítems en producción</span>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Integración Comercial:</span>
                <span className="font-bold text-foreground">WhatsApp API estructurado</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-muted-foreground">Nivel de Servicio:</span>
                <span className="font-bold text-primary">Nivel 3 · Catálogo B2B Marca Blanca</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/cotizador-web"
                className="w-full bg-secondary hover:bg-secondary/80 border border-border text-foreground font-black text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <span>Cotizar Catálogo Similar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASO 2: SOFTWARE POS ESCRITORIO (TAURI + SQLITE) */}
      <section className="bg-card border border-border rounded-3xl p-7 sm:p-10 shadow-sm space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-500">
              <Monitor className="w-4 h-4" />
              <span>Software de Escritorio · Windows Nativo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">
              ADREV POS Desktop: Punto de Venta Local con Auditoría
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Sistema de control de stock y facturación para comercios minoristas y fiambrerías.
            </p>
          </div>

          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
            100% Offline (SQLite)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <h3 className="font-black text-base text-foreground">Arquitectura Sin Fricción de Conectividad:</h3>
            <p>
              Diseñado con el motor nativo de <strong>Tauri (Rust)</strong> y una base de datos <strong>SQLite local</strong>. A diferencia de las plataformas web tradicionales, este software permite continuar operando el mostrador sin ninguna interrupción, incluso si se corta internet o la red eléctrica local.
            </p>

            <ul className="space-y-2 text-foreground font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Caja Negra de Movimientos:</strong> Registro inalterable de auditoría que guarda cada venta, ajuste o eliminación con nombre de cajero, hora y fecha.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Emisión de Tickets PDF Membretados:</strong> Generación instantánea de tickets y comprobantes con logotipo comercial personalizado.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Semáforo de Alertas:</strong> Alerta visual cuando un artículo baja de 4 unidades para reposición inmediata.
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-secondary/30 border border-border rounded-2xl p-6 space-y-4">
            <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest block">
              ESPECIFICACIONES DE RENDIMIENTO
            </span>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Tiempo de Arranque:</span>
                <span className="font-bold text-foreground">&lt; 0.8 segundos</span>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Consumo de Memoria RAM:</span>
                <span className="font-bold text-foreground">&lt; 45 MB (vs 300MB de Electron)</span>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground">Reportes Exportables:</span>
                <span className="font-bold text-foreground">Excel .xlsx y PDF membretado</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-muted-foreground">Disponibilidad de Licencia:</span>
                <span className="font-bold text-amber-500">Definitiva (Pago Único) o Mensual</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/pos-escritorio"
                className="w-full bg-secondary hover:bg-secondary/80 border border-border text-foreground font-black text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <span>Probar Simulador de Mostrador</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BANNER DE CIERRE: ¿TENÉS UN PROYECTO EN MENTE? */}
      <section className="bg-card border-2 border-primary/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-4xl font-black">
          ¿Querés digitalizar las ventas de tu comercio o distribuidora?
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
          Evaluamos la infraestructura de tu negocio y te entregamos una propuesta técnica con plazos exactos y presupuestos cerrados.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/cotizador-web"
            className="bg-primary text-primary-foreground font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl hover:opacity-90 transition-opacity shadow-md"
          >
            Calcular Presupuesto Online
          </Link>
          <a
            href={`https://wa.me/${brandConfig.brand.whatsapp}?text=${encodeURIComponent(
              "Hola ADREV! Vi los casos de éxito de Fratelli y POS Desktop en la web y quiero consultar para mi negocio."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="bg-card hover:bg-secondary border border-border font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-colors"
          >
            Hablar Directo por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}