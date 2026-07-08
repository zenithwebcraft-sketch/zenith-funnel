import { useSearchParams } from "react-router-dom";
import { useTranslation } from "../translations";

const Proposal = () => {
  const [searchParams] = useSearchParams();
  const { t, language } = useTranslation();
  
  // Asignamos un valor por defecto que respete el idioma activo si no viene el parámetro 'name'
  const defaultName = language === 'es' ? "tu negocio" : "Your Business";
  
  const name = searchParams.get("name") || defaultName;
  const slug = searchParams.get("slug") || "";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center mb-4">
        {t.proposal.title.replace('{name}', name)}
      </h1>
      <p className="text-gray-500">
        {t.proposal.slugNote.replace('{slug}', slug)}
      </p>
    </div>
  );
};

export default Proposal;