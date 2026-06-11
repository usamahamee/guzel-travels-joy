import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Sparkles, BadgePercent } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/rent-a-car")({
  head: () => ({
    meta: [
      { title: "Rent a Car in Lahore | Guzel Travels" },
      { name: "description", content: "Luxury and economical car rentals in Lahore — Honda Civic, Toyota Prado, Land Cruiser, Audi A6, Corolla Altis, Toyota Yaris with skilled drivers." },
      { property: "og:title", content: "Rent a Car in Lahore | Guzel Travels" },
      { property: "og:description", content: "Premium and economical rentals with drivers in Lahore and across Pakistan." },
      { property: "og:url", content: "/rent-a-car" },
    ],
    links: [{ rel: "canonical", href: "/rent-a-car" }],
  }),
  component: Page,
});

const CARS = [
  { name: "Honda Civic", img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80" },
  { name: "Toyota Prado", img: "https://images.unsplash.com/photo-1606664911253-fa92e7e6c69e?auto=format&fit=crop&w=800&q=80" },
  { name: "Land Cruiser", img: "https://images.unsplash.com/photo-1519440232540-ca15a0c89aaa?auto=format&fit=crop&w=800&q=80" },
  { name: "Audi A6", img: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=800&q=80" },
  { name: "Corolla Altis", img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80" },
  { name: "Toyota Yaris", img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80" },
];

function Page() {
  return (
    <>
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
              Our service includes access to the finest food options in Lahore and across Pakistan. Count on us for competitive rates and high-quality vehicles.
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