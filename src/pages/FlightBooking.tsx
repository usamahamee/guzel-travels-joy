import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Plane, Globe, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

const DOMESTIC = ["PIA", "Air Sial", "Serene Air", "Air Blue"];
const INTL = ["Emirates", "Qatar Airways", "Turkish Airlines", "Etihad", "Saudia", "Gulf Air"];

export default function FlightBooking() {
  return (
    <>
      <Helmet>
        <title>Cheap Flight Booking in Pakistan | Guzel Travels</title>
        <meta name="description" content="Book cheap domestic and international flights from Pakistan with Guzel Travels. Best fares on PIA, Air Sial, Serene Air, Emirates, Qatar and more." />
        <link rel="canonical" href="https://guzeltravels.com/flight-booking" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cheap Flights with Guzel Travels" />
        <meta property="og:description" content="Hassle-free flight booking with the best fares in Pakistan." />
        <meta property="og:url" content="https://guzeltravels.com/flight-booking" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cheap Flights with Guzel Travels" />
        <meta name="twitter:description" content="Hassle-free flight booking with the best fares in Pakistan." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80" />
      </Helmet>

      <PageHero
        title="Cheap Flights with Guzel Travels"
        subtitle="Flight Booking"
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="section-pad container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-subhead italic text-[var(--gold)] text-lg mb-1">Why choose us</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--navy)] mb-5">Skip the queue, fly for less</h2>
            <p className="leading-relaxed text-foreground/80 mb-4">
              Tired of waiting in long queues at booking counters? Guzel Travels is your one-stop online e-ticketing platform offering cost-effective options for both domestic and international travel.
            </p>
            <p className="leading-relaxed text-foreground/80">
              With virtual presence across major Pakistani cities, we stand out by providing budget-friendly flight options on every airline you trust — and a few you'll be glad to discover.
            </p>
            <Link to="/contact" className="btn-gold mt-7">Book Now</Link>
          </div>
          <div className="space-y-5">
            <div className="flex gap-5 p-6 bg-white rounded-2xl border border-[var(--navy)]/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-white grid place-items-center shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-[var(--navy)] mb-1">International Flights</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Wherever you need to go, we'll get you there in style. Search a wide range of airlines and destinations.
                </p>
              </div>
            </div>
            <div className="flex gap-5 p-6 bg-white rounded-2xl border border-[var(--navy)]/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-white grid place-items-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-[var(--navy)] mb-1">Domestic Flights</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Best prices on one-way or return flights across Pakistan — Karachi, Islamabad, Lahore, Peshawar, Quetta and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--gold-soft)] section-pad">
        <div className="container-wide">
          <h2 className="font-heading text-center text-3xl sm:text-4xl text-[var(--navy)] mb-10">Top Domestic Airlines</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {DOMESTIC.map((a) => (
              <div key={a} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                <Plane className="w-10 h-10 text-[var(--gold)] mx-auto mb-3" />
                <p className="font-heading text-lg text-[var(--navy)] mb-3">{a}</p>
                <Link to="/contact" className="btn-gold text-xs">Book Now</Link>
              </div>
            ))}
          </div>
          <h2 className="font-heading text-center text-3xl sm:text-4xl text-[var(--navy)] mt-16 mb-10">Top International Airlines</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {INTL.map((a) => (
              <div key={a} className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                <Globe className="w-8 h-8 text-[var(--gold)] mx-auto mb-2" />
                <p className="font-heading text-sm text-[var(--navy)]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}