import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight, Filter } from 'lucide-react';

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(PRODUCTS.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Product <span className="font-bold">Center</span></h1>
          <p className="text-xl text-slate-500 font-light max-w-3xl">
            Explore our portfolio of high-performance materials tailored for specific industry applications. From animal nutrition to advanced infrastructure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
             <div className="sticky top-24">
               <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold uppercase tracking-wider text-sm">
                 <Filter size={16} /> Markets
               </div>
               <div className="flex flex-col space-y-2">
                 {categories.map(cat => (
                   <button
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`text-left px-4 py-3 text-sm transition-all rounded-r-full border-l-4 ${
                       activeCategory === cat 
                       ? 'bg-purple-50 border-purple-600 text-purple-800 font-bold' 
                       : 'border-transparent text-slate-600 hover:bg-white hover:text-slate-900'
                     }`}
                   >
                     {cat}
                   </button>
                 ))}
               </div>
               
               <div className="mt-12 bg-blue-900 p-6 text-white">
                 <h4 className="font-bold mb-2">Need a custom solution?</h4>
                 <p className="text-sm text-blue-200 mb-4">Our R&D team works with partners to develop tailored formulations.</p>
                 <button className="text-sm underline font-bold hover:text-blue-200">Contact Sales</button>
               </div>
             </div>
          </div>

          {/* Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-8">
              <span className="text-slate-500 text-sm">Showing {filteredProducts.length} results</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white group flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 text-xs font-bold text-slate-900 uppercase tracking-wide">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">{product.name}</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="border-t border-slate-100 pt-4">
                      <div className="text-xs text-slate-400 mb-2 uppercase">Applications:</div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.applications.map(app => (
                          <span key={app} className="bg-slate-100 text-slate-600 px-2 py-1 text-xs rounded-sm">
                            {app}
                          </span>
                        ))}
                      </div>
                      <button className="w-full py-2 border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                        Product Details <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};