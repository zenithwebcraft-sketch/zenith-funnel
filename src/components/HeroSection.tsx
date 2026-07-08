import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useTranslation } from "@/translations";
import { trackViewContent } from "@/components/MetaPixel";
import { useEffect } from "react";

const HeroSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    trackViewContent('Hero Section');
  }, []);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">
            {t.hero.brand}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">{t.hero.title1}</span>
          <br />
          <span className="text-white">{t.hero.title2}</span>
          <br />
          <span className="text-primary">{t.hero.title3}</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          {t.hero.description}
        </p>

        <div className="mb-8">
          <div className="inline-flex items-baseline gap-3">
            <span className="text-gray-400 text-2xl line-through">{t.hero.originalPrice}</span>
            <span className="text-5xl md:text-6xl font-bold text-primary">{t.hero.currentPrice}</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">{t.hero.paymentNote}</p>
        </div>

        <Button 
          onClick={handleCTAClick}
          size="lg"
          className="w-full sm:w-auto h-auto py-4 px-8 text-base sm:text-lg font-bold uppercase tracking-wider whitespace-normal text-center bg-[#FCD34D] text-black hover:bg-[#F59E0B]"
        >
          <span className="text-center leading-tight">
            {t.hero.ctaButton}
          </span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </Button>

        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-gray-300 text-sm ml-2">
            {t.hero.socialProof}
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <span className="text-3xl font-bold text-primary">{t.hero.badge1}</span>
            <span className="text-sm text-gray-300">{t.hero.badge1Text}</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <span className="text-3xl font-bold text-primary">{t.hero.badge2}</span>
            <span className="text-sm text-gray-300">{t.hero.badge2Text}</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <span className="text-3xl font-bold text-primary">{t.hero.badge3}</span>
            <span className="text-sm text-gray-300">{t.hero.badge3Text}</span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;