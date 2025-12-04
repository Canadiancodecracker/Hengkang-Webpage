import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Briefcase, GraduationCap, Heart } from 'lucide-react';

export const Careers = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero */}
            <div className="bg-purple-900 text-white py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-light mb-6">
                        {t('careers.title')} <span className="font-bold">{t('careers.titleBold')}</span>
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto text-purple-100 font-light">
                        {t('careers.subtitle')}
                    </p>
                </div>
            </div>

            {/* Culture */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light mb-4">{t('careers.cultureTitle')}</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">{t('careers.cultureDesc')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-slate-50 rounded-lg">
                            <Users size={40} className="text-purple-600 mx-auto mb-4" />
                            <h3 className="font-bold mb-2">{t('careers.value1')}</h3>
                            <p className="text-sm text-slate-600">{t('careers.value1Desc')}</p>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-lg">
                            <Briefcase size={40} className="text-purple-600 mx-auto mb-4" />
                            <h3 className="font-bold mb-2">{t('careers.value2')}</h3>
                            <p className="text-sm text-slate-600">{t('careers.value2Desc')}</p>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-lg">
                            <GraduationCap size={40} className="text-purple-600 mx-auto mb-4" />
                            <h3 className="font-bold mb-2">{t('careers.value3')}</h3>
                            <p className="text-sm text-slate-600">{t('careers.value3Desc')}</p>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-lg">
                            <Heart size={40} className="text-purple-600 mx-auto mb-4" />
                            <h3 className="font-bold mb-2">{t('careers.value4')}</h3>
                            <p className="text-sm text-slate-600">{t('careers.value4Desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">{t('careers.joinTitle')}</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        {t('careers.joinDesc')}
                    </p>
                    <a href="mailto:hr@hengkangchina.com" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors">
                        {t('careers.contactHr')}
                    </a>
                </div>
            </section>
        </div>
    );
};
