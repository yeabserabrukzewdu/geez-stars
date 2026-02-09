
import React from 'react';
import { pricingPlans } from '../constants';
import CheckIcon from './icons/CheckIcon';

const PricingCard: React.FC<{ plan: typeof pricingPlans[0] }> = ({ plan }) => {
  return (
    <div className={`flex flex-col p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border-2 ${plan.accentColor} ${plan.popular ? 'bg-gradient-to-br from-gray-900 via-black to-black lg:scale-105 shadow-[0_0_100px_rgba(234,179,8,0.1)] z-10' : 'bg-white/5 backdrop-blur-xl'} relative group hover:scale-[1.02] transition-all duration-700 cursor-default border-white/5`}>
      {plan.popular && (
        <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-6 py-2 md:px-10 md:py-3 text-[8px] md:text-[10px] font-black rounded-full uppercase tracking-[0.3em] md:tracking-[0.4em] shadow-[0_0_30px_rgba(234,179,8,0.5)] whitespace-nowrap">
          MOST IMPACTFUL
        </div>
      )}
      
      <div className="mb-8 md:mb-12">
        <h3 className="text-[10px] md:text-sm font-black tracking-[0.5em] text-gray-500 uppercase mb-4 group-hover:text-yellow-500 transition-colors">{plan.name}</h3>
        <p className="text-[10px] md:text-xs text-gray-400 font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{plan.bestFor}</p>
      </div>

      <div className="mb-8 md:mb-12">
        <div className="flex flex-col mb-2">
          <span className="text-3xl md:text-5xl font-black text-white tracking-tighter group-hover:scale-105 origin-left transition-transform duration-700 leading-tight uppercase">
            {plan.price}
          </span>
        </div>
        <span className="text-[9px] md:text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">CUSTOMIZED QUOTE</span>
      </div>

      <div className="w-full h-px bg-white/5 mb-8 md:mb-12"></div>

      <ul className="space-y-4 md:space-y-6 mb-12 md:mb-16 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center group/li">
            <div className={`mr-3 md:mr-4 rounded-full p-1 shadow-lg flex-shrink-0 ${plan.popular ? 'bg-yellow-500' : 'bg-gray-800'}`}>
              <CheckIcon className={`h-2.5 w-2.5 md:h-3 md:w-3 ${plan.popular ? 'text-black' : 'text-white'}`} />
            </div>
            <span className="text-gray-400 text-[11px] md:text-sm font-bold uppercase tracking-wider group-hover/li:text-white transition-colors">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button className={`${plan.buttonColor} w-full py-5 md:py-6 font-black text-[9px] md:text-[10px] rounded-[1.5rem] md:rounded-3xl transition-all shadow-xl uppercase tracking-[0.4em] active:scale-95 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]`} onClick={() => window.location.href = '#contact'}>
        Start The Journey
      </button>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-48 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="reveal text-center mb-20 md:mb-32">
          <span className="text-yellow-500 font-black tracking-[0.4em] md:tracking-[0.6em] uppercase mb-6 block text-[9px] md:text-[10px]">Strategic Investment</span>
          <h2 className="text-5xl md:text-[8rem] font-black mb-10 md:mb-12 uppercase tracking-tighter leading-none">THE <span className="gradient-text">PACKAGES</span></h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-light italic">
            Tailored visual dominance packages for brands ready to lead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 max-w-7xl mx-auto items-stretch reveal-stagger">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
