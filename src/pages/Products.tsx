import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight, Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Products = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(PRODUCTS.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  // Helper function to get translated category
  const getCategoryTranslation = (category: string) => {
    if (category === 'All') return t('products.allCategories');
    if (category === 'Pharmaceuticals') return t('products.pharmaceuticals');
    if (category === 'Nutritional Additives') return t('products.nutritionalAdditives');
    if (category === 'New Materials') return t('products.newMaterials');
    return category;
  };

  // Helper function to get product translation key
  const getProductKey = (productId: string) => {
    const keyMap: Record<string, string> = {
      'p1': 'metformin',
      'p2': 'creatine',
      'p3': 'gaa',
      'p4': 'dicy',
      'p5': 'accelerator',
      'p6': 'sodium'
    };
    return keyMap[productId] || 'metformin';
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            {t('products.title')} <span className="font-bold">{t('products.titleBold')}</span>
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-3xl">
            {t('products.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">

          {/* Sidebar Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold uppercase tracking-wider text-sm">
                <Filter size={16} /> {t('footer.markets')}
              </div>
              <div className="flex flex-col space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-4 py-3 text-sm transition-all rounded-r-full border-l-4 ${activeCategory === cat
                      ? 'bg-purple-50 border-purple-600 text-purple-800 font-bold'
                      : 'border-transparent text-slate-600 hover:bg-white hover:text-slate-900'
                      }`}
                  >
                    {getCategoryTranslation(cat)}
                  </button>
                ))}
              </div>

              <div className="mt-12 bg-blue-900 p-6 text-white">
                <h4 className="font-bold mb-2">{t('nav.contactUs')}</h4>
                <p className="text-sm text-blue-200 mb-4">{t('products.subtitle')}</p>
                <button className="text-sm underline font-bold hover:text-blue-200">{t('nav.contactUs')}</button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-8">
              <span className="text-slate-500 text-sm">
                {filteredProducts.length} {t('products.viewDetails')}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => {
                const productKey = getProductKey(product.id);
                return (
                  <div key={product.id} className="bg-white group flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={t(`products.${productKey}.name`)}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 text-xs font-bold text-slate-900 uppercase tracking-wide">
                        {t(`products.${productKey}.category`)}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                        {t(`products.${productKey}.name`)}
                      </h3>
                      <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                        {t(`products.${productKey}.description`)}
                      </p>

                      <div className="border-t border-slate-100 pt-4">
                        <div className="text-xs text-slate-400 mb-2 uppercase">{t('products.applications')}:</div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.applications.map((app, idx) => (
                            <span key={app} className="bg-slate-100 text-slate-600 px-2 py-1 text-xs rounded-sm">
                              {t(`products.${productKey}.app${idx + 1}`)}
                            </span>
                          ))}
                        </div>
                        <button className="w-full py-2 border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                          {t('products.viewDetails')} <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};