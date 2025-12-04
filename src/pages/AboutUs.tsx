import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Users, Factory, Target } from 'lucide-react';

export const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-96 w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/Hengkang-Webpage/assets/images/banner_about.jpg")' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50"></div>
                </div>
                <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center">
                    <div className="text-white">
                        <h1 className="text-5xl font-light mb-4">
                            {t('about.title')} <span className="font-bold">{t('about.titleBold')}</span>
                        </h1>
                        <p className="text-xl text-slate-200 font-light max-w-2xl">
                            {t('about.subtitle')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Company Introduction */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-light mb-6">
                                {t('about.introTitle')} <span className="font-bold">{t('about.introTitleBold')}</span>
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>{t('about.introPara1')}</p>
                                <p>{t('about.introPara2')}</p>
                                <p>{t('about.introPara3')}</p>
                            </div>
                        </div>
                        <div className="relative h-[500px] bg-slate-100 overflow-hidden">
                            <img
                                src="/Hengkang-Webpage/assets/images/about_lab.png"
                                alt={t('about.labImageAlt')}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Stats */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">2013</div>
                            <div className="text-slate-600 text-sm uppercase tracking-wide">{t('about.established')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">130,000</div>
                            <div className="text-slate-600 text-sm uppercase tracking-wide">{t('about.areaM2')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">200M</div>
                            <div className="text-slate-600 text-sm uppercase tracking-wide">{t('about.capitalCNY')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">350+</div>
                            <div className="text-slate-600 text-sm uppercase tracking-wide">{t('about.employees')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-light text-center mb-16">
                        {t('about.valuesTitle')} <span className="font-bold">{t('about.valuesTitleBold')}</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                                <Target className="text-purple-600" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('about.value1Title')}</h3>
                            <p className="text-slate-600 text-sm">{t('about.value1Desc')}</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                                <Award className="text-purple-600" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('about.value2Title')}</h3>
                            <p className="text-slate-600 text-sm">{t('about.value2Desc')}</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                                <Users className="text-purple-600" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('about.value3Title')}</h3>
                            <p className="text-slate-600 text-sm">{t('about.value3Desc')}</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                                <Factory className="text-purple-600" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('about.value4Title')}</h3>
                            <p className="text-slate-600 text-sm">{t('about.value4Desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-light text-center mb-12">
                        {t('about.certificationsTitle')}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                        <div className="p-6 bg-white/10 backdrop-blur-sm">
                            <div className="text-2xl font-bold mb-2">FDA</div>
                            <div className="text-sm text-slate-300">{t('about.usaCert')}</div>
                        </div>
                        <div className="p-6 bg-white/10 backdrop-blur-sm">
                            <div className="text-2xl font-bold mb-2">CEP</div>
                            <div className="text-sm text-slate-300">{t('about.euCert')}</div>
                        </div>
                        <div className="p-6 bg-white/10 backdrop-blur-sm">
                            <div className="text-2xl font-bold mb-2">PMDA</div>
                            <div className="text-sm text-slate-300">{t('about.japanCert')}</div>
                        </div>
                        <div className="p-6 bg-white/10 backdrop-blur-sm">
                            <div className="text-2xl font-bold mb-2">KFDA</div>
                            <div className="text-sm text-slate-300">{t('about.koreaCert')}</div>
                        </div>
                        <div className="p-6 bg-white/10 backdrop-blur-sm">
                            <div className="text-2xl font-bold mb-2">GMP</div>
                            <div className="text-sm text-slate-300">{t('about.gmpCert')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Capacity */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-light text-center mb-16">
                        {t('about.capacityTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 border-l-4 border-purple-600 bg-slate-50">
                            <div className="text-3xl font-bold text-purple-600 mb-2">20,000</div>
                            <div className="text-sm text-slate-600">{t('about.capacity1')}</div>
                        </div>
                        <div className="p-6 border-l-4 border-purple-600 bg-slate-50">
                            <div className="text-3xl font-bold text-purple-600 mb-2">10,000</div>
                            <div className="text-sm text-slate-600">{t('about.capacity2')}</div>
                        </div>
                        <div className="p-6 border-l-4 border-purple-600 bg-slate-50">
                            <div className="text-3xl font-bold text-purple-600 mb-2">5,000</div>
                            <div className="text-sm text-slate-600">{t('about.capacity3')}</div>
                        </div>
                        <div className="p-6 border-l-4 border-purple-600 bg-slate-50">
                            <div className="text-3xl font-bold text-purple-600 mb-2">5,000</div>
                            <div className="text-sm text-slate-600">{t('about.capacity4')}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
