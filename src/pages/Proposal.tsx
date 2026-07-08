import { useSearchParams } from "react-router-dom";

const Proposal = () => {
  const [searchParams] = useSearchParams();
  
  const name = searchParams.get("name") || "Your Business";
  const slug = searchParams.get("slug") || "";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center mb-4">
        Congratulations, {name}! Your website is ready to be handed over.
      </h1>
      <p className="text-gray-500">
        (Detected slug for PayPal: {slug})
      </p>
    </div>
  );
};

export default Proposal;