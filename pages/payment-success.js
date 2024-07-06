import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
export default function PaymentSuccess() {
  const router = useRouter();
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-green-500">Payment Successful!</h1>
        <button className="flex gap-2 font-bold text-red-500" onClick={() => router.push("/")}>
        <ArrowLeft /> See more Hotels
      </button>
      </div>
    );
  }
  