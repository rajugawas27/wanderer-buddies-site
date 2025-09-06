import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mountain,
  MapPin,
  Phone,
  Calendar,
  BusFront,
  ArrowRight,
  Mail,
  CheckCircle2,
  Instagram,
  MessageCircle,
  Youtube
} from "lucide-react";

// ================================
// Wanderer Buddies – One-Page Site
// Tech: React + Tailwind + Framer Motion + Lucide icons
// Notes:
// - Replace placeholder images/logos with your own.
// - All CTA buttons link to WhatsApp using your number.
// - Edit the PACKAGES array to add more trips.
// ================================

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "destinations", label: "Destinations" },
  { id: "packages", label: "Packages" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const DESTINATIONS = [
  {
    title: "North Sikkim Highlights",
    bullets: ["Lachen", "Lachung", "Gurudongmar Lake", "Yumthang Valley", "Zero Point*"],
    image: "https://images.unsplash.com/photo-1558981033-0f30b98c9695?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Gangtok City & Monasteries",
    bullets: ["MG Marg", "Tashi View Point", "Rumtek Monastery"],
    image: "https://images.unsplash.com/photo-1589308078059-44ba8b20e37?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Himalayan Road Journeys",
    bullets: ["Scenic Drives", "Snow Vistas", "Tea & Momos"],
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
  },
];

const PACKAGES = [
  {
    id: "north-sikkim",
    title: "North Sikkim 6N/7D (From Kolkata)",
    price: will update soon, contact us,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1519682660582-77159d3d6ec1?q=80&w=1600&auto=format&fit=crop",
    includes: [
      "Kolkata ↔ NJP 3AC (Train)",
      "NJP → Gangtok → North Sikkim by sharing car",
      "6 Nights Stay (Gangtok/Lachen/Lachung)",
      "Meals (Simple Veg/Non-Veg)",
      "Permits & Driver Allowance",
    ],
    itinerary: [
      "Day 1: Kolkata → NJP (Train 3AC) → Gangtok stay",
      "Day 2: Gangtok → Lachen",
      "Day 3: Lachen → Gurudongmar Lake → Lachung",
      "Day 4: Yumthang Valley & Zero Point → Lachung",
      "Day 5: Lachung → Gangtok",
      "Day 6: Gangtok → NJP (Train) → Kolkata",
      "Day 7: Arrive Kolkata",
    ],
    note: "*Visits to Gurudongmar, Yumthang & Zero Point depend on weather/permits for safety.",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520975711890-4e0b0b06ecbe?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519681397810-79a0a83f06cf?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=1200&auto=format&fit=crop",
];

const INSTAGRAM_LINK = "https://www.instagram.com/wanderer_buddies_/";
const YOUTUBE_LINK = "https://youtube.com/@wandererbuddies";
const PHONE_NUMBER = "7439696626";
const EMAIL_ADDRESS = "wandererbuddies1@gmail.com";

const Badge = ({ children }) => (
  <span className="rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold border border-emerald-200">
    {children}
  </span>
);

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b">
      <Container>
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-sky-600 text-white shadow">WB</div>
            <div>
              <p className="font-extrabold leading-tight">Wanderer Buddies</p>
              <p className="text-xs text-slate-500 -mt-0.5">Explore Beyond the Limit</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((n) => <a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-slate-700 hover:text-sky-700">{n.label}</a>)}
            <a href={`https://wa.me/91${PHONE_NUMBER}`} className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white px-4 py-2 text-sm shadow hover:bg-sky-700"><Phone size={16} /> WhatsApp</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-slate-100">☰</button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {NAV.map((n) => <a key={n.id} href={`#${n.id}`} className="px-2 py-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(false)}>{n.label}</a>)}
              <a href={`https://wa.me/91${PHONE_NUMBER}`} className="px-2 py-2 rounded-lg bg-sky-600 text-white flex items-center gap-2"><Phone size={16}/> WhatsApp</a>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

const Hero = () => (
  <div id="home" className="relative pt-24">
    <div className="absolute inset-0 -z-10">
      <img src="https://images.unsplash.com/photo-1519681390069-0ee8cf6ecc32?q=80&w=2000&auto=format&fit=crop" alt="Himalayan landscape" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-sky-900/30" />
    </div>
    <Container>
      <div className="grid lg:grid-cols-2 items-center gap-10 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-sm">North Sikkim & Beyond</h1>
          <p className="mt-4 text-lg text-white/90 max-w-xl">Women-friendly trips, scenic road journeys, and authentic Himalayan experiences. Book your next adventure with Wanderer Buddies.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#packages" className="inline-flex items-center gap-2 rounded-full bg-white text-sky-700 px-5 py-3 font-semibold shadow hover:bg-slate-100"><Calendar size={18} /> View Packages</a>
            <a href={`https://wa.me/91${PHONE_NUMBER}`} className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white px-5 py-3 font-semibold shadow hover:bg-sky-700"><Phone size={18} /> Chat on WhatsApp</a>
          </div>
        </motion.div>
      </div>
    </Container>
  </div>
);

// About Section
const About = () => (
  <Section id="about" className="bg-white">
    <Container>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">About Wanderer Buddies</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We are a Kolkata-based travel company crafting safe, scenic and value-packed group trips to the Himalayas. Our curated itineraries blend iconic sights with local flavors, staying true to our promise: <span className="font-semibold">Explore Beyond the Limit</span>.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {["Women-friendly", "Permit Support", "Local Stays"].map((t) => (
              <div key={t} className="rounded-2xl border p-4 text-center text-slate-700 font-semibold bg-slate-50">{t}</div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1519681397810-79a0a83f06cf?q=80&w=1600&auto=format&fit=crop" alt="Road trip" className="rounded-3xl shadow-2xl" />
          <Badge>Wander with Confidence</Badge>
        </div>
      </div>
    </Container>
  </Section>
);

// Destinations Section
const Destinations = () => (
  <Section id="destinations" className="bg-slate-50">
    <Container>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Featured Destinations</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {DESTINATIONS.map((d) => (
          <div key={d.title} className="rounded-3xl overflow-hidden border bg-white shadow-sm">
            <img src={d.image} alt={d.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2"><MapPin size={18} className="text-sky-600" />{d.title}</h3>
              <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                {d.bullets.map((b) => (<li key={b}>{b}</li>))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

// Packages Section
const PackageCard = ({ p }) => {
  const whatsapp = useMemo(() => `https://wa.me/91${PHONE_NUMBER}?text=Hi%20Wanderer%20Buddies!%20I%20want%20to%20book:%20${encodeURIComponent(p.title)}`, [p.title]);
  const [showItin, setShowItin] = useState(false);
  return (
    <div className="rounded-3xl overflow-hidden border bg-white shadow-sm flex flex-col">
      <div className="relative">
        <img src={p.image} alt={p.title} className="h-56 w-full object-cover" />
        {p.badge && <div className="absolute top-3 left-3"><Badge>{p.badge}</Badge></div>}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-xl text-slate-900">{p.title}</h3>
        <div className="mt-2 flex items-center gap-2 text-slate-700"><BusFront size={18} className="text-sky-600"/> Train 3AC + Sharing Car</div>
        <ul className="mt-3 text-sm text-slate-600 grid grid-cols-1 gap-1">
          {p.includes.map((i) => (<li key={i} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5"/> {i}</li>))}
        </ul>
        <button onClick={() => setShowItin(!showItin)} className="mt-4 text-sky-700 font-semibold hover:underline inline-flex items-center gap-1"><Calendar size={16}/> {showItin ? "Hide Itinerary" : "View Itinerary"}</button>
        {showItin && (<ol className="mt-2 text-sm text-slate-700 list-decimal list-inside space-y-1">{p.itinerary.map((d, idx) => <li key={idx}>{d}</li>)}</ol>)}
        <p className="mt-4 text-3xl font-extrabold text-slate-900">₹{p.price.toLocaleString()} <span className="text-base font-medium text-slate-500">/ person</span></p>
        <p className="text-xs text-slate-500 mt-1">{p.note}</p>
        <div className="mt-5 flex gap-3">
          <a href={whatsapp} className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white px-5 py-3 font-semibold shadow hover:bg-sky-700"><MessageCircle size={18}/> Book on WhatsApp</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 font-semibold text-sky-700 border-sky-200 hover:bg-sky-50"><ArrowRight size={18}/> Enquiry</a>
        </div>
      </div>
    </div>
  );
};

const Packages = () => (
  <Section id="packages" className="bg-white">
    <Container>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Packages</h2>
      <div className="mt-10 grid md:grid-cols-2 gap-6">{PACKAGES.map((p) => <PackageCard key={p.id} p={p} />)}</div>
    </Container>
  </Section>
);

// Gallery Section
const Gallery = () => (
  <Section id="gallery" className="bg-slate-50">
    <Container>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Gallery</h2>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {GALLERY.map((img, idx) => (<img key={idx} src={img} alt={`Gallery ${idx+1}`} className="rounded-3xl shadow-lg w-full object-cover h-60"/>))}
      </div>
    </Container>
  </Section>
);

// Contact Section
const Contact = () => (
  <Section id="contact" className="bg-white">
    <Container>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Contact Us</h2>
      <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-slate-600">📍 Kolkata, West Bengal, India</p>
          <p className="text-slate-600 mt-2">📞 <a href={`tel:+91${PHONE_NUMBER}`} className="text-sky-600 font-semibold">+91 {PHONE_NUMBER}</a></p>
          <p className="text-slate-600 mt-2">✉️ <a href={`mailto:${EMAIL_ADDRESS}`} className="text-sky-600 font-semibold">{EMAIL_ADDRESS}</a></p>
          <div className="mt-6 flex gap-4">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-pink-500"><Instagram size={30} /></a>
            <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" className="text-red-600"><Youtube size={30} /></a>
          </div>
        </div>
        <div>
          <form action={`https://wa.me/91${PHONE_NUMBER}?text=Hi%20Wanderer%20Buddies!%20I%20want%20to%20enquire.`} target="_blank">
            <div className="grid gap-4">
              <input type="text" placeholder="Your Name" className="border rounded-xl px-4 py-3 w-full"/>
              <input type="email" placeholder="Your Email" className="border rounded-xl px-4 py-3 w-full"/>
              <textarea placeholder="Your Message" rows={4} className="border rounded-xl px-4 py-3 w-full"/>
              <button type="submit" className="rounded-full bg-sky-600 text-white px-6 py-3 font-semibold hover:bg-sky-700">Send on WhatsApp</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  </Section>
);

// Footer
const Footer = () => (
  <footer className="bg-slate-900 text-slate-200">
    <Container>
      <div className="py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-sky-600 text-white">WB</div>
            <div>
              <p className="font-extrabold leading-tight">Wanderer Buddies</p>
              <p className="text-xs text-slate-400 -mt-0.5">Explore Beyond the Limit</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-400">Kolkata • Himalayan Group Trips • Women-friendly</p>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <div className="mt-2 grid gap-1 text-sm">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-slate-400 hover:text-white">{n.label}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact & Social</p>
          <div className="mt-2 grid gap-2 text-sm text-slate-400">
            <span>Phone: +91 {PHONE_NUMBER}</span>
            <span>Email: {EMAIL_ADDRESS}</span>
            <div className="flex gap-3 mt-2">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-pink-500">
                <Instagram size={24}/>
              </a>
              <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" className="text-red-600">
                <Youtube size={24}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Wanderer Buddies. All rights reserved.</div>
    </Container>
  </footer>
);

export default function WandererBuddiesSite() {
  return (
    <div className="font-sans text-slate-800">
      <NavBar />
      <Hero />
      <About />
      <Destinations />
      <Packages />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
