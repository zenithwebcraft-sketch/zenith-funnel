import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/translations";

const FAQSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.faq.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.items.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-900 border border-gray-700 rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-white hover:text-primary transition-colors py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-2">{t.faq.stillQuestions}</p>
          <a 
            href="https://zenithwebcraft.com#contact" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-bold transition-colors"
          >
            {t.faq.contact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;