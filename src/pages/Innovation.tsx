import React from 'react';
import { useTranslation } from 'react-i18next';
import { Microscope, FlaskConical, Lightbulb } from 'lucide-react';

export const Innovation = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero */}
            <div className="bg-blue-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-800/50"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-light mb-6">
                        {t('innovation.title')} <span className="font-bold">{t('innovation.titleBold')}</span>
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto text-blue-100 font-light">
                        {t('innovation.subtitle')}
                    </p>
                </div>
            </div>

            {/* R&D Focus */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
                            <Microscope size={48} className="text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold mb-4">{t('innovation.rdTitle')}</h3>
                            <p className="text-slate-600">{t('innovation.rdDesc')}</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
                            <FlaskConical size={48} className="text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold mb-4">{t('innovation.processTitle')}</h3>
                            <p className="text-slate-600">{t('innovation.processDesc')}</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
                            <Lightbulb size={48} className="text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold mb-4">{t('innovation.patentTitle')}</h3>
                            <p className="text-slate-600">{t('innovation.patentDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-light mb-6">
                                {t('innovation.achievementsTitle')} <span className="font-bold">{t('innovation.achievementsTitleBold')}</span>
                            </h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                {t('innovation.achievementsDesc')}
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 border border-slate-700 rounded">
                                    <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
                                    <div className="text-sm text-slate-400">{t('innovation.stat1')}</div>
                                </div>
                                <div className="p-4 border border-slate-700 rounded">
                                    <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                                    <div className="text-sm text-slate-400">{t('innovation.stat2')}</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                src="/Hengkang-Webpage/assets/images/innovation_lab.jpg"
                                alt="R&D Laboratory"
                                className="rounded-lg shadow-xl w-full h-80 object-cover opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
