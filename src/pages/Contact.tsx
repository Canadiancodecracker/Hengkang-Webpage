import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Header */}
            <div className="bg-slate-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-light mb-6">
                        {t('contact.title')}
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-slate-900">{t('contact.getInTouch')}</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{t('contact.addressLabel')}</h3>
                                    <p className="text-slate-600 whitespace-pre-line">{t('footer.address')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{t('contact.phoneLabel')}</h3>
                                    <div className="space-y-1 text-slate-600">
                                        <p><span className="text-slate-400 w-24 inline-block">{t('footer.salesDept')}:</span> 0951-8533386</p>
                                        <p><span className="text-slate-400 w-24 inline-block">{t('footer.purchasingDept')}:</span> 0951-8533357</p>
                                        <p><span className="text-slate-400 w-24 inline-block">{t('footer.recruitment')}:</span> 0951-8533356</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{t('contact.emailLabel')}</h3>
                                    <p className="text-slate-600">info@hengkangchina.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{t('contact.hoursLabel')}</h3>
                                    <p className="text-slate-600">{t('contact.hoursValue')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">{t('contact.formTitle')}</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.nameLabel')}</label>
                                    <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.emailInputLabel')}</label>
                                    <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.subjectLabel')}</label>
                                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.messageLabel')}</label>
                                <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-purple-600 text-white font-bold py-3 hover:bg-purple-700 transition-colors">
                                {t('contact.submitButton')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
