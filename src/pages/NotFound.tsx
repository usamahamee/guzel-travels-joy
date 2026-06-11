import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Guzel Travels</title>
        <meta name="description" content="The page you're looking for doesn't exist. Head back home or contact Guzel Travels." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div
        className="relative flex min-h-[80vh] items-center justify-center px-4 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 60%, #2a4080 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0, transparent 35%)",
          }}
        />
        <div className="relative max-w-xl animate-fade-up">
          <p className="font-subhead italic text-[var(--gold)] text-2xl mb-2">Lost in transit?</p>
          <h1 className="font-hero text-[clamp(5rem,18vw,10rem)] leading-none text-[var(--gold)] drop-shadow-lg">
            404
          </h1>
          <h2 className="font-heading text-3xl sm:text-4xl text-white mt-4">
            This destination isn't on our map
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            The page you're looking for may have taken off without you. Let's get you back on the right route.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-gold">Back to Home</Link>
            <Link
              to="/contact"
              className="btn-navy"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}