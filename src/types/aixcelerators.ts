export interface WeekModule {
  week: number;
  title: string;
  description: string;
  topics: string[];
  project: string;
}

export interface TargetPersona {
  role: string;
  icon: string;
  painPoint: string;
  gain: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  image?: string;
}