import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function Checkout({ hotels }) {
const amount =(hotels?.price/83.47).toFixed(2);
  if (!hotels) return <div>Loading...</div>;
const router = useRouter();
const onApprove = (data) => {
  console.log(data);
}

  return (
    <div className="py-2 bg-gray-100 flex flex-col justify-center items-center">
      <button className="flex gap-2 text-red-500" onClick={() => router.back()}>
        <ArrowLeft /> Modify your Booking
      </button>
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <Image
          src={hotels?.banner}
          height={200}
          width={200}
          alt="hotel"
          className="w-full"
        />
        <h1 className="text-2xl font-bold mb-4">{hotels?.name}</h1>
        <p className="text-gray-700 mb-4">{hotels?.description}</p>
        <p className="text-gray-700 mb-4">Price: &#8377;{hotels?.price}</p>
        
        <PayPalScriptProvider
          options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
        >
          <PayPalButtons
            style={{ layout: "horizontal" ,label: "pay",color: "blue",}}
            onApprove={onApprove}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount,
                      currency_code: "USD",
                    },
                  },
                ],
              });
            }}  
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}
