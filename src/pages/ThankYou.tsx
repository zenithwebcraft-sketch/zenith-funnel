import { Check, Mail } from "lucide-react";
import { useTranslation } from "@/translations";
import { useEffect } from "react";
import { trackPurchase } from "@/components/MetaPixel";

const ThankYouPage = () => {
  const { t, language } = useTranslation();

  useEffect(() => {
    // IMPORTANTE: Por ahora lo dejamos en 0. 
    // En el futuro deberíamos pasar el monto exacto del plan (150, 39, 79 o 119) por URL o estado.
    trackPurchase(0);
  }, []);

  // Textos provisionales directos en el componente
  const nextStepsTitle = language === 'es' ? "Próximos Pasos" : "Next Steps";
  const emailMessage = language === 'es' 
    ? "En los próximos minutos recibirás un correo electrónico con los detalles exactos de los siguientes pasos para tu cuenta." 
    : "In the next few minutes, you will receive an email with the exact details of the next steps for your account.";

  return (
    <div className="min-h-screen bg-[#0B0B0F] py-20 flex flex-col items-center justify-center font-sans">
      <div className="container mx-auto px-6 max-w-2xl">
        
        {/* Cabecera de Éxito */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {t.thankYou.title}
          </h1>
          <p className="text-xl text-gray-400">
            {t.thankYou.subtitle}
          </p>
        </div>

        {/* Tarjeta Simple de Próximos Pasos */}
        <div className="bg-[#16161A] border border-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">
            {nextStepsTitle}
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {emailMessage}
          </p>

          <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-lg px-6 py-3">
            <p className="text-sm text-blue-400 font-medium">
              {language === 'es' 
                ? "Por favor, revisa tu bandeja de entrada (y tu carpeta de spam)." 
                : "Please check your inbox (and your spam folder)."}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThankYouPage;