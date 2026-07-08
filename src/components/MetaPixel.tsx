import { useEffect } from 'react';

interface MetaPixelProps {
  pixelId?: string; // Opcional, agregar cuando lo tengas
}

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const MetaPixel = ({ pixelId }: MetaPixelProps) => {
  useEffect(() => {
    // Si no hay pixelId, no hacer nada (por ahora)
    if (!pixelId) {
      console.log('Meta Pixel: No pixel ID provided yet');
      return;
    }

    // Inicializar Meta Pixel
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    // Inicializar pixel
    window.fbq('init', pixelId);
    
    // Track PageView
    window.fbq('track', 'PageView');

    console.log(`Meta Pixel initialized: ${pixelId}`);
  }, [pixelId]);

  return null;
};

// Funciones helper para trackear eventos
export const trackEvent = (eventName: string, params?: object) => {
  if (window.fbq) {
    window.fbq('track', eventName, params);
    console.log(`Meta Pixel event: ${eventName}`, params);
  }
};

export const trackViewContent = (contentName: string, value?: number) => {
  trackEvent('ViewContent', {
    content_name: contentName,
    value: value || 49.99,
    currency: 'USD'
  });
};

export const trackInitiateCheckout = () => {
  trackEvent('InitiateCheckout', {
    value: 49.99,
    currency: 'USD',
    content_name: 'Sales Page Professional'
  });
};

export const trackPurchase = (value: number = 49.99) => {
  trackEvent('Purchase', {
    value: value,
    currency: 'USD',
    content_name: 'Sales Page Professional'
  });
};

export default MetaPixel;