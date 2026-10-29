export type Currency = "ARS" | "USD";
export type ThemeMode = "dark" | "light";

export interface WebPlan {
  id: string;
  tier: string;
  name: string;
  tagline: string;
  priceARS: number;
  priceUSD: number;
  deliveryTime: string;
  idealFor: string;
  popular?: boolean;
  features: string[];
  paymentPlan: string;
}

export interface AddonModule {
  id: string;
  name: string;
  description: string;
  priceARS: number;
  priceUSD: number;
  category: "b2b" | "auth" | "automation";
}

export interface PosPlan {
  id: string;
  name: string;
  badge: string;
  priceARS: number;
  priceUSD: number;
  billingType: string;
  description: string;
  highlighted?: boolean;
  features: string[];
}