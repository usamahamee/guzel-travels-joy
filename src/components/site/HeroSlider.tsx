import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SLIDES = [
  { img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80", caption: "Worldwide Flight Booking" },
  { img: "https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?auto=format&fit=crop&w=1920&q=80", caption: "Premium Umrah Packages" },
  { img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80", caption: "Dubai Adventures" },
  { img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1920&q=80", caption: "Maldives Escapes" },
  { img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80", caption: "Paris Getaways" },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.img}
            alt={s.caption}
            className={`w-full h-full object-cover ${idx === i ? "animate-ken-burns" : ""}`}
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/70 via-[var(--navy)]/40 to-[var(--navy)]/80" />
        </div>
      ))}
      <div className="relative h-full container-wide px-5 flex flex-col items-center justify-center text-center text-white">
        <p className="font-subhead text-xl sm:text-2xl text-[var(--gold)] italic mb-4 animate-fade-up">Welcome to Guzel Travels</p>
        <h1 className="font-hero text-4xl sm:text-6xl lg:text-7xl text-white font-bold mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Restart Your Traveling<br />With Confidence
        </h1>
        <p className="max-w-2xl text-white/85 text-base sm:text-lg mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Flights, visas, Umrah packages and luxury car rentals — handcrafted journeys from Lahore to the world.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <Link to="/flight-booking" className="btn-gold">Book a Flight</Link>
          <Link to="/contact" className="btn-navy bg-white !text-[var(--navy)] hover:!bg-[var(--gold-soft)]">Get a Quote</Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-[var(--gold)]" : "w-4 bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}