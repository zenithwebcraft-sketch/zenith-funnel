import { useSearchParams } from "react-router-dom";
import { useTranslation } from "../translations";

const Proposal = () => {
  const [searchParams] = useSearchParams();
  const { t, language } = useTranslation();
  
  const defaultName = language === 'es' ? "tu negocio" : "Your Business";
  const name = searchParams.get("name") || defaultName;

  const oneTimeText = language === 'es' ? "pago único" : "one-time payment";
  const includesText = language === 'es' ? "Este plan incluye:" : "This plan includes:";

  const scrollToPricing = () => {
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const CheckIcon = () => (
    <svg className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );

  const CrossIcon = () => (
    <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* 1. HERO SECTION */}
      <section className="px-4 py-20 mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">
          {t.proposal.hero.title.replace('{name}', name)}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          {t.proposal.hero.subtitle}
        </p>
        <button 
          onClick={scrollToPricing}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
        >
          {t.proposal.hero.cta}
        </button>
        <p className="mt-6 text-sm text-gray-500 italic">
          {t.proposal.hero.trust}
        </p>
      </section>

      {/* 2. PRICING SECTION (Estilo n8n Oscuro) */}
      <section id="pricing-section" className="px-4 py-24 bg-[#0B0B0F]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            
            {[
              { id: 'tier0', data: t.proposal.pricing.tier0, highlight: false },
              { id: 'tier1', data: t.proposal.pricing.tier1, highlight: false },
              { id: 'tier2', data: t.proposal.pricing.tier2, highlight: true },
              { id: 'tier3', data: t.proposal.pricing.tier3, highlight: false },
            ].map((plan) => (
              <div 
                key={plan.id} 
                className={`relative flex flex-col p-8 text-left rounded-2xl transition-all h-full ${
                  plan.highlight 
                    ? 'bg-[#1C1C24] border border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.15)] transform md:-translate-y-4 z-10' 
                    : 'bg-[#16161A] border border-gray-800'
                }`}
              >
                {/* Badge Recomendado */}
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                      {plan.data.badge}
                    </span>
                  </div>
                )}
                
                {/* Cabecera del Plan */}
                <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">{plan.data.name}</h3>
                <p className="text-gray-400 text-sm mb-6 h-5">{plan.data.setup}</p>
                
                {/* Precio Mensual (o setup si no hay mensual) */}
                <div className="min-h-[70px] mb-6">
                  {plan.data.monthly ? (
                    <div className="flex items-baseline text-white">
                      <span className="text-5xl font-semibold tracking-tight">{plan.data.monthly.split(' ')[0]}</span>
                      <span className="text-gray-400 text-sm ml-2">{plan.data.monthly.replace(plan.data.monthly.split(' ')[0], '')}</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline text-white">
                      <span className="text-5xl font-semibold tracking-tight">{plan.data.setup.split(' ')[0]}</span>
                      <span className="text-gray-400 text-sm ml-2">{oneTimeText}</span>
                    </div>
                  )}
                </div>

                {/* Caja Métrica (Estilo "Workflow executions") */}
                <div className="bg-[#23232B] border border-gray-700/50 rounded-xl p-4 mb-6 flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium text-sm">{plan.data.delivery.split(' ')[0]} {plan.data.delivery.split(' ')[1]}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{plan.data.delivery.split(' ').slice(2).join(' ')}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>

                {/* Botón CTA */}
                <button className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-all mb-8 ${
                  plan.highlight 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500' 
                    : 'bg-[#4B4BFA] text-white hover:bg-[#5C5CFA]'
                }`}>
                  {plan.data.cta}
                </button>

                <hr className="border-gray-800 mb-6" />

                {/* Lista de Features */}
                <p className="text-white text-sm font-medium mb-4">{includesText}</p>
                <ul className="flex-grow space-y-4 text-sm text-gray-300">
                  {plan.data.features.map((feature: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-start">
                      <CheckIcon />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPARISON SECTION */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">{t.proposal.comparison.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Agencia */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-xl mb-6 text-gray-400">{t.proposal.comparison.agency.title}</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                {t.proposal.comparison.agency.points.map((pt: string, i: number) => (
                  <li key={i} className="flex items-start"><CrossIcon /><span className="leading-relaxed">{pt}</span></li>
                ))}
              </ul>
            </div>
            
            {/* DIY */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-xl mb-6 text-gray-400">{t.proposal.comparison.diy.title}</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                {t.proposal.comparison.diy.points.map((pt: string, i: number) => (
                  <li key={i} className="flex items-start"><CrossIcon /><span className="leading-relaxed">{pt}</span></li>
                ))}
              </ul>
            </div>

            {/* Zenith */}
            <div className="bg-blue-600 p-8 rounded-2xl shadow-xl text-white transform md:scale-105 z-10">
              <h3 className="font-bold text-xl mb-6">{t.proposal.comparison.zenith.title}</h3>
              <ul className="space-y-4 text-sm text-blue-50">
                {t.proposal.comparison.zenith.points.map((pt: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="px-4 py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">{t.proposal.faq.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {t.proposal.faq.items.map((item: {q: string, a: string}, idx: number) => (
              <div key={idx}>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TERMS FOOTER */}
      <footer className="px-4 py-10 bg-[#0B0B0F] border-t border-gray-800 text-gray-500 text-xs text-center">
        <div className="max-w-3xl mx-auto">
          <p className="leading-relaxed">{t.proposal.terms}</p>
        </div>
      </footer>

    </div>
  );
};

export default Proposal;