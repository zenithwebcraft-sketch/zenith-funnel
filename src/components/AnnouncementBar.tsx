import { Megaphone } from "lucide-react";
import { useTranslation } from "@/translations"; // 👈 Verifica que esta ruta sea correcta

const AnnouncementBar = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-2 px-4 animate-in slide-in-from-top duration-500">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
        <Megaphone className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
        <span className="uppercase tracking-wide text-center">
          {t.announcement}
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;