import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How do I travel between Jeddah, Mecca and Madina in Umrah Package?",
    a: "We offer customized Umrah packages with carefully chosen airline carriers, hotels close to Masjid al-Haram and Masjid an-Nabawi, and VIP private transport between Jeddah, Makkah and Madinah.",
  },
  {
    q: "Can I cancel the booking and get refund if I am unable to travel?",
    a: "Yes — refund eligibility depends on the airline / hotel cancellation policy of your package. Our team will walk you through the terms before you confirm so there are no surprises.",
  },
  {
    q: "How do I know my booking is confirmed?",
    a: "Once payment is received, you'll get an email and WhatsApp confirmation with your itinerary, e-tickets, hotel vouchers and our 24/7 support contact.",
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQS.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-b border-[var(--navy)]/15">
          <AccordionTrigger className="text-left font-heading text-base sm:text-lg text-[var(--navy)] hover:text-[var(--gold)] hover:no-underline py-5">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-[var(--foreground)]/80 leading-relaxed">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}