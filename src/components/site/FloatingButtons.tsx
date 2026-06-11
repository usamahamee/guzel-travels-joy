import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col gap-3">
      <a
        href="tel:+923021400045"
        aria-label="Call Us"
        className="group relative w-14 h-14 rounded-full bg-[var(--navy)] text-white grid place-items-center shadow-xl hover:scale-110 transition"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[var(--navy)] text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Call Us
        </span>
      </a>
      <a
        href="https://wa.me/923021400045"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-xl pulse-ring hover:scale-110 transition"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#25D366] text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}