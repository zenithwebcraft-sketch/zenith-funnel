import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

interface Props {
  type: 'onetime' | 'subscription';
  amount?: number; // Solo se usará para el plan Plain
  planId?: string; // Solo se usará para Presencia, Web+Citas y Crecimiento
  slug: string;    // El ID del negocio que nos llega por la URL
}

export default function PayPalCheckout({ type, amount, planId, slug }: Props) {
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Configuración dinámica del SDK según el tipo de plan
  const initialOptions = {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: type === 'subscription' ? "subscription" : "capture",
    vault: type === 'subscription' ? true : false,
  };

  if (isSuccess) {
    return (
      <div className="bg-[#1C1C24] border border-indigo-500/50 text-indigo-400 p-4 rounded-lg text-center animate-fade-in w-full mt-4">
        <h4 className="font-bold mb-1">¡Pago Procesado!</h4>
        <p className="text-xs text-gray-400">Un ingeniero técnico se pondrá en contacto contigo.</p>
      </div>
    );
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="w-full mt-4 animate-fade-in">
        {type === 'subscription' ? (
          /* --- LÓGICA PARA SUSCRIPCIONES (Tier 1, 2 y 3) --- */
          <PayPalButtons
            style={{ layout: "vertical", color: "blue", shape: "rect", label: "subscribe", height: 45 }}
            createSubscription={(data, actions) => {
              setError("");
              return actions.subscription.create({
                plan_id: planId!,
                custom_id: slug, // AQUÍ inyectamos el rastro para n8n
              });
            }}
            onApprove={async (data, actions) => {
              // El setup fee y la suscripción fueron aprobados
              setIsSuccess(true);
            }}
            onError={() => setError("Ocurrió un error. Intenta con otra tarjeta.")}
            onCancel={() => setError("Pago cancelado.")}
          />
        ) : (
          /* --- LÓGICA PARA PAGO ÚNICO (Plan Plain) --- */
          <PayPalButtons
            style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay", height: 45 }}
            createOrder={(data, actions) => {
              setError("");
              return actions.order.create({
                purchase_units: [
                  {
                    amount: { value: amount!.toString() },
                    custom_id: slug, // AQUÍ inyectamos el rastro para n8n
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              return actions.order!.capture().then((details) => {
                setIsSuccess(true);
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