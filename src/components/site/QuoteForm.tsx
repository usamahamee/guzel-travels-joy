import { useState } from "react";

const ACCESS_KEY = "faca17cf-949a-49fc-a9d9-f47bed6f957c";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        setMsg("Thank you! We've received your inquiry and will contact you shortly.");
        form.reset();
      } else {
        setStatus("err");
        setMsg(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("err");
      setMsg("Network error. Please try again or call us directly.");
    }
  }

  const inputCls =
    "w-full px-4 py-3 rounded-lg border border-[var(--navy)]/15 bg-white text-[var(--navy)] focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/30 transition text-sm";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="subject" value="New Inquiry - Guzel Travels" />
      <input type="hidden" name="from_name" value="Guzel Travels Website" />
      <input
        type="hidden"
        name="autoresponse"
        value="Thank you for contacting Guzel Travels! We have received your inquiry and our team will contact you shortly. For urgent queries, call us at +92 302 1400045 or message us on WhatsApp."
      />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-[var(--navy)]">Name</label>
          <input required name="name" placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-[var(--navy)]">Email</label>
          <input required type="email" name="email" placeholder="you@example.com" className={inputCls} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-[var(--navy)]">Phone</label>
        <input required name="phone" placeholder="+92 ___ _______" className={inputCls} />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-[var(--navy)]">Service</label>
        <select name="service" required className={inputCls} defaultValue="">
          <option value="" disabled>Choose a service</option>
          <option>Flight Booking</option>
          <option>Visa Processing</option>
          <option>Umrah Package</option>
          <option>Rent a Car</option>
          <option>General Inquiry</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-[var(--navy)]">Message</label>
        <textarea required name="message" rows={4} placeholder="Tell us about your trip…" className={inputCls} />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-navy w-full disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send Inquiry"}
      </button>

      {status === "ok" && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">{msg}</p>
      )}
      {status === "err" && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{msg}</p>
      )}
    </form>
  );
}