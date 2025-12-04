import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Recycle, Activity } from 'lucide-react';

export const Sustainability = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-teal-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.6C87.4,-34.1,90.2,-19.1,89.1,-4.6C88,9.9,83,23.9,74.5,36.4C66,48.9,54,59.9,41.2,66.9C28.4,73.9,14.8,76.9,0.7,75.7C-13.4,74.5,-28.3,69.1,-41.7,61.4C-55.1,53.7,-67,43.7,-75.4,31.1C-83.8,18.5,-88.7,3.3,-86.3,-10.8C-83.9,-24.9,-74.2,-37.9,-63.3,-47.5C-52.4,-57.1,-40.3,-63.3,-27.9,-71.4C-15.5,-79.5,-2.8,-89.5,9.6,-88.9C22,-88.3,44,-77,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="text-teal-400 font-bold uppercase tracking-wider text-sm mb-4 block">{t('sustainability.heroLabel')}</span>
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            {t('sustainability.title')} <br /><span className="font-bold">{t('sustainability.titleBold')}</span>
          </h1>
          <p className="text-xl max-w-2xl text-teal-100 font-light">
            {t('sustainability.subtitle')}
          </p>
        </div>
      </div>

      {/* Environmental Protection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="inline-block p-3 bg-teal-100 rounded-full text-teal-600 mb-6">
                <Leaf size={32} />
              </div>
              <h2 className="text-3xl font-light mb-6">
                {t('sustainability.envTitle')} <span className="font-bold">{t('sustainability.envTitleBold')}</span>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('sustainability.envDesc')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <Recycle size={20} className="text-teal-500" />
                  {t('sustainability.envPoint1')}
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Activity size={20} className="text-teal-500" />
                  {t('sustainability.envPoint2')}
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/Hengkang-Webpage/assets/images/sustainability_env.jpg"
                alt="Environmental Protection"
                className="rounded-lg shadow-xl w-full h-80 object-cover bg-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Production */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-6">
                <Shield size={32} />
              </div>
              <h2 className="text-3xl font-light mb-6">
                {t('sustainability.safetyTitle')} <span className="font-bold">{t('sustainability.safetyTitleBold')}</span>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('sustainability.safetyDesc')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {t('sustainability.safetyPoint1')}
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {t('sustainability.safetyPoint2')}
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/Hengkang-Webpage/assets/images/sustainability_safety.jpg"
                alt="Safety Production"
                className="rounded-lg shadow-xl w-full h-80 object-cover bg-slate-200"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};