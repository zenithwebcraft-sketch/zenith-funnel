/**
 * Función para hacer scroll suave a la sección del checkout
 * Se usa en los botones CTA de tu landing
 */
export const scrollToCheckout = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }

  const checkoutSection = document.getElementById('checkout-section');
  
  if (checkoutSection) {
    // Scroll suave con offset para mejor UX
    const offset = 80; // Espacio desde el top
    const elementPosition = checkoutSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Opcional: Agregar un pequeño efecto de "highlight"
    checkoutSection.style.animation = 'pulse 0.5s ease-in-out';
    setTimeout(() => {
      checkoutSection.style.animation = '';
    }, 500);
  }
};

/**
 * Hook de React para el botón de scroll
 */
export const useScrollToCheckout = () => {
  return scrollToCheckout;
};