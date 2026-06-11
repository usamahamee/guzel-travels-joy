import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  { to: "/flight-booking", label: "Flight Booking" },
  { to: "/visa-consultancy", label: "Visa Consultancy" },
  { to: "/umrah-packages", label: "Umrah Packages" },
  { to: "/rent-a-car", label: "Rent a Car" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 shadow-sm">
      <div className="bg-[var(--navy-dark)] text-[var(--gold)] text-xs sm:text-sm py-2 px-4 text-center font-body">
        <a href="tel:+923021400045" className="hover:text-white transition tracking-wider">
          <Phone className="inline w-3.5 h-3.5 mr-2 -mt-0.5" />
          Make a call: <span className="font-semibold">+92 302 1400045</span>
        </a>
      </div>
      <nav className="bg-[var(--navy)] text-white">
        <div className="container-wide flex items-center justify-between px-5 py-4">
          <Link to="/" className="font-hero text-2xl sm:text-3xl font-bold text-[var(--gold)] tracking-widest">
            GUZEL <span className="text-white">TRAVELS</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-9 text-sm uppercase tracking-wider font-medium">
            <li>
              <NavLink to="/" end className={({ isActive }) => `hover:text-[var(--gold)] transition ${isActive ? "text-[var(--gold)]" : ""}`}>Home</NavLink>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-[var(--gold)] transition">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <div className="bg-white text-[var(--navy)] rounded-xl shadow-2xl py-2 min-w-[220px] border border-[var(--gold)]/20">
                  {services.map((s) => (
                    <Link key={s.to} to={s.to} className="block px-5 py-2.5 hover:bg-[var(--gold-soft)] hover:text-[var(--gold)] transition normal-case tracking-normal text-sm">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `hover:text-[var(--gold)] transition ${isActive ? "text-[var(--gold)]" : ""}`}>Contact Us</NavLink>
            </li>
          </ul>

          <button onClick={() => setOpen((v) => !v)} className="lg:hidden text-white" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-[var(--navy-dark)] border-t border-white/10 px-5 py-4 space-y-1">
            <Link to="/" onClick={() => setOpen(false)} className="block py-2 hover:text-[var(--gold)]">Home</Link>
            <button onClick={() => setSvcOpen((v) => !v)} className="flex items-center justify-between w-full py-2 hover:text-[var(--gold)]">
              Services <ChevronDown className={`w-4 h-4 transition ${svcOpen ? "rotate-180" : ""}`} />
            </button>
            {svcOpen && (
              <div className="pl-4 space-y-1 border-l border-[var(--gold)]/30">
                {services.map((s) => (
                  <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="block py-1.5 text-sm hover:text-[var(--gold)]">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/contact" onClick={() => setOpen(false)} className="block py-2 hover:text-[var(--gold)]">Contact Us</Link>
          </div>
        )}
      </nav>
    </header>
  );
}