import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Car, Sparkles, BadgePercent } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

const CARS = [
  { 
    name: "Honda Civic", 
    img: "https://images.pexels.com/photos/25637368/pexels-photo-25637368.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  { 
    name: "Toyota Prado", 
    img: "https://images.pexels.com/photos/20363276/pexels-photo-20363276.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  { 
    name: "Land Cruiser", 
    img: "https://images.pexels.com/photos/1683519/pexels-photo-1683519.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  { 
    name: "Audi A6", 
    img: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  { 
    name: "Corolla Altis", 
    img: "https://images.pexels.com/photos/19818792/pexels-photo-19818792.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  { 
    name: "Toyota Yaris", 
    img: "https://images.pexels.com/photos/5733711/pexels-photo-5733711.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
];

export default function RentACar() {
  return (
    <>
      <Helmet>
        <title>Rent a Car in Lahore | Guzel Travels</title>
        <meta name="description" content="Luxury and economical car rentals in Lahore — Honda Civic, Toyota Prado, Land Cruiser, Audi A6, Corolla Altis, Toyota Yaris with skilled drivers." />
        <link rel="canonical" href="https://guzeltravels.com/rent-a-car" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rent a Car in Lahore | Guzel Travels" />
        <meta property="og:description" content="Premium and economical rentals with drivers in Lahore and across Pakistan." />
        <meta property="og:url" content="https://guzeltravels.com/rent-a-car" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rent a Car in Lahore | Guzel Travels" />
        <meta name="twitter:description" content="Premium and economical rentals with drivers in Lahore and across Pakistan." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80" />
      </Helmet>

      <PageHero
        title="Rent a Car in Lahore With Guzel Travels"
        subtitle="Our Fleet"
        image="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="section-pad container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="font-subhead italic text-[var(--gold)] text-lg mb-1">Drive in style</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--navy)] mb-5">Best Car Rental Service in Lahore</h2>
            <p className="leading-relaxed text-foreground/80 mb-4">
              We offer top-notch car rental services for your travels with skilled drivers well-versed in Lahore's routes. Whether it's a business trip, airport transfer or a wedding — Guzel Travels ensures the best experience.
            </p>
            <p className="leading-relaxed text-foreground/80">
              Count on us for competitive rates and high-quality vehicles across Lahore and Pakistan.
            </p>
          </div>
          <div className="space-y-5">
            <div className="flex gap-5 p-6 bg-white rounded-2xl border border-[var(--navy)]/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-white grid place-items-center shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-[var(--navy)] mb-1">Luxury Cars</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Prestigious vehicles like Toyota Prado, BMW, Revo, Land Cruiser and Limousine for short or extended durations.
                </p>
              </div>
            </div>
            <div className="flex gap-5 p-6 bg-white rounded-2xl border border-[var(--navy)]/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-white grid place-items-center shrink-0">
                <BadgePercent className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-[var(--navy)] mb-1">Economical Cars</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Affordable rates without cutting corners on quality — the lowest prices possible without compromising on the car's standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--gold-soft)] section-pad">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-subhead italic text-[var(--gold)] text-lg mb-1">Browse the fleet</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--navy)]">Our Cars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {CARS.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition border border-[var(--navy)]/5">
                <div className="aspect-[5/3] bg-[var(--navy)]/5 overflow-hidden">
                  <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading text-xl text-[var(--navy)] mb-1 flex items-center justify-center gap-2">
                    <Car className="w-5 h-5 text-[var(--gold)]" /> {c.name}
                  </h3>
                  <Link to="/contact" className="btn-gold mt-3 text-xs">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}