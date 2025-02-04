export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    type: 'A' | 'B' | 'C';
  }[];
}

export interface Portfolio {
  btc: number;
  eth: number;
  altcoins?: number;
  stablecoins: number;
}

export type InvestorProfile = 'Conservador' | 'Moderado' | 'Agressivo';

export interface Result {
  type: InvestorProfile;
  portfolio: Portfolio;
  description: string;
}