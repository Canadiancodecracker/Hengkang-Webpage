import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Leaf, Droplets, Wind } from 'lucide-react';

const DATA = [
  { name: '2019', emission: 100 },
  { name: '2020', emission: 92 },
  { name: '2021', emission: 85 },
  { name: '2022', emission: 78 },
  { name: '2023', emission: 65 },
  { name: 'Target 2030', emission: 50 },
];

const SustainabilityCard = ({ icon: Icon, title, value, desc }: { icon: any, title: string, value: string, desc: string }) => (
  <div className="bg-slate-900 text-white p-8">
    <div className="flex justify-between items-start mb-6">
       <Icon size={32} className="text-teal-400" />
       <span className="text-4xl font-bold text-teal-400">{value}</span>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export const Sustainability = () => {
  return (
    <div className="pt-20 min-h-screen">
       {/* Hero */}
       <div className="bg-teal-900 text-white py-24 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.6C87.4,-34.1,90.2,-19.1,89.1,-4.6C88,9.9,83,23.9,74.5,36.4C66,48.9,54,59.9,41.2,66.9C28.4,73.9,14.8,76.9,0.7,75.7C-13.4,74.5,-28.3,69.1,-41.7,61.4C-55.1,53.7,-67,43.7,-75.4,31.1C-83.8,18.5,-88.7,3.3,-86.3,-10.8C-83.9,-24.9,-74.2,-37.9,-63.3,-47.5C-52.4,-57.1,-40.3,-63.3,-27.9,-71.4C-15.5,-79.5,-2.8,-89.5,9.6,-88.9C22,-88.3,44,-77,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
         </div>
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <span className="text-teal-400 font-bold uppercase tracking-wider text-sm mb-4 block">Responsibility</span>
            <h1 className="text-5xl md:text-6xl font-light mb-6">Chemistry for a <br/><span className="font-bold">Greener Tomorrow.</span></h1>
            <p className="text-xl max-w-2xl text-teal-100 font-light">
              We have integrated sustainability into every aspect of our strategy. From raw material sourcing to production efficiency.
            </p>
         </div>
       </div>

       {/* Metrics Grid */}
       <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <SustainabilityCard 
            icon={Wind} 
            title="Carbon Reduction" 
            value="-35%" 
            desc="Reduction in specific greenhouse gas emissions per metric ton of product since 2015." 
          />
          <SustainabilityCard 
            icon={Droplets} 
            title="Water Efficiency" 
            value="1.2M" 
            desc="Cubic meters of water saved annually through our closed-loop cooling systems." 
          />
          <SustainabilityCard 
            icon={Leaf} 
            title="Bio-Based Inputs" 
            value="40%" 
            desc="Percentage of raw materials derived from renewable sources in our nutrition division." 
          />
       </div>

       {/* Chart Section */}
       <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16">
             <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-light text-slate-900 mb-6">Tracking our <span className="font-bold">Carbon Footprint</span></h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                   Transparency is key to our sustainability roadmap. We track our emissions rigorously and audit our progress annually against international standards. Our goal is to reach Net Zero in operations by 2040.
                </p>
                <ul className="space-y-4">
                  {['Scope 1 & 2 Emissions tracked quarterly', 'Investment in solar energy for Ningxia plant', 'Waste-to-energy heat recovery systems'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="w-full md:w-1/2 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{backgroundColor: '#1e293b', border: 'none', color: '#fff'}} />
                    <Bar dataKey="emission" radius={[4, 4, 0, 0]}>
                      {DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === DATA.length - 1 ? '#14b8a6' : '#475569'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-center text-xs text-slate-400 mt-4">Relative Emission Index (Baseline 100 in 2019)</p>
             </div>
          </div>
       </section>
    </div>
  );
};