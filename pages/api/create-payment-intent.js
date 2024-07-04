import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount } = req.body;

    try {
      const amountInPaise = amount * 100; // Convert to paise

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInPaise,
        currency: 'inr',
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
