import { NavItem, Product, NewsArticle, InnovationCase } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Innovation', path: '/innovation' },
  { label: 'News', path: '/news' },
  { label: 'Careers', path: '/careers' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'HengLife™ Amino',
    category: 'Animal Nutrition',
    description: 'High-purity amino acids designed for optimal livestock health and growth efficiency.',
    image: 'https://picsum.photos/800/600?random=1',
    applications: ['Poultry', 'Swine', 'Aquaculture']
  },
  {
    id: 'p2',
    name: 'PharmaGrade™ Excipients',
    category: 'Pharmaceuticals',
    description: 'Critical stabilizing agents for next-generation drug delivery systems.',
    image: 'https://picsum.photos/800/600?random=2',
    applications: ['Tablet Binding', 'Controlled Release']
  },
  {
    id: 'p3',
    name: 'DuraBuild™ Additives',
    category: 'Construction',
    description: 'Polymer additives enhancing durability and weather resistance in concrete structures.',
    image: 'https://picsum.photos/800/600?random=3',
    applications: ['Infrastructure', 'Commercial Building']
  },
  {
    id: 'p4',
    name: 'BioSafe Solvents',
    category: 'Industrial',
    description: 'Eco-friendly solvents reducing VOC emissions in industrial coating processes.',
    image: 'https://picsum.photos/800/600?random=4',
    applications: ['Automotive Coatings', 'Marine']
  },
  {
    id: 'p5',
    name: 'NutriBoost Z',
    category: 'Animal Nutrition',
    description: 'Zinc-based additive for immune system support in early-stage growth.',
    image: 'https://picsum.photos/800/600?random=5',
    applications: ['Swine', 'Ruminants']
  },
  {
    id: 'p6',
    name: 'HengFlow 500',
    category: 'Construction',
    description: 'Superplasticizer for high-performance concrete flow.',
    image: 'https://picsum.photos/800/600?random=6',
    applications: ['High-rise', 'Bridges']
  }
];

export const NEWS: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Hengkang Launches Net-Zero Initiative 2030',
    date: 'Oct 24, 2023',
    category: 'Sustainability',
    summary: 'A bold new roadmap to reduce carbon emissions across all manufacturing plants by 50% within the next decade.',
    image: 'https://picsum.photos/800/400?random=10'
  },
  {
    id: 'n2',
    title: 'Expansion of R&D Center in Ningxia',
    date: 'Sep 15, 2023',
    category: 'Corporate',
    summary: 'Our new state-of-the-art facility will focus on bio-based polymer research.',
    image: 'https://picsum.photos/800/400?random=11'
  },
  {
    id: 'n3',
    title: 'Q3 Financial Results: Strong Growth in Pharma',
    date: 'Aug 01, 2023',
    category: 'Financial',
    summary: 'Pharmaceutical additives division sees a 15% year-over-year revenue increase.',
    image: 'https://picsum.photos/800/400?random=12'
  }
];

export const INNOVATIONS: InnovationCase[] = [
  {
    id: 'i1',
    title: 'Bio-Circular Feedstocks',
    area: 'Material Science',
    description: 'Replacing fossil-based raw materials with agricultural by-products to create circular economy polymers.',
    image: 'https://picsum.photos/600/400?random=20'
  },
  {
    id: 'i2',
    title: 'Nano-Encapsulation Tech',
    area: 'Pharmaceuticals',
    description: 'Improving drug bioavailability through advanced molecular wrapping techniques.',
    image: 'https://picsum.photos/600/400?random=21'
  },
  {
    id: 'i3',
    title: 'Smart Concrete Sensors',
    area: 'Construction Tech',
    description: 'Integrating additives that react to stress, signaling structural integrity issues.',
    image: 'https://picsum.photos/600/400?random=22'
  }
];