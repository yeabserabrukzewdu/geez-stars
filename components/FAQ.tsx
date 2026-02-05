
import React, { useState } from 'react';
import { faqs } from '../constants';

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="reveal border-b border-white/10 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-xl font-semibold transition-colors ${isOpen ? 'text-yellow-500' : 'text-gray-200 group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-yellow-500' : 'rotate-0'}`}>
          +
        </span>
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">FREQUENTLY ASKED</h2>
          <p className="text-yellow-500 tracking-widest font-bold uppercase">Get all your answers here</p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
