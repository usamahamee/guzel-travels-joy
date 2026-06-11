import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import Home from "@/pages/Home";
import FlightBooking from "@/pages/FlightBooking";
import VisaConsultancy from "@/pages/VisaConsultancy";
import UmrahPackages from "@/pages/UmrahPackages";
import RentACar from "@/pages/RentACar";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/visa-consultancy" element={<VisaConsultancy />} />
          <Route path="/umrah-packages" element={<UmrahPackages />} />
          <Route path="/rent-a-car" element={<RentACar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}