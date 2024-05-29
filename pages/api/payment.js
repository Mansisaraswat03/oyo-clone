import connectDB from "@/db";
import hotelModel from "@/model/hotel-model";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  await connectDB();

  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ message: "Hotel ID is required" });
    }

    const hotel = await hotelModel.findById(id);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    const amount = hotel.price * 100; // Stripe amount in cents
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "INR",
      metadata: { integration_check: 'accept_a_payment' },
    });

    return res.status(201).json({
      clientSecret: paymentIntent.client_secret,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
}
