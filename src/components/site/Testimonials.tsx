import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ayesha Khan",
    role: "Umrah Pilgrim, Lahore",
    quote:
      "Guzel Travels arranged our Umrah perfectly — visa, hotels in Makkah, and VIP transport were seamless. Truly a stress-free spiritual journey.",
  },
  {
    name: "Bilal Ahmed",
    role: "Frequent Flyer",
    quote:
      "I've booked dozens of flights through Guzel. They consistently find the best fares and the team responds on WhatsApp within minutes.",
  },
  {
    name: "Fatima Riaz",
    role: "UK Visa Applicant",
    quote:
      "Their visa consultancy team guided me at every step. My UK visit visa was approved on the first try — highly recommended!",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad container-wide">
      <div className="text-center mb-14">
        <p className="font-subhead italic text-[var(--gold)] text-xl mb-2">Kind words from travellers</p>
        <h2 className="font-heading text-4xl sm:text-5xl text-[var(--navy)]">What Our Clients Say</h2>
        <div className="mt-4 mx-auto w-20 h-1 bg-[var(--gold)] rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={t.name}
            className="relative bg-white rounded-2xl p-8 border border-[var(--navy)]/10 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 animate-fade-up"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <Quote className="absolute -top-4 left-6 w-10 h-10 text-[var(--gold)] bg-white rounded-full p-2 shadow" />
            <div className="flex gap-0.5 mb-4 text-[var(--gold)]">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-foreground/80 italic font-subhead text-lg leading-relaxed mb-6">
              "{t.quote}"
            </blockquote>
            <figcaption>
              <p className="font-heading text-lg text-[var(--navy)]">{t.name}</p>
              <p className="text-xs uppercase tracking-wider text-[var(--gold)]">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}