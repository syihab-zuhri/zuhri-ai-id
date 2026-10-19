export interface DomainInfo {
  name: string;
  extension: string;
  priceDisplay: string;
  priceRaw: number;
  priceNote: string;
  priceSubtext: string;
  status: string;
  contactEmail: string;
  registrarNote: string;
}

export interface WhyFeature {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tag: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  detail: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
