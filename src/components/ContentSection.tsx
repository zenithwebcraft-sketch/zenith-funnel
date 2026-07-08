import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/translations";

const ContentSection = () => {
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
    <section className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t.content.title1}<br className="sm:hidden" /> {t.content.title2}
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t.content.title3}
          </h3>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            {t.content.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-primary/30">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-4 mb-8">
                {t.content.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-gray-900" />
                      </div>
                    </div>
                    <p className="text-gray-200 text-lg flex-1">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-700 my-8"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.content.additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-800 border-2 border-primary">
            <CardContent className="p-8 text-center">
              <p className="text-gray-300 text-lg mb-2">{t.content.packageValue}</p>
              <p className="text-gray-400 text-3xl line-through mb-2">$537</p>
              
              <div className="my-6">
                <p className="text-white text-2xl font-bold mb-2">{t.content.specialPrice}</p>
                <p className="text-6xl font-bold text-primary mb-2">$49.99</p>
                <p className="text-sm text-gray-400">{t.content.paymentNote}</p>
              </div>

<Button 
  onClick={handleCTAClick}
  size="lg"
  className="w-full sm:w-auto h-auto py-4 px-8 text-base sm:text-lg font-bold uppercase tracking-wider whitespace-normal text-center bg-[#FCD34D] text-black hover:bg-[#F59E0B]"
>
  <span className="text-center leading-tight">
    {t.content.ctaButton}
  </span>
</Button>

              <p className="text-xs text-gray-500 mt-4">
                {t.content.securePayment}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-primary font-bold">{t.content.guarantee}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;