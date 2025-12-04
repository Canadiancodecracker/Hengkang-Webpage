import { NavItem, Product, NewsArticle, InnovationCase } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', labelKey: 'home', path: '/' },
  { label: 'About Us', labelKey: 'aboutUs', path: '/about' },
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
    title: 'Common Food Additives in Ten Foods',
    titleKey: 'news1Title',
    date: 'Nov 22, 2022',
    category: 'Industry News',
    categoryKey: 'industryNews',
    summary: 'What are food additives? They are substances added to food to preserve flavor or enhance taste, appearance, etc.',
    summaryKey: 'news1Summary',
    image: '/Hengkang-Webpage/assets/images/news_additives.jpg'
  },
  {
    id: 'n2',
    title: 'Basic Situation of Ningxia Hengkang Technology',
    titleKey: 'news2Title',
    date: 'Dec 07, 2021',
    category: 'Company News',
    categoryKey: 'companyNews',
    summary: 'Established in 2013, located in Helan Industrial Park, Hengkang Technology is a leading enterprise in the region.',
    summaryKey: 'news2Summary',
    image: '/Hengkang-Webpage/assets/images/news_company.jpg'
  },
  {
    id: 'n3',
    title: 'Annual Output of 15,000 Tons of Metformin Hydrochloride Project',
    titleKey: 'news3Title',
    date: 'Sep 02, 2021',
    category: 'Company News',
    categoryKey: 'companyNews',
    summary: 'Public participation in environmental impact assessment for the new major production line project.',
    summaryKey: 'news3Summary',
    image: '/Hengkang-Webpage/assets/images/news_project.jpg'
  },
  {
    id: 'n4',
    title: 'Erythromycin Technical Transformation Project',
    titleKey: 'news4Title',
    date: 'Jan 28, 2021',
    category: 'Company News',
    categoryKey: 'companyNews',
    summary: 'Investment project for the technical transformation of 200 tons annual output of Erythromycin.',
    summaryKey: 'news4Summary',
    image: '/Hengkang-Webpage/assets/images/news_tech.jpg'
  },
  {
    id: 'n5',
    title: 'Environmental Acceptance of Creatine Project',
    titleKey: 'news5Title',
    date: 'Sep 10, 2018',
    category: 'Environmental',
    categoryKey: 'environmental',
    summary: 'The annual output of 5,000 tons of creatine production project has passed environmental protection acceptance.',
    summaryKey: 'news5Summary',
    image: '/Hengkang-Webpage/assets/images/news_env.jpg'
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