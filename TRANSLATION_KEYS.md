# Quick Translation Reference

## Common Translation Patterns

### Using translations in components:
```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('section.title')}</h1>
      <button onClick={() => i18n.changeLanguage('zh')}>
        Switch to Chinese
      </button>
    </div>
  );
};
```

## All Translation Keys

### Navigation (nav.*)
| Key | English | Chinese |
|-----|---------|---------|
| home | Home | 首页 |
| products | Products | 产品中心 |
| sustainability | Sustainability | 可持续发展 |
| innovation | Innovation | 创新研发 |
| news | News | 新闻中心 |
| careers | Careers | 人才招聘 |
| contactUs | Contact Us | 联系我们 |

### Hero Section (hero.*)
| Key | English | Chinese |
|-----|---------|---------|
| since | Since 2013 | 始于2013年 |
| title1 | Innovation in | 胍盐化学 |
| title2 | Guanidine Chemistry. | 创新领航 |
| subtitle | A high-tech enterprise... | 集研发、生产、销售... |
| exploreProducts | Explore Products | 探索产品 |
| sustainability | Sustainability | 可持续发展 |

### Home Page (home.*)
| Key | English | Chinese |
|-----|---------|---------|
| sectionTitle | Global Leader in | 全球领先的 |
| sectionTitleBold | Specialty Chemicals. | 精细化工企业 |
| pharmaTitle | Pharmaceutical APIs | 医药原料药 |
| nutritionTitle | Animal Nutrition | 动物营养 |
| materialsTitle | New Materials | 新材料 |
| qualityTitle | Quality & Innovation Driven. | 质量与创新驱动 |
| stat1 | Square Meters Facility | 厂区面积（平方米） |
| stat2 | Registered Capital (CNY) | 注册资本（人民币） |
| stat3 | Employees | 员工人数 |
| stat4 | Quality Standard | 质量标准 |
| rdCenter | R&D Center | 研发中心 |
| companyName | Ningxia Hengkang Technology | 宁夏恒康科技有限公司 |
| learnMore | Learn More | 了解更多 |

### Products (products.*)
| Key | English | Chinese |
|-----|---------|---------|
| title | Our | 我们的 |
| titleBold | Products | 产品 |
| subtitle | Innovative solutions... | 涵盖医药、营养... |
| allCategories | All Categories | 全部分类 |
| pharmaceuticals | Pharmaceuticals | 医药原料药 |
| nutritionalAdditives | Nutritional Additives | 营养添加剂 |
| newMaterials | New Materials | 新材料 |
| applications | Applications | 应用领域 |
| viewDetails | View Details | 查看详情 |

### Product Details (products.[productKey].*)

#### Metformin (products.metformin.*)
- name: Metformin Hydrochloride / 盐酸二甲双胍
- category: Pharmaceuticals / 医药原料药
- description: High-quality pharmaceutical... / 高品质医药原料...
- app1: Pharmaceuticals / 医药制品
- app2: Diabetes Treatment / 糖尿病治疗

#### Creatine (products.creatine.*)
- name: Creatine Monohydrate / 一水肌酸
- category: Nutritional Additives / 营养添加剂
- app1: Sports Nutrition / 运动营养
- app2: Health Supplements / 健康补充剂
- app3: Food Additives / 食品添加剂

#### GAA (products.gaa.*)
- name: Guanidinoacetic Acid (GAA) / 胍基乙酸（GAA）
- category: Nutritional Additives / 营养添加剂
- app1: Animal Feed / 动物饲料
- app2: Livestock Nutrition / 畜禽营养

#### DICY (products.dicy.*)
- name: Epoxy Resin Curing Agent (DICY) / 环氧树脂固化剂（DICY）
- category: New Materials / 新材料
- app1: Electronic Materials / 电子材料
- app2: Coatings / 涂料
- app3: Adhesives / 胶粘剂
- app4: Composite Materials / 复合材料

#### Accelerator (products.accelerator.*)
- name: Accelerator / 促进剂
- category: New Materials / 新材料
- app1: Industrial Processing / 工业加工
- app2: Chemical Synthesis / 化学合成

#### Sodium (products.sodium.*)
- name: Sodium Sarcosinate / 肌氨酸钠
- category: New Materials / 新材料
- app1: Surfactants / 表面活性剂
- app2: Personal Care / 个人护理
- app3: Industrial Cleaning / 工业清洁

### Footer (footer.*)
| Key | English | Chinese |
|-----|---------|---------|
| tagline | Leading Beyond Chemistry. | 超越化学，引领未来 |
| markets | Markets | 市场领域 |
| animalNutrition | Animal Nutrition | 动物营养 |
| pharmaceuticals | Pharmaceuticals | 医药制品 |
| construction | Construction & Infrastructure | 建筑与基础设施 |
| additives | Additives | 添加剂 |
| company | Company | 公司信息 |
| aboutUs | About Us | 关于我们 |
| sustainability | Sustainability | 可持续发展 |
| careers | Careers | 人才招聘 |
| press | Press | 新闻媒体 |
| contactUs | Contact Us | 联系我们 |
| salesDept | Sales Dept. | 销售部 |
| purchasingDept | Purchasing Dept. | 采购部 |
| recruitment | Recruitment | 人力资源部 |
| copyright | © 2025 Ningxia Hengkang... | © 2025 宁夏恒康科技... |
| privacyPolicy | Privacy Policy | 隐私政策 |
| termsOfUse | Terms of Use | 使用条款 |
| imprint | Imprint | 法律声明 |

## Quick Commands

### Change Language
```tsx
const { i18n } = useTranslation();

// To Chinese
i18n.changeLanguage('zh');

// To English  
i18n.changeLanguage('en');
```

### Get Current Language
```tsx
const currentLanguage = i18n.language; // 'en' or 'zh'
```

### Check if Language is Active
```tsx
const isEnglish = i18n.language === 'en';
const isChinese = i18n.language === 'zh';
```

## File Locations
- English translations: `src/i18n/locales/en.json`
- Chinese translations: `src/i18n/locales/zh.json`
- i18n config: `src/i18n/index.ts`
