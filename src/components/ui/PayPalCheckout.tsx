import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← Importamos el hook de navegación

interface Props {
  type: 'onetime' | 'subscription';
  amount?: number; 
  planId?: string; 
  slug: string;    
}

export default function PayPalCheckout({ type, amount, planId, slug }: Props) {
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ← Inicializamos la navegación

  const initialOptions = {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: type === 'subscription' ? "subscription" : "capture",
    vault: type === 'subscription' ? true : false,
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="w-full mt-4 animate-fade-in">
        {type === 'subscription' ? (
          /* --- LÓGICA PARA SUSCRIPCIONES --- */
          <PayPalButtons
            style={{ layout: "vertical", color: "blue", shape: "rect", label: "subscribe", height: 45 }}
            createSubscription={(data, actions) => {
              setError("");
              return actions.subscription.create({
                plan_id: planId!,
                custom_id: slug,
              });
            }}
            onApprove={async (data, actions) => {
              // Pago recurrente exitoso: Redirigimos a la página de gracias
              navigate('/ThankYou');
            }}
            onError={() => setError("Ocurrió un error. Intenta con otra tarjeta.")}
            onCancel={() => setError("Pago cancelado.")}
          />
        ) : (
          /* --- LÓGICA PARA PAGO ÚNICO --- */
          <PayPalButtons
            style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay", height: 45 }}
            createOrder={(data, actions) => {
              setError("");
              return actions.order.create({
                purchase_units: [
                  {
                    amount: { value: amount!.toString() },
                    custom_id: slug, 
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              return actions.order!.capture().then((details) => {
                // Pago único exitoso: Redirigimos a la página de gracias
                navigate('/ThankYou');
              });
            }}
            onError={() => setError("Ocurrió un error. Intenta con otra tarjeta.")}
            onCancel={() => setError("Pago cancelado.")}
          />
        )}

        {error && (
          <p className="mt-3 text-red-400 text-xs text-center px-2">{error}</p>
        )}
      </div>
    </PayPalScriptProvider>
  );
}