import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield } from "lucide-react";
import { useTranslation } from "@/translations";

const CTASection = () => {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    const checkoutSection = document.getElementById('checkout-section');
    
    if (checkoutSection) {
      const offset = 80;
      const elementPosition = checkoutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      checkoutSection.style.animation = 'pulse 0.5s ease-in-out';
      setTimeout(() => {
        checkoutSection.style.animation = '';
      }, 500);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border-2 border-primary/30 rounded-full">
            <Clock className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-primary font-bold uppercase tracking-wide">{t.cta.urgencyBadge}</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight px-4">
            {t.cta.headline1}
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-6 px-4">
            {t.cta.headline2}
          </h3>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-gray-800 border-2 border-primary/30 rounded-2xl p-8">
            <div className="space-y-4">
              {t.cta.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                  <span className="text-gray-200">{item.text}</span>
                  <span className="text-primary font-bold">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-gray-700 mt-6 pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white text-xl font-bold">{t.cta.normalValue}</span>
                <span className="text-gray-400 text-2xl line-through">$537.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white text-2xl font-bold">{t.cta.specialPrice}</span>
                <span className="text-primary text-4xl font-bold">$49.99</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="w-full sm:w-auto h-auto py-4 px-8 text-base sm:text-lg font-bold uppercase tracking-wider whitespace-normal text-center bg-[#FCD34D] text-black hover:bg-[#F59E0B]"
          >
            <span className="text-center leading-tight">
              {t.cta.ctaButton}
            </span>
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            {t.cta.paymentNote}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-gray-300">{t.cta.trust1}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            <span className="text-gray-300">{t.cta.trust2}</span>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gray-800 border border-gray-700 rounded-xl px-8 py-6">
            <p className="text-white text-lg mb-2">
              ⚡ {t.cta.limitedSpots}
            </p>
            <p className="text-gray-400 text-sm">
              {t.cta.priceIncrease}
            </p>
            
            <div className="mt-4 w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">{t.cta.spotsOccupied}</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-primary font-bold">
              {t.cta.guarantee}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;