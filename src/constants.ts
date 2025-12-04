import { NavItem, Product, NewsArticle, InnovationCase, JobPosting } from './types';

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
  },
  {
    id: 'n6',
    title: 'Metformin Project EIA Draft Public Notice',
    titleKey: 'news6Title',
    date: 'May 27, 2021',
    category: 'Company News',
    categoryKey: 'companyNews',
    summary: 'Public notice for the draft environmental impact assessment report of the 15,000 tons Metformin project.',
    summaryKey: 'news6Summary',
    image: '/Hengkang-Webpage/assets/images/news_project.jpg'
  },
  {
    id: 'n7',
    title: 'Metformin Project EIA First Public Notice',
    titleKey: 'news7Title',
    date: 'Apr 06, 2021',
    category: 'Company News',
    categoryKey: 'companyNews',
    summary: 'First public notice regarding the environmental impact assessment of the 15,000 tons Metformin project.',
    summaryKey: 'news7Summary',
    image: '/Hengkang-Webpage/assets/images/news_project.jpg'
  },
  {
    id: 'n8',
    title: '1500 Tons BBA Tech Transformation Project',
    titleKey: 'news8Title',
    date: 'Mar 18, 2019',
    category: 'Company News',
    categoryKey: 'companyNews',
    summary: 'Environmental impact assessment draft notice for the 1500 tons BBA technical transformation project.',
    summaryKey: 'news8Summary',
    image: '/Hengkang-Webpage/assets/images/news_tech.jpg'
  },
  {
    id: 'n9',
    title: 'Water Pollutant Monitoring Acceptance',
    titleKey: 'news9Title',
    date: 'Jul 06, 2018',
    category: 'Environmental',
    categoryKey: 'environmental',
    summary: 'Public notice of the acceptance opinion for the comparison monitoring of online water pollutant monitoring equipment.',
    summaryKey: 'news9Summary',
    image: '/Hengkang-Webpage/assets/images/news_env.jpg'
  },
  {
    id: 'n10',
    title: 'Strengthen Supervision of Pharma Enterprises',
    titleKey: 'news10Title',
    date: 'Mar 17, 2017',
    category: 'Industry News',
    categoryKey: 'industryNews',
    summary: 'Strengthening supervision of pharmaceutical and bio-fermentation enterprises and urging rectification of odor issues.',
    summaryKey: 'news10Summary',
    image: '/Hengkang-Webpage/assets/images/news_industry.jpg'
  },
  {
    id: 'n11',
    title: 'Interpretation of Complaint Management Measures',
    titleKey: 'news11Title',
    date: 'Feb 15, 2017',
    category: 'Industry News',
    categoryKey: 'industryNews',
    summary: 'Interpretation of issues related to the Measures for the Administration of Food and Drug Complaints and Reports.',
    summaryKey: 'news11Summary',
    image: '/Hengkang-Webpage/assets/images/news_industry.jpg'
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

export const JOB_POSTINGS: JobPosting[] = [
  {
    id: 'j1',
    title: 'Operator',
    titleKey: 'job1Title',
    count: 5,
    salary: '5500-6500 RMB/month',
    type: 'Shift work',
    requirements: [
      'High school degree or above, chemical related major',
      'Age under 40, able to adapt to shift work',
      'Experience in chemical enterprises is preferred'
    ],
    benefits: [
      'Social insurance and housing fund',
      'Free dormitory and meals',
      'Free shuttle bus',
      'Various subsidies (night shift, high temp, etc.)'
    ],
    contact: '0951-8533356'
  },
  {
    id: 'j2',
    title: 'Forklift Driver',
    titleKey: 'job2Title',
    count: 1,
    salary: '5000-5500 RMB/month',
    type: 'Normal shift',
    requirements: [
      'High school degree or above',
      'Male, age under 40',
      'Valid forklift license, 3+ years experience'
    ],
    benefits: [
      'Social insurance and housing fund',
      'Free dormitory and meals',
      'Free shuttle bus'
    ],
    contact: '0951-8533356'
  },
  {
    id: 'j3',
    title: 'Finished Product Warehouse Keeper',
    titleKey: 'job3Title',
    count: 1,
    salary: '5000-5500 RMB/month',
    type: 'Normal shift',
    requirements: [
      'College degree or above',
      'Familiar with office software and ERP (U8, NC)',
      'Age under 40',
      '1+ year warehouse experience in chemical enterprise'
    ],
    benefits: [
      'Social insurance and housing fund',
      'Free dormitory and meals',
      'Free shuttle bus'
    ],
    contact: '0951-8533356'
  }
];