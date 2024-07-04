import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import axios from 'axios';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export default function Checkout({hotels}) {
    const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/api/create-payment-intent', {
        amount: hotels?.price * 100, 
      });

      const stripe = await stripePromise;
      const { clientSecret } = res.data;

      const { error } = await stripe.redirectToCheckout({
       lineItems: [{
          price_data: {
            currency: 'inr',
            product_data: {
              name: hotels?.name,
            },
            unit_amount: hotels?.price * 100,
          },
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: `${window.location.origin}/payment-success`,
        cancelUrl: `${window.location.origin}/payment-failure`,
      });

      if (error) {
        console.error('Error:', error);
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };
  if (!hotels) return <div>Loading...</div>;
 const router = useRouter();
  return (
    <div className="pt-2 bg-gray-100 flex flex-col justify-center items-center">
    <button className='flex gap-2 text-red-500' onClick={() => router.back()}><ArrowLeft/> Modify your Booking</button>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <Image src={hotels?.banner} height={200} width={200} alt="hotel" className='w-full' />
        <h1 className="text-2xl font-bold mb-4">{hotels?.name}</h1>
        <p className="text-gray-700 mb-4">{hotels?.description}</p>
        <p className="text-gray-700 mb-4">Price: &#8377;{hotels?.price}</p>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
}


