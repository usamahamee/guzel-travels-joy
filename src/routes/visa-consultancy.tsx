import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Globe2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/visa-consultancy")({
  head: () => ({
    meta: [
      { title: "Visa Consultancy in Lahore — UK, USA, Canada, Australia | Guzel Travels" },
      { name: "description", content: "Trusted visa consultants in Lahore for UK, EU, Australia, New Zealand, Canada, USA and Turkey. Visit visa, immigration and documentation support." },
      { property: "og:title", content: "Visa Consultancy | Guzel Travels" },
      { property: "og:description", content: "Professional visa & immigration consultants in Pakistan." },
      { property: "og:url", content: "/visa-consultancy" },
    ],
    links: [{ rel: "canonical", href: "/visa-consultancy" }],
  }),
  component: Page,
});

const COUNTRIES = ["United Kingdom", "European Union", "Australia", "New Zealand", "Canada", "USA", "Turkey", "Schengen"];

function Page() {
  return (
    <>
      <PageHero
        title="Visa Consultancy"
        subtitle="What we offer"
        image="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="section-pad container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="font-subhead italic text-[var(--gold)] text-lg mb-1">Trusted immigration consultants</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--navy)] mb-5">What We Offer?</h2>
            <p className="leading-relaxed text-foreground/80 mb-4">
              Guzel Travels, your trusted immigration consultants in Lahore, Pakistan, extend professional guidance to individuals, students and families. Our comprehensive services encompass visas for tourism, study and employment permits.
            </p>
            <p className="leading-relaxed text-foreground/80">
              With headquarters in Lahore, we maintain strong connections in the UK and European Union. Our proficient consultant team helps you compile documents and facilitates a seamless visa application process — resulting in speedy approvals.
            </p>
            <Link to="/contact" className="btn-gold mt-7">Book an Appointment</Link>
          </div>
          <div className="space-y-5">
            <div className="flex gap-5 p-6 bg-white rounded-2xl border border-[var(--navy)]/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-white grid place-items-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-[var(--navy)] mb-1">Visit Visa Services</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Professional visitor visa services including free assessment, paperwork, interview preparation, documentation drafting, travel insurance, hotel bookings and ticket reservations.
                </p>
              </div>
            </div>
            <div className="flex gap-5 p-6 bg-white rounded-2xl border border-[var(--navy)]/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-white grid place-items-center shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-[var(--navy)] mb-1">Immigration</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  One of the most reliable immigration consultancies in Pakistan, specialised in Australian, New Zealand, Canadian, USA, European and Turkish immigration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--gold-soft)] section-pad">
        <div className="container-wide text-center">
          <p className="font-subhead italic text-[var(--gold)] text-lg mb-1">Where we send you</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-[var(--navy)] mb-10">Countries We Cover</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {COUNTRIES.map((c) => (
              <div key={c} className="bg-white rounded-xl py-6 px-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition border border-[var(--navy)]/10">
                <Globe2 className="w-7 h-7 text-[var(--gold)] mx-auto mb-2" />
                <p className="font-heading text-[var(--navy)]">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}