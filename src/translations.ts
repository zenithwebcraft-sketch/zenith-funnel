// translations.ts - Sistema completo de traducciones

export type Language = 'es' | 'en';

export const translations = {
  es: {
    announcement: "ANUNCIO IMPORTANTE: ¡OFERTA DISPONIBLE POR TIEMPO LIMITADO!",
    // Hero Section
    hero: {
      brand: "ZenithWebCraft",
      title1: "TU LANDING PAGE",
      title2: "PROFESIONAL",
      title3: "LISTA EN 48 HORAS",
      subtitle: "Convierte visitantes en clientes con una landing page diseñada para vender.",
      description: "Sin complicaciones técnicas. Sin código. Sin estrés.",
      originalPrice: "$240",
      currentPrice: "$49.99",
      paymentNote: "Pago único • Sin mensualidades",
      ctaButton: "OBTENER MI LANDING PAGE POR SOLO $49.99",
      socialProof: "Más de 50 landing pages entregadas",
      badge1: "48h",
      badge1Text: "Entrega Garantizada",
      badge2: "100%",
      badge2Text: "Responsive Design",
      badge3: "7 Días",
      badge3Text: "Garantía de Devolución"
    },

proposal: {
      hero: {
        title: "{name}, haz que tu nueva página empiece a traer citas reales",
        subtitle: "Te mostramos tu web de prueba. Ahora elige el plan que mejor se adapta a tu negocio y nosotros nos encargamos del resto.",
        trust: "Diseñado para pequeños negocios locales que quieren resultados sin pelear con la tecnología.",
        cta: "Elegir mi plan"
      },
      missingSlug: {
        title: "Falta tu código de acceso",
        description: "Para ver tu propuesta personalizada y la vista previa de tu web, por favor escanea el código QR que vino impreso en tu tarjeta postal.",
        contact: "¿Necesitas ayuda? Contáctanos:",
        email: "contact@zenithwebcraft.com", // Cambia esto por tu email real
        phone: "+1 (317) 744-3712" // Cambia esto por tu teléfono real
      },
      pricing: {
        tier0: {
          name: "Plain",
          setup: "US$150 pago único",
          monthly: null,
          delivery: "Entrega en 48 horas hábiles",
          features: [
            "Página base de 3–4 secciones (Inicio, Servicios, Contacto, Galería).",
            "Sin dominio propio ni hosting incluidos.",
            "Ideal si ya tienes proveedor técnico o quieres sólo el diseño."
          ],
          cta: "Elegir este plan"
        },
        tier1: {
          name: "Presencia Web",
          setup: "US$200 setup",
          monthly: "US$39 / mes (primer año)",
          delivery: "Entrega en 72 horas hábiles",
          features: [
            "Web completa con dominio y hosting configurados por nosotros.",
            "Incluye cambios pequeños mensuales (texto, fotos, horarios).",
            "Pensado para negocios que necesitan estar bien presentados en Google y redes."
          ],
          cta: "Elegir Presencia Web"
        },
        tier2: {
          name: "Web + Citas",
          badge: "Más elegido",
          setup: "US$400 setup",
          monthly: "US$79 / mes (primer año)",
          delivery: "Entrega en 7 días hábiles",
          features: [
            "Todo lo del plan Presencia Web.",
            "Sistema de reservas online integrado con Google Calendar.",
            "Configuramos tus servicios, horarios y profesional(es) para evitar doble reservas.",
            "Menos llamadas al teléfono, más citas confirmadas automáticamente."
          ],
          cta: "Elegir Web + Citas"
        },
        tier3: {
          name: "Crecimiento Local",
          setup: "US$600 setup",
          monthly: "US$119 / mes (primer año)",
          delivery: "Entrega en 15 días hábiles",
          features: [
            "Todo lo del plan Web + Citas.",
            "Blog y publicaciones mensuales (promos, novedades, consejos).",
            "Actualización frecuente de contenido para mejorar tu visibilidad local.",
            "Soporte prioritario en cambios y ajustes."
          ],
          cta: "Elegir Crecimiento"
        }
      },
      comparison: {
        title: "¿Por qué no es otra web más de agencia ni otro “hazlo tú mismo”?",
        agency: {
          title: "Agencia tradicional",
          points: [
            "Cobros únicos de US$1,000–US$5,000 por una web que luego casi nadie actualiza.",
            "Meses de espera y múltiples reuniones."
          ]
        },
        diy: {
          title: "Constructores DIY (Wix, etc.)",
          points: [
            "US$16–US$100 al mes cuando sumas extras, y tú tienes que construir todo."
          ]
        },
        zenith: {
          title: "ZenithWebCraft",
          points: [
            "Planes desde US$39 al mes con nosotros encargándonos de la parte técnica y de las reservas.",
            "Entrega rápida y mantenimiento mensual incluido para que tu web no se quede vieja."
          ]
        }
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            q: "¿Qué diferencia hay entre cada plan?",
            a: "Plain = sólo página, sin dominio/hosting. Presencia Web = web + dominio/hosting + cambios pequeños. Web + Citas = lo anterior + sistema de reservas online. Crecimiento = Web + Citas + blog y contenido recurrente."
          },
          {
            q: "¿El precio mensual es siempre el mismo?",
            a: "El precio mensual mostrado (39 / 79 / 119) aplica durante el primer año de servicio e incluye configuración inicial, hosting y dominio promocional. A partir del segundo año, se aplica la tarifa estándar (59 / 79 / 179 al mes)."
          },
          {
            q: "¿Qué incluye exactamente la mensualidad?",
            a: "Incluye el hosting del sitio, mantenimiento técnico básico, cambios pequeños mensuales (texto, fotos, horarios) y soporte sobre el sistema de citas en los planes que lo incluyen. No cobramos extra por visitas al sitio ni por citas normales dentro del uso razonable del negocio."
          },
          {
            q: "¿Cuánto tarda en estar lista mi página?",
            a: "Plain se entrega en 48 horas hábiles, Presencia en 72 horas hábiles, Web + Citas en 7 días hábiles y Crecimiento en 15 días hábiles."
          },
          {
            q: "¿Puedo cancelar el servicio?",
            a: "Los planes con mensualidad tienen duración mínima de 12 meses. Después se renuevan anualmente y puedes cancelar avisando con 30 días de anticipación antes de la fecha de renovación."
          },
          {
            q: "¿Soy dueño de mi dominio y de mi contenido?",
            a: "Sí. El dominio y el contenido del sitio se registran a tu nombre o al del negocio. Si en algún momento decides cambiar de proveedor, puedes llevarte tu dominio y la copia del contenido."
          }
        ]
      },
      terms: "Los precios indicados son en USD. Planes con mensualidad: compromiso mínimo 12 meses. La tarifa mensual promocional (39 / 79 / 119) aplica durante el primer año, luego se actualiza a 59 / 79 / 179 salvo acuerdo distinto por escrito. La renovación es anual con aviso de cancelación con 30 días de antelación."
    },
    
    // Content Section
    content: {
      title1: "¿QUÉ INCLUYE TU",
      title2: "LANDING PAGE",
      title3: "DE ALTA CONVERSIÓN?",
      subtitle: "La página completa con todo lo necesario para vender",
      features: [
        "Landing Page Profesional de Alta Conversión - Valor: $240",
        "Guía de Copywriting en PDF - Valor: $97",
        "Paleta de Colores Personalizada - Valor: $67",
        "Instalación en tu Dominio - Valor: $97",
        "30 Días de Soporte por Email - Valor: $36"
      ],
      additionalFeatures: [
        "Estructura de conversión probada",
        "Diseño adaptable y profesional",
        "Tecnología de carga instantánea",
        "Formulario de contacto integrado",
        "Compatible con todos los dispositivos",
        "Optimizada para SEO",
        "Integración con redes sociales",
        "1 semana de ajustes post-entrega"
      ],
      packageValue: "Valor Total del Paquete Completo:",
      specialPrice: "Precio Especial Hoy:",
      paymentNote: "Pago único • Sin cargos ocultos • Sin mensualidades",
      ctaButton: "OBTENER MI LANDING PAGE POR SOLO $49.99",
      securePayment: "💳 Pago 100% seguro a través de Hotmart",
      guarantee: "Garantía de 7 días o te devolvemos tu dinero"
    },
    
    // CTA Section
    cta: {
      urgencyBadge: "Oferta Por Tiempo Limitado",
      headline1: "TU ACCESO INSTANTÁNEO A",
      headline2: "TODO ESTO:",
      items: [
        { text: "Landing Page Profesional de Alta Conversión", value: "$240" },
        { text: "Guía de Copywriting en PDF", value: "$97" },
        { text: "Paleta de Colores Personalizada", value: "$67" },
        { text: "Instalación en tu Dominio", value: "$97" },
        { text: "30 Días de Soporte por Email", value: "$36" }
      ],
      normalValue: "Valor Normal:",
      specialPrice: "Precio Especial Hoy:",
      ctaButton: "OBTENER MI LANDING PAGE POR SOLO $49.99",
      paymentNote: "💳 Pago 100% seguro • Garantía de 7 días",
      trust1: "Pago Seguro con Hotmart",
      trust2: "Entrega en 48 horas",
      limitedSpots: "Solo 10 spots disponibles este mes",
      priceIncrease: "Después del límite, el precio sube a $97",
      spotsOccupied: "7 de 10 espacios ocupados",
      guarantee: "Garantía de Satisfacción de 7 Días o tu Dinero de Vuelta"
    },
    
    // Checkout Section
    checkout: {
      title: "Completa Tu Orden",
      subtitle: "Tu landing page profesional está a solo un paso. Completa tu información de pago de forma segura.",
      trust1: "Pago 100% Seguro",
      trust2: "Entrega en 48 Horas",
      trust3: "Múltiples Métodos de Pago",
      guaranteeTitle: "Garantía de Satisfacción",
      guaranteeText: "Si no estás 100% satisfecho, te devolvemos tu dinero",
      paymentMethod: "Método de Pago:",
      embeddedCheckout: "💳 Pagar Aquí (Tarjeta/PayPal)",
      hotmartCheckout: "🏦 Pagar en Hotmart",
      switchTo: "¿Prefieres pagar en",
      switchToHotmart: "Hotmart",
      switchToEmbedded: "aquí"
    },
    
    // Thank You Page
    thankYou: {
      title: "¡Compra Exitosa!",
      subtitle: "Gracias por confiar en ZenithWebCraft",
      message: "Tu landing page inteligente está en camino",
      whatNext: "¿Qué Sigue Ahora?",
      step1Title: "1. Completa el Formulario de Inicio (IMPORTANTE)",
      step1Text: "Necesitamos la información básica de tu negocio para configurar el Smart Checkout y el diseño. Haz clic en el botón de abajo para enviarnos tus datos.",
      step2Title: "2. Configuración Técnica (24 Horas)",
      step2Text: "Nuestro equipo conectará tu dominio a la red global CDN y configurará las pasarelas de pago para USA y Latam.",
      step3Title: "3. Entrega Final (Máximo 48 horas)",
      step3Text: "Te enviaremos tu enlace final para revisión. Tu negocio estará vendiendo globalmente en tiempo récord.",
      whatYouGet: "Tu Paquete Activado Incluye:",
      items: [
        "Landing Page Profesional de Alta Conversión",
        "Sistema Smart Checkout (USA + Latam)",
        "Hosting Global de Alta Velocidad",
        "Instalación en tu Dominio",
        "30 Días de Soporte Prioritario"
      ],
      questionsTitle: "¿Tienes Preguntas?",
      questionsText: "Estamos aquí para ayudarte",
      contactButton: "Ir al Formulario de Inicio", // Usaremos este botón para el form
      formNote: "*Es indispensable para entregar en 48h",
      socialProof: "🎉 Te uniste a los emprendedores que ya venden sin fronteras"
    },

    // Benefits Section
    benefits: {
      title: "LA TRANSFORMACIÓN",
      titleBreak: "PARA TU NEGOCIO",
      subtitle: "No es solo una landing page, es tu nuevo canal de ventas 24/7",
      items: [
        {
          title: "LANZA EN TIEMPO RÉCORD",
          description: "Olvídate de semanas de desarrollo. Tu landing page estará lista en solo 48 horas, optimizada y funcionando.",
          highlight: "48 horas de entrega"
        },
        {
          title: "CONVIERTE VISITANTES EN CLIENTES",
          description: "Diseño probado para maximizar conversiones. Cada elemento está pensado para guiar a tus visitantes hacia la acción.",
          highlight: "Optimizada para vender"
        },
        {
          title: "PROYECTA MÁXIMA CONFIANZA",
          description: "Con diseño profesional y estructura clara, transmites credibilidad desde el primer segundo. Tus clientes sentirán que están en buenas manos.",
          highlight: "Diseño profesional"
        }
      ],
      quote: "La mayoría de los negocios pierden clientes potenciales cada día por no tener una landing page efectiva.",
      cta: "No dejes que eso te pase a ti."
    },

    // Testimonials Section
    testimonials: {
      title: "LO QUE DICEN NUESTROS CLIENTES",
      subtitle: "Más de 50 emprendedores ya transformaron su negocio",
      items: [
        {
          name: "Carmen Cecilia",
          business: "People Sin Límites",
          role: "Coach & Tarot",
          text: "La landing page superó mis expectativas. El diseño es hermoso y profesional, y lo mejor es que empecé a recibir consultas desde el primer día. Totalmente recomendado."
        },
        {
          name: "Ernesto Márquez",
          business: "Proyecto Lumen",
          role: "Transformación Masculina",
          text: "Como desarrollador, aprecio la calidad del código y el diseño. Mi landing para Proyecto Lumen quedó perfecta y mis clientes potenciales me dicen que se ve muy profesional."
        },
        {
          name: "Alejandro Suárez",
          business: "Disuaferca",
          role: "Importación & Exportación",
          text: "Necesitaba una presencia web rápida para mi negocio de importación. En 48 horas tenía mi landing funcionando. La inversión se pagó sola con los primeros clientes."
        }
      ],
      trust: "✨ Únete a decenas de emprendedores que ya están convirtiendo visitantes en clientes"
    },

    // Bonuses Section
    bonuses: {
      badge: "BONOS EXCLUSIVOS",
      title: "ADEMÁS, RECIBE ESTOS BONOS",
      titleHighlight: "TOTALMENTE GRATIS",
      subtitle: "Todo lo que necesitas para que tu nueva landing page convierta desde el primer día",
      items: [
        {
          title: "Sistema de 'Smart Checkout' Geolocalizado",
          description: "Tecnología inteligente que adapta la pasarela de pago según el país del visitante (Hotmart para Latam, Stripe/PayPal para el resto del mundo) para maximizar tus ventas.",
          value: "$197"
        },
        {
          title: "Hosting Global de Alta Velocidad",
          description: "Alojamiento en redes CDN de última generación con detección automática de idioma. Tu página volará y se adaptará al usuario, sin importar dónde esté.",
          value: "$147"
        },
        {
          title: "Setup Completo de Dominio y Hosting",
          description: "Te ayudamos a configurar tu dominio y hosting para que tu landing esté en línea. Soporte paso a paso incluido.",
          value: "$97"
        },
        {
          title: "30 Días de Soporte por Email",
          description: "Cualquier duda, ajuste menor o consulta técnica. Estamos aquí para asegurar tu éxito durante el primer mes.",
          value: "$36"
        }
      ],
      totalValue: "Valor Total de los Bonos:",
      free: "100% GRATIS",
      investment: "Tu inversión:",
      only: "Solo $49.99",
      valueStatement: "Obtienes $477 en valor por solo $49.99"
    },

    // FAQ Section
    faq: {
      title: "PREGUNTAS FRECUENTES (FAQ)",
      subtitle: "Resolvemos todas tus dudas antes de que des el paso",
      items: [
        {
          question: "¿Qué necesito para empezar?",
          answer: "Solo necesitas tener claro qué quieres vender o promocionar. Nosotros nos encargamos de todo lo demás: diseño, estructura, copywriting y puesta en línea. Si ya tienes un dominio, perfecto. Si no, te ayudamos a conseguir uno."
        },
        {
          question: "¿Qué pasa si no sé nada de tecnología?",
          answer: "¡No hay problema! Ese es exactamente el punto. Nosotros manejamos toda la parte técnica. Tú solo necesitas decirnos qué quieres comunicar y nosotros lo hacemos realidad. Además, incluimos 30 días de soporte para cualquier duda."
        },
        {
          question: "¿Puedo hacer cambios después de la entrega?",
          answer: "Sí. Incluimos 1 semana de ajustes post-entrega sin costo adicional. Después de ese período, puedes contratar ajustes menores o aprender a editarla tú mismo con la guía que te entregamos."
        },
        {
          question: "¿Está optimizada para móviles?",
          answer: "¡Absolutamente! Más del 70% de las visitas vienen de móviles. Tu landing page se verá perfecta en celulares, tablets y computadoras. Probamos en todos los dispositivos antes de entregarte."
        },
        {
          question: "¿Incluye formulario de contacto?",
          answer: "Sí, incluye un formulario de contacto completamente funcional. Los mensajes llegan directo a tu email. También podemos integrarlo con herramientas como Mailchimp, ActiveCampaign o WhatsApp si lo prefieres."
        },
        {
          question: "¿Qué pasa si no me gusta el diseño?",
          answer: "Trabajamos contigo para asegurarnos de que el diseño refleje tu marca. Hacemos una propuesta inicial basada en tus necesidades y luego refinamos hasta que estés 100% satisfecho. Si definitivamente no te convence, tenemos garantía de 7 días."
        },
        {
          question: "¿Cómo funciona el proceso de entrega?",
          answer: "1) Haces tu compra. 2) Te contactamos para conocer tu negocio. 3) En 24-48 horas te enviamos la primera versión. 4) Hacemos ajustes según tu feedback. 5) Entregamos la landing completa funcionando en tu dominio."
        },
        {
          question: "¿Puedo conectarla con Hotmart/Stripe/PayPal?",
          answer: "¡Claro! Podemos integrar botones de pago de cualquier plataforma: Hotmart, Stripe, PayPal, Mercado Pago, etc. Solo necesitas tus links de pago y nosotros los configuramos."
        },
        {
          question: "¿Incluye hosting?",
          answer: "La landing está lista para subir a cualquier hosting. Si ya tienes uno, perfecto. Si no, te recomendamos opciones gratuitas como Vercel o Netlify, y te ayudamos a configurarlo (incluido en el bonus de setup)."
        },
        {
          question: "¿Hay garantía de devolución?",
          answer: "Sí. Tienes 7 días para evaluar tu landing page. Si por cualquier razón no estás satisfecho, te devolvemos tu dinero completo, sin preguntas. Queremos que estés 100% feliz con tu inversión."
        },
        {
          question: "¿Cuánto tiempo tengo acceso a los bonos?",
          answer: "Los bonos (guías, paletas de colores, soporte) son tuyos para siempre. Los recibes por email inmediatamente después de tu compra y puedes usarlos cuando quieras, sin límite de tiempo."
        },
        {
          question: "¿El precio incluye el dominio?",
          answer: "El precio de $49.99 incluye el diseño y desarrollo de la landing page. El dominio se compra aparte (cuesta $10-15 al año). Sin embargo, te ayudamos con todo el proceso de compra y configuración como parte del bonus de setup."
        }
      ],
      stillQuestions: "¿Tienes otra pregunta?",
      contact: "Contáctanos directamente →"
    }
  },
  
  en: {
    announcement: "IMPORTANT ANNOUNCEMENT: OFFER AVAILABLE FOR A LIMITED TIME!",
    // Hero Section
    hero: {
      brand: "ZenithWebCraft",
      title1: "YOUR PROFESSIONAL",
      title2: "SALES PAGE",
      title3: "READY IN 48 HOURS",
      subtitle: "Turn visitors into customers with a sales page designed to sell.",
      description: "No technical complications. No code. No stress.",
      originalPrice: "$240",
      currentPrice: "$49.99",
      paymentNote: "One-time payment • No monthly fees",
      ctaButton: "GET MY SALES PAGE FOR ONLY $49.99",
      socialProof: "Over 50 sales pages delivered",
      badge1: "48h",
      badge1Text: "Guaranteed Delivery",
      badge2: "100%",
      badge2Text: "Responsive Design",
      badge3: "7 Days",
      badge3Text: "Money-Back Guarantee"
    },
    
    proposal: {
      hero: {
        title: "{name}, start getting real appointments with your new website",
        subtitle: "We showed you your test website. Now choose the plan that best fits your business and we'll take care of the rest.",
        trust: "Designed for local small businesses that want results without fighting with technology.",
        cta: "Choose my plan"
      },
      missingSlug: {
        title: "Access Code Missing",
        description: "To view your personalized proposal and website preview, please scan the QR code printed on your postcard.",
        contact: "Need help? Contact us:",
        email: "contact@zenithwebcraft.com", // Cambia esto por tu email real
        phone: "+1 (317) 744-3712" // Cambia esto por tu teléfono real
      },
      pricing: {
        tier0: {
          name: "Plain",
          setup: "US$150 one-time payment",
          monthly: null,
          delivery: "Delivery in 48 business hours",
          features: [
            "Basic 3–4 section page (Home, Services, Contact, Gallery).",
            "No custom domain or hosting included.",
            "Ideal if you already have a technical provider or just want the design."
          ],
          cta: "Choose this plan"
        },
        tier1: {
          name: "Web Presence",
          setup: "US$200 setup",
          monthly: "US$39 / mo (first year)",
          delivery: "Delivery in 72 business hours",
          features: [
            "Complete website with domain and hosting configured by us.",
            "Includes small monthly changes (text, photos, hours).",
            "Designed for businesses that need to look great on Google and social media."
          ],
          cta: "Choose Web Presence"
        },
        tier2: {
          name: "Web + Appointments",
          badge: "Most popular",
          setup: "US$400 setup",
          monthly: "US$79 / mo (first year)",
          delivery: "Delivery in 7 business days",
          features: [
            "Everything in Web Presence.",
            "Online booking system integrated with Google Calendar.",
            "We set up your services, hours, and staff to prevent double booking.",
            "Fewer phone calls, more automatically confirmed appointments."
          ],
          cta: "Choose Web + Appointments"
        },
        tier3: {
          name: "Local Growth",
          setup: "US$600 setup",
          monthly: "US$119 / mo (first year)",
          delivery: "Delivery in 15 business days",
          features: [
            "Everything in Web + Appointments.",
            "Blog and monthly posts (promos, updates, tips).",
            "Frequent content updates to improve your local visibility.",
            "Priority support for changes and adjustments."
          ],
          cta: "Choose Growth"
        }
      },
      comparison: {
        title: "Why isn't this just another agency website or a DIY builder?",
        agency: {
          title: "Traditional Agency",
          points: [
            "One-time fees of US$1,000–US$5,000 for a website that rarely gets updated.",
            "Months of waiting and multiple meetings."
          ]
        },
        diy: {
          title: "DIY Builders (Wix, etc.)",
          points: [
            "US$16–US$100 a month when you add extras, and you have to build it all yourself."
          ]
        },
        zenith: {
          title: "ZenithWebCraft",
          points: [
            "Plans starting at US$39/mo with us handling the tech and bookings.",
            "Fast delivery and monthly maintenance included so your site never gets outdated."
          ]
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            q: "What's the difference between each plan?",
            a: "Plain = just the page, no domain/hosting. Web Presence = web + domain/hosting + minor changes. Web + Appointments = the above + online booking system. Growth = Web + Appointments + blog and recurring content."
          },
          {
            q: "Is the monthly price always the same?",
            a: "The monthly price shown (39 / 79 / 119) applies during the first year of service and includes initial setup, hosting, and promotional domain. Starting the second year, the standard rate applies (59 / 79 / 179 per month)."
          },
          {
            q: "What exactly does the monthly fee include?",
            a: "It includes website hosting, basic technical maintenance, small monthly updates (text, photos, hours), and support for the booking system on plans that include it. We do not charge extra for website traffic or normal appointment volume within reasonable business use."
          },
          {
            q: "How long does it take for my page to be ready?",
            a: "Plain is delivered in 48 business hours, Presence in 72 business hours, Web + Appointments in 7 business days, and Growth in 15 business days."
          },
          {
            q: "Can I cancel the service?",
            a: "Plans with a monthly fee have a 12-month minimum commitment. After that, they renew annually and you can cancel by notifying us 30 days prior to the renewal date."
          },
          {
            q: "Do I own my domain and content?",
            a: "Yes. The domain and website content are registered in your name or your business's name. If you ever decide to change providers, you can take your domain and a copy of the content with you."
          }
        ]
      },
      terms: "Prices shown are in USD. Plans with a monthly fee: minimum 12-month commitment. The promotional monthly rate (39 / 79 / 119) applies during the first year, then updates to 59 / 79 / 179 unless otherwise agreed in writing. Renewal is annual with a 30-day cancellation notice."
    },

    // Content Section
    content: {
      title1: "WHAT'S INCLUDED IN YOUR",
      title2: "HIGH-CONVERTING",
      title3: "SALES PAGE?",
      subtitle: "The complete page with everything you need to sell",
      features: [
        "Professional High-Converting Sales Page - Value: $240",
        "Copywriting Guide PDF - Value: $97",
        "Custom Color Palette - Value: $67",
        "Domain Installation - Value: $97",
        "30 Days Email Support - Value: $36"
      ],
      additionalFeatures: [
        "Proven conversion structure",
        "Adaptive and professional design",
        "Instant loading technology",
        "Integrated contact form",
        "Compatible with all devices",
        "SEO optimized",
        "Social media integration",
        "1 week post-delivery adjustments"
      ],
      packageValue: "Total Package Value:",
      specialPrice: "Special Price Today:",
      paymentNote: "One-time payment • No hidden fees • No monthly charges",
      ctaButton: "GET MY SALES PAGE FOR ONLY $49.99",
      securePayment: "💳 100% secure payment through Hotmart",
      guarantee: "7-day guarantee or your money back"
    },
    
    // CTA Section
    cta: {
      urgencyBadge: "Limited Time Offer",
      headline1: "YOUR INSTANT ACCESS TO",
      headline2: "ALL OF THIS:",
      items: [
        { text: "Professional High-Converting Sales Page", value: "$240" },
        { text: "Copywriting Guide PDF", value: "$97" },
        { text: "Custom Color Palette", value: "$67" },
        { text: "Domain Installation", value: "$97" },
        { text: "30 Days Email Support", value: "$36" }
      ],
      normalValue: "Regular Value:",
      specialPrice: "Special Price Today:",
      ctaButton: "GET MY SALES PAGE FOR ONLY $49.99",
      paymentNote: "💳 100% secure payment • 7-day guarantee",
      trust1: "Secure Payment with Hotmart",
      trust2: "Delivery in 48 hours",
      limitedSpots: "Only 10 spots available this month",
      priceIncrease: "After the limit, price increases to $97",
      spotsOccupied: "7 of 10 spots taken",
      guarantee: "7-Day Satisfaction Guarantee or Your Money Back"
    },
    
    // Checkout Section
    checkout: {
      title: "Complete Your Order",
      subtitle: "Your professional sales page is just one step away. Complete your payment information securely.",
      trust1: "100% Secure Payment",
      trust2: "Delivery in 48 Hours",
      trust3: "Multiple Payment Methods",
      guaranteeTitle: "Satisfaction Guarantee",
      guaranteeText: "If you're not 100% satisfied, we'll refund your money",
      paymentMethod: "Payment Method:",
      embeddedCheckout: "💳 Pay Here (Card/PayPal)",
      hotmartCheckout: "🏦 Pay on Hotmart",
      switchTo: "Prefer to pay on",
      switchToHotmart: "Hotmart",
      switchToEmbedded: "here"
    },
    
    // Thank You Page
    thankYou: {
      title: "Purchase Successful!",
      subtitle: "Thank you for trusting ZenithWebCraft",
      message: "Your smart landing page is on its way",
      whatNext: "What's Next?",
      step1Title: "1. Complete the Start Form (IMPORTANT)",
      step1Text: "We need your basic business info to configure the Smart Checkout and design. Click the button below to send us your data.",
      step2Title: "2. Technical Setup (24 Hours)",
      step2Text: "Our team will connect your domain to the global CDN network and configure payment gateways for USA and Latam.",
      step3Title: "3. Final Delivery (Maximum 48 hours)",
      step3Text: "We will send your final link for review. Your business will be selling globally in record time.",
      whatYouGet: "Your Activated Package Includes:",
      items: [
        "Professional High-Converting Sales Page",
        "Smart Checkout System (USA + Latam)",
        "High-Speed Global Hosting",
        "Domain Installation",
        "30 Days Priority Support"
      ],
      questionsTitle: "Have Questions?",
      questionsText: "We're here to help",
      contactButton: "Go to Start Form",
      formNote: "*Essential for 48h delivery",
      socialProof: "🎉 You joined the entrepreneurs selling without borders"
    },

    // Benefits Section
    benefits: {
      title: "THE TRANSFORMATION",
      titleBreak: "FOR YOUR BUSINESS",
      subtitle: "It's not just a sales page, it's your new 24/7 sales channel",
      items: [
        {
          title: "LAUNCH IN RECORD TIME",
          description: "Forget weeks of development. Your sales page will be ready in just 48 hours, optimized and working.",
          highlight: "48-hour delivery"
        },
        {
          title: "CONVERT VISITORS INTO CUSTOMERS",
          description: "Proven design to maximize conversions. Every element is designed to guide your visitors toward action.",
          highlight: "Optimized to sell"
        },
        {
          title: "PROJECT MAXIMUM TRUST",
          description: "With professional design and clear structure, you convey credibility from the first second. Your customers will feel they're in good hands.",
          highlight: "Professional design"
        }
      ],
      quote: "Most businesses lose potential customers every day by not having an effective sales page.",
      cta: "Don't let that happen to you."
    },

    // Testimonials Section
    testimonials: {
      title: "WHAT OUR CLIENTS SAY",
      subtitle: "Over 50 entrepreneurs have already transformed their business",
      items: [
        {
          name: "Carmen Cecilia",
          business: "People Sin Límites",
          role: "Coach & Tarot",
          text: "The sales page exceeded my expectations. The design is beautiful and professional, and best of all, I started receiving inquiries from day one. Totally recommended."
        },
        {
          name: "Ernesto Márquez",
          business: "Proyecto Lumen",
          role: "Male Transformation",
          text: "As a developer, I appreciate the code quality and design. My landing for Proyecto Lumen turned out perfect and my potential clients tell me it looks very professional."
        },
        {
          name: "Alejandro Suárez",
          business: "Disuaferca",
          role: "Import & Export",
          text: "I needed a quick web presence for my import business. In 48 hours I had my landing page working. The investment paid for itself with the first clients."
        }
      ],
      trust: "✨ Join dozens of entrepreneurs who are already converting visitors into customers"
    },

    // Bonuses Section
    bonuses: {
      badge: "EXCLUSIVE BONUSES",
      title: "PLUS, RECEIVE THESE BONUSES",
      titleHighlight: "COMPLETELY FREE",
      subtitle: "Everything you need for your new sales page to convert from day one",
      items: [
        {
          title: "Geo-Located Smart Checkout System",
          description: "Smart technology that adapts the payment gateway based on the visitor's country (Hotmart for Latam, Card/PayPal for the rest of the world) to maximize your conversion rates.",
          value: "$197"
        },
        {
          title: "High-Speed Global Hosting",
          description: "Hosting on state-of-the-art CDN networks with automatic language detection. Your page will load instantly and adapt to the user, no matter where they are.",
          value: "$147"
        },
        {
          title: "Complete Domain and Hosting Setup",
          description: "We help you configure your domain and hosting so your landing is online. Step-by-step support included.",
          value: "$97"
        },
        {
          title: "30 Days Email Support",
          description: "Any questions, minor adjustments or technical queries. We're here to ensure your success during the first month.",
          value: "$36"
        }
      ],
      totalValue: "Total Bonus Value:",
      free: "100% FREE",
      investment: "Your investment:",
      only: "Only $49.99",
      valueStatement: "You get $477 in value for only $49.99"
    },

    // FAQ Section
    faq: {
      title: "FREQUENTLY ASKED QUESTIONS (FAQ)",
      subtitle: "We answer all your questions before you take the step",
      items: [
        {
          question: "What do I need to get started?",
          answer: "You just need to be clear about what you want to sell or promote. We take care of everything else: design, structure, copywriting and going live. If you already have a domain, perfect. If not, we help you get one."
        },
        {
          question: "What if I don't know anything about technology?",
          answer: "No problem! That's exactly the point. We handle all the technical parts. You just need to tell us what you want to communicate and we make it happen. Plus, we include 30 days of support for any questions."
        },
        {
          question: "Can I make changes after delivery?",
          answer: "Yes. We include 1 week of post-delivery adjustments at no additional cost. After that period, you can hire minor adjustments or learn to edit it yourself with the guide we provide."
        },
        {
          question: "Is it optimized for mobile?",
          answer: "Absolutely! More than 70% of visits come from mobile. Your sales page will look perfect on phones, tablets and computers. We test on all devices before delivering."
        },
        {
          question: "Does it include a contact form?",
          answer: "Yes, it includes a fully functional contact form. Messages go straight to your email. We can also integrate it with tools like Mailchimp, ActiveCampaign or WhatsApp if you prefer."
        },
        {
          question: "What if I don't like the design?",
          answer: "We work with you to ensure the design reflects your brand. We make an initial proposal based on your needs and then refine until you're 100% satisfied. If you're definitely not convinced, we have a 7-day guarantee."
        },
        {
          question: "How does the delivery process work?",
          answer: "1) You make your purchase. 2) We contact you to learn about your business. 3) In 24-48 hours we send you the first version. 4) We make adjustments based on your feedback. 5) We deliver the complete landing working on your domain."
        },
        {
          question: "Can I connect it with Hotmart/Stripe/PayPal?",
          answer: "Of course! We can integrate payment buttons from any platform: Hotmart, Stripe, PayPal, Mercado Pago, etc. You just need your payment links and we configure them."
        },
        {
          question: "Does it include hosting?",
          answer: "The landing is ready to upload to any hosting. If you already have one, perfect. If not, we recommend free options like Vercel or Netlify, and we help you configure it (included in the setup bonus)."
        },
        {
          question: "Is there a money-back guarantee?",
          answer: "Yes. You have 7 days to evaluate your sales page. If for any reason you're not satisfied, we'll refund your money in full, no questions asked. We want you to be 100% happy with your investment."
        },
        {
          question: "How long do I have access to the bonuses?",
          answer: "The bonuses (guides, color palettes, support) are yours forever. You receive them by email immediately after your purchase and can use them whenever you want, with no time limit."
        },
        {
          question: "Does the price include the domain?",
          answer: "The price of $49.99 includes the design and development of the sales page. The domain is purchased separately (costs $10-15 per year). However, we help you with the entire purchase and configuration process as part of the setup bonus."
        }
      ],
      stillQuestions: "Have another question?",
      contact: "Contact us directly →"
    }
  }
};

// 3. El Hook modificado (AQUÍ ES DONDE VA EL CAMBIO)
export const useTranslation = () => {
  const detectLanguage = (): Language => {
    // A. Revisar si Vercel nos está forzando un idioma (Latam = 'es')
    const forcedLang = import.meta.env.VITE_FORCE_LANG;
    
    // Validamos que sea un idioma válido ('es' o 'en')
    if (forcedLang === 'es' || forcedLang === 'en') {
      return forcedLang;
    }

    // B. Si no hay variable de entorno, usar el navegador (USA/Global)
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('es') ? 'es' : 'en';
  };

  const language = detectLanguage();
  
  // Aquí accedemos al objeto 'translations' que está definido arriba
  const t = translations[language];

  return { t, language };
};