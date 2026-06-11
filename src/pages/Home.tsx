import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Plane, FileCheck2, MapPin, Car, ArrowRight } from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { QuoteForm } from "@/components/site/QuoteForm";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";

const SERVICES = [
  { to: "/flight-booking", icon: Plane, title: "Flight Booking", desc: "Real-time flight & travel professionals. Best fares, complimentary upgrades, seat selection." },
  { to: "/visa-consultancy", icon: FileCheck2, title: "Visa Consultancy", desc: "Expert consultants for UK, EU, Australia, New Zealand, Canada, USA, Turkey visas." },
  { to: "/umrah-packages", icon: MapPin, title: "Umrah Packages", desc: "Fastest visa processing, comfortable hotels in Makkah & Madinah, VIP transport." },
  { to: "/rent-a-car", icon: Car, title: "Rent a Car", desc: "Luxury & economical cars with skilled drivers across Lahore and Pakistan." },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Guzel Travels — Flights, Visas, Umrah & Car Rentals in Lahore</title>
        <meta name="description" content="Book cheap flights, apply for visas, plan your Umrah journey and rent luxury cars in Lahore with Guzel Travels. 5+ years of trusted service." />
        <link rel="canonical" href="https://guzeltravels.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Guzel Travels — Your Trusted Travel Partner" />
        <meta property="og:description" content="Flights, visas, Umrah packages and rentals from Lahore, Pakistan." />
        <meta property="og:url" content="https://guzeltravels.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guzel Travels — Your Trusted Travel Partner" />
        <meta name="twitter:description" content="Flights, visas, Umrah packages and rentals from Lahore, Pakistan." />
      </Helmet>

      <HeroSlider />

      <section className="bg-[var(--navy)] text-white">
        <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          <div className="bg-[var(--gold)] text-[var(--navy)] px-8 py-12">
            <p className="font-subhead italic text-lg mb-2">Build Your Dream</p>
            <h3 className="font-heading text-3xl sm:text-4xl text-[var(--navy)] font-bold leading-tight">5 Years Of Undefeated Success</h3>
          </div>
          <div className="px-8 py-12 bg-[var(--navy)]">
            <p className="font-hero text-5xl text-[var(--gold)] mb-2">500+</p>
            <p className="text-white/80 uppercase tracking-wider text-sm">Successful Trips Delivered</p>
          </div>
          <div className="px-8 py-12 bg-[var(--navy-dark)]">
            <p className="font-hero text-5xl text-[var(--gold)] mb-2">5+</p>
            <p className="text-white/80 uppercase tracking-wider text-sm">Years of Experience</p>
          </div>
        </div>
      </section>

      <section className="section-pad container-wide">
        <div className="text-center mb-14">
          <p className="font-subhead italic text-[var(--gold)] text-xl mb-2">What we offer</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-[var(--navy)]">Our Services</h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-[var(--gold)] rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ to, icon: Icon, title, desc }) => (
            <Link
              key={to}
              to={to}
              className="group bg-white rounded-2xl p-7 border border-[var(--navy)]/10 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--gold-soft)] text-[var(--gold)] grid place-items-center mb-5 group-hover:bg-[var(--gold)] group-hover:text-white transition">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl text-[var(--navy)] mb-2">{title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">{desc}</p>
              <span className="text-[var(--gold)] text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[var(--gold-soft)] section-pad">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[var(--gold)] rounded-3xl p-8 sm:p-10 shadow-xl">
            <p className="font-subhead italic text-[var(--navy)] text-lg mb-1">Talk to us</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--navy)] mb-6">Request a Quote</h2>
            <QuoteForm />
          </div>
          <div>
            <p className="font-subhead italic text-[var(--gold)] text-lg mb-1">Learn More From</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--navy)] mb-6">Frequently Asked Questions</h2>
            <FAQ />
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}