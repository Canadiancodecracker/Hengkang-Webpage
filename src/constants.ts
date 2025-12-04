import { NavItem, Product, NewsArticle, InnovationCase } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', labelKey: 'home', path: '/' },
  { label: 'Products', labelKey: 'products', path: '/products' },
  { label: 'Sustainability', labelKey: 'sustainability', path: '/sustainability' },
  { label: 'Innovation', labelKey: 'innovation', path: '/innovation' },
  { label: 'News', labelKey: 'news', path: '/news' },
  { label: 'Careers', labelKey: 'careers', path: '/careers' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Metformin Hydrochloride',
    category: 'Pharmaceuticals',
    description: 'High-quality pharmaceutical raw material used primarily for the treatment of type 2 diabetes. Produced in the world\'s largest single-line production facility.',
    image: '/Hengkang-Webpage/assets/images/product_metformin.png',
    applications: ['Pharmaceuticals', 'Diabetes Treatment']
  },
  {
    id: 'p2',
    name: 'Creatine Monohydrate',
    category: 'Nutritional Additives',
    description: 'Premium nutritional supplement widely used in sports nutrition and health products to enhance muscle strength and recovery.',
    image: '/Hengkang-Webpage/assets/images/product_creatine.png',
    applications: ['Sports Nutrition', 'Health Supplements', 'Food Additives']
  },
  {
    id: 'p3',
    name: 'Guanidinoacetic Acid (GAA)',
    category: 'Nutritional Additives',
    description: 'A precursor to creatine, used as a highly effective feed additive to improve growth performance in livestock.',
    image: '/Hengkang-Webpage/assets/images/product_gaa.png',
    applications: ['Animal Feed', 'Livestock Nutrition']
  },
  {
    id: 'p4',
    name: 'Epoxy Resin Curing Agent (DICY)',
    category: 'New Materials',
    description: 'Super-fine Dicyandiamide used as a latent curing agent for epoxy resins, offering excellent stability and adhesive properties.',
    image: '/Hengkang-Webpage/assets/images/product_dicy.png',
    applications: ['Electronic Materials', 'Coatings', 'Adhesives', 'Composite Materials']
  },
  {
    id: 'p5',
    name: 'Accelerator',
    category: 'New Materials',
    description: 'Specialized chemical accelerator used to speed up reaction processes in various industrial applications.',
    image: '/Hengkang-Webpage/assets/images/product_accelerator.jpg',
    applications: ['Industrial Processing', 'Chemical Synthesis']
  },
  {
    id: 'p6',
    name: 'Sodium Sarcosinate',
    category: 'New Materials',
    description: 'An amino acid derivative used in the production of biodegradable surfactants and toothpaste.',
    image: '/Hengkang-Webpage/assets/images/product_accelerator.jpg', // Using same image as placeholder if specific one wasn't distinct
    applications: ['Surfactants', 'Personal Care', 'Industrial Cleaning']
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