import React from 'react';
import { ArrowRight, Leaf, FlaskConical, Globe2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => (
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
          Since 2013
        </div>
        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
          Innovation in <br />
          <span className="font-bold">Guanidine Chemistry.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
          A high-tech enterprise integrating R&D, production, and sales of pharmaceutical APIs, animal nutrition, and new materials.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/products" className="bg-white text-slate-900 px-8 py-4 font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
            Explore Products <ArrowRight size={20} />
          </Link>
          <Link to="/sustainability" className="border border-white text-white px-8 py-4 font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            Sustainability
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc, link }: { icon: any, title: string, desc: string, link: string }) => (
  <Link to={link} className="group p-8 border border-slate-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300 bg-white">
    <div className="mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
      <Icon size={40} strokeWidth={1.5} />
    </div>
    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-700 transition-colors">{title}</h3>
    <p className="text-slate-500 mb-6 leading-relaxed font-light">{desc}</p>
    <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-purple-700">
      Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
  </Link>
);

const StatBlock = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center md:text-left border-l-4 border-purple-500 pl-6">
    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
    <div className="text-slate-400 text-sm uppercase tracking-wider">{label}</div>
  </div>
);

export const Home = () => {
  return (
    <div className="w-full">
      <Hero />

      {/* Strategic Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-light mb-4 text-slate-900">Global Leader in <span className="font-bold">Specialty Chemicals.</span></h2>
            <p className="text-lg text-slate-500 font-light">
              Located in Ningxia Helan Industrial Park, covering 130,000 square meters, we are dedicated to advancing the field of guanidine salts and pharmaceutical intermediates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FlaskConical}
              title="Pharmaceutical APIs"
              desc="World's largest single-line production facility for Metformin Hydrochloride, ensuring global supply stability."
              link="/products"
            />
            <FeatureCard
              icon={Leaf}
              title="Animal Nutrition"
              desc="High-quality Creatine Monohydrate and GAA improving livestock health and growth performance."
              link="/products"
            />
            <FeatureCard
              icon={TrendingUp}
              title="New Materials"
              desc="Advanced Dicyandiamide (DICY) and curing agents for the next generation of electronic materials."
              link="/products"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Quality & Innovation Driven.</h2>
            <p className="text-slate-400 mb-8 font-light leading-relaxed">
              We employ advanced processing technology and imported equipment, adhering to GMP quality management systems. Our facility boasts an annual capacity of 12,500 tons of Metformin HCL, 10,000 tons of GAA, and 15,000 tons of Creatine series products.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
              <StatBlock value="130k" label="Square Meters Facility" />
              <StatBlock value="200M" label="Registered Capital (CNY)" />
              <StatBlock value="350+" label="Employees" />
              <StatBlock value="GMP" label="Quality Standard" />
            </div>
          </div>
          <div className="relative h-[500px] w-full bg-slate-800 overflow-hidden">
            <img
              src="/Hengkang-Webpage/assets/images/about_lab.png"
              alt="Hengkang Laboratory"
              className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
              <p className="text-white font-bold text-lg">R&D Center</p>
              <p className="text-slate-300 text-sm">Ningxia Hengkang Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-light text-slate-900">Latest <span className="font-bold">Updates</span></h2>
            </div>
            <Link to="/news" className="text-purple-700 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View News Center <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={`https://picsum.photos/600/400?random=${100 + i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="News" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-purple-600 mb-2 uppercase tracking-wide">Corporate News</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-purple-700">Advancing the future of specialty chemicals through strategic partnerships.</h3>
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