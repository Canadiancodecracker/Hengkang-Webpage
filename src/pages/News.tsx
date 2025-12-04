import React from 'react';
import { useTranslation } from 'react-i18next';
import { NEWS } from '../constants';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

export const News = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-slate-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-light mb-6">
                        {t('news.title')} <span className="font-bold">{t('news.titleBold')}</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                        {t('news.subtitle')}
                    </p>
                </div>
            </div>

            {/* News Grid */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {NEWS.map((item) => (
                        <div key={item.id} className="group bg-white border border-slate-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                                {/* Placeholder for image if real image fails to load or is placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                                    <span className="text-4xl font-bold opacity-20">NEWS</span>
                                </div>
                                {/* Actual image would go here */}
                                {/* <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> */}
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {item.date}
                                    </div>
                                    <div className="flex items-center gap-1 text-purple-600 font-medium">
                                        <Tag size={14} />
                                        {t(`news.${item.categoryKey || 'companyNews'}`)}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                                    {t(`news.${item.titleKey}`)}
                                </h3>

                                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                                    {t(`news.${item.summaryKey}`)}
                                </p>

                                <button className="flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors">
                                    {t('news.readMore')} <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
