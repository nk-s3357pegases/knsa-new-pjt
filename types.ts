import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Integration {
  name: string;
  category: string;
  description: string;
  logo: string; // URL or placeholder text
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export interface LogEntry {
  id: string;
  action: string;
  timestamp: string;
  status: 'success' | 'error' | 'warning';
}