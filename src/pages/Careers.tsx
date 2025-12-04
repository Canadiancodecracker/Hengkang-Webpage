import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { JOB_POSTINGS } from '../constants';

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

            {/* Open Positions */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-light text-center mb-16">
                        {t('careers.openPositions')}
                    </h2>
                    <div className="grid grid-cols-1 gap-8">
                        {JOB_POSTINGS.map((job) => (
                            <div key={job.id} className="border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{t(`careers.${job.titleKey}`)}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full">{job.salary}</span>
                                            <span className="bg-slate-100 px-3 py-1 rounded-full">{job.type}</span>
                                            <span className="bg-slate-100 px-3 py-1 rounded-full">{job.count} Positions</span>
                                        </div>
                                    </div>
                                    <a href={`mailto:hr@hengkangchina.com?subject=Application for ${job.title}`} className="mt-4 md:mt-0 bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors text-center">
                                        {t('careers.applyNow')}
                                    </a>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold mb-3 text-slate-900">{t('careers.requirements')}</h4>
                                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                                            {job.requirements.map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-3 text-slate-900">{t('careers.benefits')}</h4>
                                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                                            {job.benefits.map((benefit, index) => (
                                                <li key={index}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-100 text-sm text-slate-500">
                                    {t('careers.contact')}: <span className="font-medium text-slate-900">{job.contact}</span>
                                </div>
                            </div>
                        ))}
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
