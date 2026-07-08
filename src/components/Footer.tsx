const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">ZenithWebCraft</h3>
            <p className="text-gray-400 text-sm mb-4">
              Creando Serenidad Digital
            </p>
            <p className="text-gray-500 text-sm">
              Orlando, FL<br />
              Professional Web Design & Development
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a 
                href="https://zenithwebcraft.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Sitio Principal
              </a>
              <a 
                href="https://zenithwebcraft.com#services" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Servicios
              </a>
              <a 
                href="https://zenithwebcraft.com#selected-work" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Portafolio
              </a>
              <a 
                href="https://zenithwebcraft.com#contact" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Legal & Info */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Información</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                Email: contact@zenithwebcraft.com
              </p>
              <p className="text-gray-400 text-sm">
                💳 Pagos procesados por Hotmart
              </p>
              <p className="text-gray-400 text-sm">
                🔒 Compra 100% segura
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 ZenithWebCraft. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Diseñado con ♥ en Orlando, FL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;