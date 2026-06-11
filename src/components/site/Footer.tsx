import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white/85 mt-20">
      <div className="container-wide px-5 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="text-white font-heading text-xl mb-4">Need Help</h4>
          <div className="space-y-3 text-sm">
            <p className="uppercase text-[var(--gold)] tracking-wider text-xs">Call Us</p>
            <a href="tel:+923021400045" className="block hover:text-[var(--gold)] transition">+92 302 1400045</a>
            <p className="uppercase text-[var(--gold)] tracking-wider text-xs pt-2">Email For Us</p>
            <a href="mailto:info@guzeltravels.com" className="block hover:text-[var(--gold)] transition">info@guzeltravels.com</a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-heading text-xl mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[var(--gold)] transition">Home</Link></li>
            <li><Link to="/flight-booking" className="hover:text-[var(--gold)] transition">Flight Booking</Link></li>
            <li><Link to="/visa-consultancy" className="hover:text-[var(--gold)] transition">Visa Consultancy</Link></li>
            <li><Link to="/umrah-packages" className="hover:text-[var(--gold)] transition">Umrah Packages</Link></li>
            <li><Link to="/rent-a-car" className="hover:text-[var(--gold)] transition">Rent A Car</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--gold)] transition">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-heading text-xl mb-4">Office Address</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="uppercase text-[var(--gold)] tracking-wider text-xs mb-1">Branch Office</p>
              <p className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />CCA 08, DD Block DHA Phase 04, Lahore</p>
            </div>
            <div>
              <p className="uppercase text-[var(--gold)] tracking-wider text-xs mb-1">Head Office</p>
              <p className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />Plot No 66, Usman Block, Near LMDC, Canal Bank Lahore</p>
              <p className="flex gap-2 mt-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /><a href="tel:+923021400045" className="hover:text-[var(--gold)]">+92 302 1400045</a></p>
              <p className="flex gap-2 mt-1"><Mail className="w-4 h-4 mt-0.5 shrink-0" /><a href="mailto:info@guzeltravels.com" className="hover:text-[var(--gold)]">info@guzeltravels.com</a></p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-white font-heading text-xl mb-4">Follow Us On</h4>
          <div className="flex gap-3">
            <a href="https://web.facebook.com/Guzeltravels" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[var(--gold)] text-[var(--navy)] grid place-items-center hover:scale-110 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/guzeltravels/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[var(--gold)] text-[var(--navy)] grid place-items-center hover:scale-110 transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 px-5 text-center text-xs text-white/60">
        Copyright © 2026 Guzel Travels. All rights reserved.
      </div>
    </footer>
  );
}