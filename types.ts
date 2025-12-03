export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  applications: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

export interface MetricData {
  name: string;
  value: number;
  unit: string;
}

export interface InnovationCase {
  id: string;
  title: string;
  area: string;
  description: string;
  image: string;
}