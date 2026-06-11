import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Guzel Travels — Lahore Travel Agency" },
      { name: "description", content: "Call +92 302 1400045 or email info@guzeltravels.com. Branch & head office in DHA and Canal Bank, Lahore." },
      { property: "og:title", content: "Contact Guzel Travels" },
      { property: "og:description", content: "Get in touch with our team in Lahore." },
      { property: "og:url", content: "https://guzeltravels.com/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Contact Guzel Travels" },
      { name: "twitter:description", content: "Get in touch with our team in Lahore." },
    ],
    links: [{ rel: "canonical", href: "https://guzeltravels.com/contact" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="section-pad container-wide">
        <div className="text-center mb-12">
          <p className="font-subhead italic text-[var(--gold)] text-lg mb-1">Our Branches</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-[var(--navy)]">Contact Details</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Branch Office", addr: "CCA 08, DD Block DHA Phase 04, Lahore" },
            { title: "Head Office", addr: "Plot No 66, Usman Block, Near LMDC, Canal Bank Lahore" },
          ].map((o) => (
            <div key={o.title} className="bg-white rounded-2xl p-7 border border-[var(--navy)]/10 shadow-sm">
              <h3 className="font-heading text-2xl text-[var(--navy)] mb-5">{o.title}</h3>
              <div className="space-y-3 text-foreground/80">
                <p className="flex gap-3"><MapPin className="w-5 h-5 text-[var(--gold)] mt-0.5 shrink-0" />{o.addr}</p>
                <p className="flex gap-3"><Phone className="w-5 h-5 text-[var(--gold)] mt-0.5 shrink-0" /><a href="tel:+923021400045" className="hover:text-[var(--gold)]">+92 302 1400045</a></p>
                <p className="flex gap-3"><Mail className="w-5 h-5 text-[var(--gold)] mt-0.5 shrink-0" /><a href="mailto:info@guzeltravels.com" className="hover:text-[var(--gold)]">info@guzeltravels.com</a></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--gold-soft)] section-pad">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[var(--gold)] rounded-3xl p-8 sm:p-10 shadow-xl">
            <p className="font-subhead italic text-[var(--navy)] text-lg mb-1">Send a message</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--navy)] mb-6">Request a Quote</h2>
            <QuoteForm />
          </div>
          <div>
            <p className="font-subhead italic text-[var(--gold)] text-lg mb-1">Need to know</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--navy)] mb-6">Frequently Asked Questions</h2>
            <FAQ />
          </div>
        </div>
      </section>
    </>
  );
}