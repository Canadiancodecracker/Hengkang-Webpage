# Bilingual Implementation Guide

## Overview
Your Hengkang Technology website now supports **full bilingual functionality** with English and Chinese languages. Users can seamlessly switch between languages using the language switcher in the navigation bar.

## Features Implemented

### 1. **Language Switcher**
- **Location**: Top navigation bar (desktop and mobile)
- **Desktop**: Dropdown menu with Globe icon showing current language (EN/中文)
- **Mobile**: Two toggle buttons for English and Chinese
- **Persistence**: Selected language is saved in browser localStorage

### 2. **Translated Content**

#### Navigation & Layout
- ✅ All navigation menu items (Home, Products, Sustainability, Innovation, News, Careers)
- ✅ Contact Us button
- ✅ Footer sections (Markets, Company, Contact Us)
- ✅ Footer links and copyright information

#### Home Page
- ✅ Hero section (title, subtitle, call-to-action buttons)
- ✅ Strategic pillars section (Pharmaceutical APIs, Animal Nutrition, New Materials)
- ✅ Quality & Innovation section with statistics
- ✅ Latest Updates/News section

#### Products Page
- ✅ Page header and subtitle
- ✅ Category filters (All Categories, Pharmaceuticals, Nutritional Additives, New Materials)
- ✅ All 6 products with:
  - Product names
  - Categories
  - Descriptions
  - Applications/use cases
- ✅ Product details button

## File Structure

```
src/
├── i18n/
│   ├── index.ts                 # i18n configuration
│   └── locales/
│       ├── en.json              # English translations
│       └── zh.json              # Chinese translations (Simplified)
├── components/
│   └── Layout.tsx               # Updated with language switcher
├── pages/
│   ├── Home.tsx                 # Fully translated
│   └── Products.tsx             # Fully translated
├── constants.ts                 # Updated with labelKey for nav items
└── types.ts                     # Updated NavItem interface
```

## How to Use

### For Users
1. **Switch Language**: Click the language button (EN/中文) in the top navigation
2. **Select Language**: Choose "English" or "中文" from the dropdown
3. **Automatic Detection**: The website will remember your language preference

### For Developers

#### Adding New Translations

1. **Add to English file** (`src/i18n/locales/en.json`):
```json
{
  "section": {
    "key": "English text here"
  }
}
```

2. **Add to Chinese file** (`src/i18n/locales/zh.json`):
```json
{
  "section": {
    "key": "中文文本在这里"
  }
}
```

3. **Use in Component**:
```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <h1>{t('section.key')}</h1>;
};
```

#### Changing Language Programmatically
```tsx
import { useTranslation } from 'react-i18next';

const { i18n } = useTranslation();

// Switch to Chinese
i18n.changeLanguage('zh');

// Switch to English
i18n.changeLanguage('en');

// Get current language
const currentLang = i18n.language; // 'en' or 'zh'
```

## Translation Keys Reference

### Navigation (`nav.*`)
- `home`, `products`, `sustainability`, `innovation`, `news`, `careers`, `contactUs`

### Hero Section (`hero.*`)
- `since`, `title1`, `title2`, `subtitle`, `exploreProducts`, `sustainability`

### Home Page (`home.*`)
- Section titles, descriptions, statistics labels
- Feature card titles and descriptions
- News section content

### Products (`products.*`)
- Page title and subtitle
- Category names
- Individual product details (name, category, description, applications)

### Footer (`footer.*`)
- Tagline, description
- Market categories
- Company links
- Contact information
- Legal links

## Product Translation Structure

Each product has its own translation namespace:
```json
{
  "products": {
    "metformin": {
      "name": "Product Name",
      "category": "Category",
      "description": "Description",
      "app1": "Application 1",
      "app2": "Application 2"
    }
  }
}
```

Product keys: `metformin`, `creatine`, `gaa`, `dicy`, `accelerator`, `sodium`

## Browser Support
- ✅ Chrome, Firefox, Safari, Edge (latest versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Language detection from browser settings
- ✅ LocalStorage for persistence

## Testing

### Manual Testing Steps
1. Open the website in your browser
2. Click the language switcher (EN/中文)
3. Select "中文" - verify all content changes to Chinese
4. Select "English" - verify all content changes back to English
5. Refresh the page - verify language preference is maintained
6. Test on mobile view - verify mobile language switcher works

### Automated Testing
Run the development server:
```bash
npm run dev
```

Visit: `http://localhost:3000/Hengkang-Webpage/`

## Future Enhancements

### Recommended Additions
1. **More Pages**: Add translations for Sustainability, Innovation, News, and Careers pages
2. **SEO**: Implement language-specific meta tags and URLs
3. **RTL Support**: If adding Arabic or Hebrew in the future
4. **Language-specific Images**: Different images for different languages if needed
5. **Date Formatting**: Localize date formats (MM/DD/YYYY vs DD/MM/YYYY)
6. **Number Formatting**: Localize number formats (1,000 vs 1.000)

### Adding a New Language
1. Create new translation file: `src/i18n/locales/[lang].json`
2. Add to i18n config in `src/i18n/index.ts`:
```typescript
import newLang from './locales/[lang].json';

i18n.init({
  resources: {
    en: { translation: en },
    zh: { translation: zh },
    [lang]: { translation: newLang }
  }
});
```
3. Update language switcher in `Layout.tsx`

## Troubleshooting

### Language not switching?
- Check browser console for errors
- Verify translation keys exist in both language files
- Clear localStorage and try again

### Missing translations?
- Check if the key exists in both `en.json` and `zh.json`
- Verify the key path is correct (e.g., `nav.home` not `home`)

### Language not persisting?
- Check if localStorage is enabled in browser
- Verify i18n detection configuration

## Support
For questions or issues with the bilingual implementation, please refer to:
- [react-i18next documentation](https://react.i18next.com/)
- [i18next documentation](https://www.i18next.com/)

---

**Last Updated**: December 3, 2025
**Version**: 1.0.0
**Languages Supported**: English (EN), Simplified Chinese (ZH)
