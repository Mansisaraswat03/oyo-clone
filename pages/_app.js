import ShadcnCustomCard from "@/components/OnboardingCard";
import "@/styles/globals.css";
import { HotelIcon } from "lucide-react";
import { NextStepProvider, NextStep } from "nextstepjs";
const steps = [
  {
    tour: "Login",
    steps: [
      {
        icon: "👋",
        title: "Welcome",
        content: "Login/Register to continue",
        selector: "#step1",
        side: "right",
        showControls: true,
        showSkip: true
      },
      {
        icon: <HotelIcon className="w-8 h-8" />,
        title: "Hotels",
        content: "Choose from 174,000 hotels in Various cities",
        selector: "#step2",
        side: "center",
        showControls: true,
        showSkip: true
      },
      {
        icon: <HotelIcon className="w-8 h-8" />,
        title: "Type your search here",
        content: "Search by city, hotel, or neighbourhood",
        selector: "#step3",
        side: "center",
        showControls: true,
        showSkip: true
      },
      // {
      //   icon: <HotelIcon className="w-8 h-8" />,
      //   title: "Filters",
      //   content: "Filter your search results by price, facilities, and more",
      //   selector: "#step4",
      //   side: "left",
      //   showControls: true,
      //   showSkip: true
      // }
    ]
  }
];
export default function App({ Component, pageProps }) {
  return (
    <NextStepProvider>
      <NextStep steps={steps} cardComponent={ShadcnCustomCard}>
        <Component {...pageProps} />
      </NextStep>
    </NextStepProvider>
  );
}
