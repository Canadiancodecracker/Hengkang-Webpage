import React from 'react';
import { ArrowRight, Leaf, FlaskConical, Globe2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/Hengkang-Webpage/assets/images/banner_about.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white pt-20">
          <div className="inline-block bg-purple-600/90 px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase">
            {t('hero.since')}
          </div>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            {t('hero.title1')} <br />
            <span className="font-bold">{t('hero.title2')}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="bg-white text-slate-900 px-8 py-4 font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
              {t('hero.exploreProducts')} <ArrowRight size={20} />
            </Link>
            <Link to="/sustainability" className="border border-white text-white px-8 py-4 font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              {t('hero.sustainability')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, titleKey, descKey, link }: { icon: any, titleKey: string, descKey: string, link: string }) => {
  const { t } = useTranslation();

  return (
    <Link to={link} className="group p-8 border border-slate-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300 bg-white">
      <div className="mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-700 transition-colors">{t(titleKey)}</h3>
      <p className="text-slate-500 mb-6 leading-relaxed font-light">{t(descKey)}</p>
      <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-purple-700">
        {t('home.learnMore')} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

const StatBlock = ({ value, labelKey }: { value: string, labelKey: string }) => {
  const { t } = useTranslation();

  return (
    <div className="text-center md:text-left border-l-4 border-purple-500 pl-6">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
      <div className="text-slate-400 text-sm uppercase tracking-wider">{t(labelKey)}</div>
    </div>
  );
};

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Hero />

      {/* Strategic Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-light mb-4 text-slate-900">
              {t('home.sectionTitle')} <span className="font-bold">{t('home.sectionTitleBold')}</span>
            </h2>
            <p className="text-lg text-slate-500 font-light">
              {t('home.sectionDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FlaskConical}
              titleKey="home.pharmaTitle"
              descKey="home.pharmaDesc"
              link="/products"
            />
            <FeatureCard
              icon={Leaf}
              titleKey="home.nutritionTitle"
              descKey="home.nutritionDesc"
              link="/products"
            />
            <FeatureCard
              icon={TrendingUp}
              titleKey="home.materialsTitle"
              descKey="home.materialsDesc"
              link="/products"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">{t('home.qualityTitle')}</h2>
            <p className="text-slate-400 mb-8 font-light leading-relaxed">
              {t('home.qualityDesc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
              <StatBlock value="130k" labelKey="home.stat1" />
              <StatBlock value="200M" labelKey="home.stat2" />
              <StatBlock value="350+" labelKey="home.stat3" />
              <StatBlock value="GMP" labelKey="home.stat4" />
            </div>
          </div>
          <div className="relative h-[500px] w-full bg-slate-800 overflow-hidden">
            <img
              src="/Hengkang-Webpage/assets/images/about_lab.png"
              alt={t('home.rdCenter')}
              className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
              <p className="text-white font-bold text-lg">{t('home.rdCenter')}</p>
              <p className="text-slate-300 text-sm">{t('home.companyName')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-light text-slate-900">
                {t('home.latestUpdates')} <span className="font-bold">{t('home.latestUpdatesBold')}</span>
              </h2>
            </div>
            <Link to="/news" className="text-purple-700 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              {t('home.viewNewsCenter')} <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={`https://picsum.photos/600/400?random=${100 + i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="News" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-purple-600 mb-2 uppercase tracking-wide">{t('home.corporateNews')}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-purple-700">{t('home.newsTitle')}</h3>
                  <div className="text-slate-400 text-sm">October 12, 2023</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};