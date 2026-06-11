import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, FileCheck2, Bus, Building2, Plane } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/umrah-packages")({
  head: () => ({
    meta: [
      { title: "Umrah Packages from Pakistan | Guzel Travels" },
      { name: "description", content: "Affordable Umrah packages from Lahore with fastest visa processing, comfortable hotels in Makkah & Madinah, VIP transport and air tickets." },
      { property: "og:title", content: "Umrah Packages | Guzel Travels" },
      { property: "og:description", content: "Spiritual Umrah journeys crafted with care — from Pakistan to Makkah & Madinah." },
      { property: "og:url", content: "/umrah-packages" },
    ],
    links: [{ rel: "canonical", href: "/umrah-packages" }],
  }),
  component: Page,
});

const HIGHLIGHTS = [
  "Fastest Umrah visa processing",
  "Greater services at the lowest cost",
  "Comfortable hotels in Economy & Star",
  "Best customer support during your journey",
  "Most of all — no false commitments",
];
const INCLUDES = [
  { icon: FileCheck2, t: "Umrah Visa", d: "Umrah visa processing with travel insurance." },
  { icon: Bus, t: "Transport", d: "Transfer between Madina, Makkah & Jeddah on VIP luxury buses." },
  { icon: Building2, t: "Accommodation", d: "Hotel accommodation close to Haram in Makkah and Madinah." },
  { icon: Plane, t: "Air Ticket", d: "Round-trip air tickets from Pakistan included." },
];

function Page() {
  return (
    <>
      <PageHero
        title="Umrah Packages"
        subtitle="Restart Your Spiritual Journey"
        image="https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="section-pad container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="font-subhead italic text-[var(--gold)] text-lg mb-1">Welcome</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--navy)] mb-5">Umrah Package</h2>
            <p className="leading-relaxed text-foreground/80 mb-6">
              Welcome to our exclusive Umrah package from Pakistan, where we offer a transformative and deeply spiritual pilgrimage experience to the blessed cities of Makkah and Madinah. Embark on a journey of a lifetime as you fulfill your spiritual obligations.
            </p>
            <ul className="space-y-3 mb-6">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex gap-3 text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-[var(--gold)] mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed text-foreground/80 italic">
              Customize your Umrah package in Economy or Star — share your dates, duration and choice of stay and we'll give you the best price.
            </p>
          </div>
          <div className="bg-[var(--navy)] text-white rounded-3xl p-8 sm:p-10 shadow-xl">
            <h3 className="font-heading text-3xl text-white mb-8">Package Includes</h3>
            <div className="space-y-5">
              {INCLUDES.map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-[var(--navy)] grid place-items-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-[var(--gold)] mb-0.5">{t}</h4>
                    <p className="text-sm text-white/75">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-gold mt-8 w-full">Book Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}