import { useEffect, useState } from "react";
import {
  FaPlay,
  FaBolt,
  FaFlag,
  FaLink,
  FaChevronDown,
  FaExclamationTriangle,
  FaChartLine,
  FaLightbulb,
  FaGem,
  FaCoins,
  FaRoute,
  FaUsers,
  FaHandshake,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaCheck,
  FaPlus,
  FaCalendarAlt,
  FaMapPin,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTrophy,
  FaBuilding,
  FaUser,
  FaCode,
  FaPalette,
  FaDatabase,
  FaChessKnight,
  FaRocket,
  FaGlobe,
  FaCrown,
  FaPercent,
  FaGift,
  FaBriefcase,
  FaCalculator,
  FaCheckCircle,
  FaTimesCircle,
  FaQuoteLeft,
  FaInfoCircle,
  FaPuzzlePiece,
  FaBalanceScale,
  FaSlidersH,
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaFingerprint,
  FaShieldAlt,
  FaCamera,
  // FaMobileAlt, // Supprimé - non utilisé
  // FaCalendarCheck, // Supprimé - non utilisé
  FaMagic,
  FaStar,
  FaBolt as FaZap,
  FaBullseye,
  FaCompass,
  FaChevronUp,
  FaBullhorn,
  FaClock,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { MdQrCode } from "react-icons/md";
import logoAsset from "@/assets/play.png";
import sportVideo from "@/assets/sport-hero.mp4";

// Import des images QR codes
// Placez vos images dans src/assets/qr-codes/
import appQr from "@/assets/accueil.png";
import reservationQr from "@/assets/dashboard.png";
import tournoiQr from "@/assets/tournoi.png";

/* ───────────────────────── Reveal hook ───────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ───────────────────────── Navigation ───────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-xl" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#39ff14] to-[#00bfff] opacity-50 blur-xl group-hover:opacity-100 transition duration-500" />
            <div className="relative rounded-xl bg-white/10 backdrop-blur-sm p-1.5 border border-white/10">
              <img src={logoAsset} alt="PlayForest" className="h-9 w-9 object-contain" />
            </div>
          </div>
          <span className="font-display font-bold tracking-widest text-sm md:text-base text-ink">
            PLAY<span className="bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">FOREST</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-ink">
          {[
            { href: "#probleme", label: "Problème", icon: FaExclamationTriangle },
            { href: "#solution", label: "Solution", icon: FaLightbulb },
            { href: "#valeur", label: "Valeur", icon: FaGem },
            { href: "#modele", label: "Modèle", icon: FaCoins },
            { href: "#roadmap", label: "Roadmap", icon: FaRoute },
            { href: "#qr-codes", label: "QR Codes", icon: MdQrCode },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.href} href={item.href} className="hover:text-ink transition relative group flex items-center gap-1.5">
                <Icon size={12} className="opacity-60 group-hover:opacity-100 transition" />
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#39ff14] to-[#00bfff] transition-all group-hover:w-full" />
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="relative group overflow-hidden rounded-xl px-6 py-2.5 text-xs font-display font-bold text-ink transition-all shadow-lg shadow-[#39ff14]/20">
            <span className="absolute inset-0 bg-gradient-to-r from-[#39ff14] to-[#00bfff] transition-transform duration-300 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#39ff14] to-[#00bfff] blur-xl opacity-50 group-hover:opacity-100 transition" />
            <span className="relative flex items-center gap-2">
              <FaBolt size={12} /> Contact
            </span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-4 bg-white/95 backdrop-blur-xl border-t border-white/20 flex flex-col gap-3">
          {[
            { href: "#probleme", label: "Problème", icon: FaExclamationTriangle },
            { href: "#solution", label: "Solution", icon: FaLightbulb },
            { href: "#valeur", label: "Valeur", icon: FaGem },
            { href: "#modele", label: "Modèle", icon: FaCoins },
            { href: "#roadmap", label: "Roadmap", icon: FaRoute },
            { href: "#qr-codes", label: "QR Codes", icon: MdQrCode },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.href} href={item.href} className="flex items-center gap-2 text-sm text-muted-ink hover:text-ink transition py-1">
                <Icon size={14} className="text-[#39ff14]" />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}

/* ───────────────────────── Section wrapper ───────────────────────── */
function Section({
  id, dark = false, children, className = "",
}: { id?: string; dark?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${dark ? "text-white" : "text-ink"} ${className}`}
      style={
        dark
          ? { background: "linear-gradient(180deg, #05050a 0%, #0a0a1a 40%, #1a002a 80%, #05050a 100%)" }
          : undefined
      }
    >
      <div className={`absolute inset-0 pointer-events-none ${
        dark 
          ? "bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)]" 
          : "bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)]"
      } bg-[length:24px_24px] opacity-60`} />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">{children}</div>
    </section>
  );
}

function SlideBadge({ n, label, dark = false, icon: Icon }: { n: string; label: string; dark?: boolean; icon?: any }) {
  return (
    <div className="flex items-center gap-3 mb-6 reveal">
      <span className={`font-display text-xs tracking-[0.3em] ${dark ? "text-white/30" : "text-muted-ink/40"}`}>
        {n}
      </span>
      <span className="h-px w-12 bg-gradient-to-r from-[#39ff14] to-[#00bfff]" />
      {Icon && (
        <span className={`h-6 w-6 rounded-full flex items-center justify-center ${dark ? "bg-white/5" : "bg-black/5"}`}>
          <Icon size={12} className="text-[#39ff14]" />
        </span>
      )}
      <span className="font-display text-xs tracking-[0.3em] text-[#39ff14]">
        {label}
      </span>
    </div>
  );
}

/* ───────────────────────── Slide 1 — Cover ───────────────────────── */
function Slide1() {
  return (
    <Section id="top" dark className="min-h-screen flex items-center">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20 animate-ken-burns"
        src={sportVideo}
        autoPlay muted loop playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a]/80 via-[#0a0a1a]/90 to-[#1a002a]/95" />

      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-30 animate-float-slow bg-[radial-gradient(circle,#39ff14,transparent_70%)]" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-30 animate-float-slower bg-[radial-gradient(circle,#00bfff,transparent_70%)]" />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full blur-3xl opacity-20 animate-pulse-glow bg-[radial-gradient(circle,#8a2be2,transparent_70%)]" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39ff14]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00bfff]/10 to-transparent" />
      </div>

      <div className="relative w-full grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 stagger">
          <SlideBadge n="01" label="COUVERTURE" dark icon={FaFlag} />
          
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#39ff14]/50" />
            <span className="text-[#39ff14] text-xs font-display tracking-[0.3em]">L'AVENIR DU SPORT COMMENCE ICI</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#39ff14]/50" />
          </div>
          
          <div className="relative">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.02] relative z-10">
              <span className="text-white/5 absolute -top-4 left-0 text-7xl md:text-9xl lg:text-9xl font-black tracking-wider whitespace-nowrap select-none -z-10">
                Le sport
              </span>
              <span className="block text-white font-black">Le sport</span>
              <span className="block text-white font-black">est</span>
              <span className="block bg-gradient-to-r from-[#39ff14] via-[#00bfff] to-[#8a2be2] bg-[length:300%_300%] animate-gradient-shift bg-clip-text text-transparent font-black">
                partout.
              </span>
            </h1>
          </div>
          
          <div className="mt-4 flex items-center gap-4 text-white/50 text-sm font-display tracking-widest">
            <span className="flex items-center gap-2">
              <FaMagic size={14} className="text-[#39ff14]" />
              INNOVATION
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span className="flex items-center gap-2">
              <FaZap size={14} className="text-[#00bfff]" />
              PERFORMANCE
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span className="flex items-center gap-2">
              <FaBullseye size={14} className="text-[#8a2be2]" />
              PRÉCISION
            </span>
          </div>
          
          <p className="mt-6 text-xl md:text-2xl text-white/70 font-display font-medium tracking-wide max-w-2xl flex items-center gap-3">
            <FaLink size={24} className="text-[#39ff14]" />
            Il est temps de le <span className="text-[#39ff14] animate-neon-flicker font-bold">connecter.</span>
          </p>
          
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "Connectivité", icon: FaCompass },
              { label: "Intelligence", icon: FaStar },
              { label: "Communauté", icon: FaUsers },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 text-xs font-display tracking-widest">
                  <Icon size={12} className="text-[#39ff14]" />
                  {item.label}
                </span>
              );
            })}
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#probleme" className="relative group overflow-hidden rounded-xl px-8 py-4 font-display font-bold text-ink transition-all shadow-2xl shadow-[#39ff14]/30">
              <span className="absolute inset-0 bg-gradient-to-r from-[#39ff14] to-[#00bfff] transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#39ff14] to-[#00bfff] blur-xl opacity-50 group-hover:opacity-100 transition" />
              <span className="relative flex items-center gap-3">
                <FaPlay size={16} /> Découvrir la vision
              </span>
            </a>
            <a href="#contact" className="group relative overflow-hidden rounded-xl px-8 py-4 font-display font-bold text-white/80 transition-all border-2 border-white/20 hover:border-white/40 hover:text-white">
              <span className="absolute inset-0 bg-white/5 transition-transform duration-300 group-hover:scale-105" />
              <span className="relative flex items-center gap-3">
                <FaHandshake size={16} /> Nous rejoindre
              </span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-white/20 text-xs">
            <span className="flex items-center gap-2">
              <FaShieldAlt size={12} className="text-[#39ff14]" />
              Sécurisé
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span className="flex items-center gap-2">
              <FaFingerprint size={12} className="text-[#00bfff]" />
              Fiable
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span className="flex items-center gap-2">
              <FaCheckCircle size={12} className="text-[#8a2be2]" />
              Certifié
            </span>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-[#39ff14] to-[#00bfff] rounded-3xl blur-3xl opacity-30 group-hover:opacity-60 transition duration-700" />
            <div className="relative glass-dark rounded-3xl p-10 backdrop-blur-xl border border-white/10 transform perspective-1000 rotate-y-5 hover:rotate-y-0 transition duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/5 to-[#00bfff]/5 rounded-3xl" />
              <div className="relative z-10 flex flex-col items-center">
                <img src={logoAsset} alt="PlayForest logo" className="h-48 w-48 object-contain" />
                <div className="mt-4 flex items-center gap-2 text-white/20 text-[10px] font-display tracking-[0.3em]">
                  <FaCircle size={4} className="fill-[#39ff14] text-[#39ff14]" />
                  <FaCircle size={4} className="fill-[#00bfff] text-[#00bfff]" />
                  <FaCircle size={4} className="fill-[#8a2be2] text-[#8a2be2]" />
                  <span className="ml-2">CONNECTED</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 flex gap-1 text-white/10">
                <FaCircle size={6} className="fill-white/10" />
                <FaCircle size={6} className="fill-white/10" />
                <FaCircle size={6} className="fill-white/10" />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 text-white/10 text-[10px] font-display tracking-[0.3em]">
              <FaShieldAlt size={12} />
              <span>CONNECTÉ • SÉCURISÉ • INNOVANT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-xs tracking-[0.3em] font-display animate-pulse-glow flex items-center gap-2">
        <FaChevronDown size={14} /> EXPLORER
      </div>
    </Section>
  );
}

/* ───────────────────────── Slide 2 — Problem ───────────────────────── */
function Slide2() {
  const chaos = [
    { icon: FaInstagram, color: "#ff007f", label: "Instagram" },
    { icon: FaWhatsapp, color: "#39ff14", label: "WhatsApp" },
    { icon: FaMapPin, color: "#00bfff", label: "Maps" },
    { icon: FaCalendarAlt, color: "#8a2be2", label: "Calendrier" },
    { icon: FaFacebook, color: "#00bfff", label: "Facebook" },
    { icon: FaPhoneAlt, color: "#39ff14", label: "Téléphone" },
  ];
  return (
    <Section id="probleme">
      <SlideBadge n="02" label="LE PROBLÈME" icon={FaExclamationTriangle} />
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 reveal">
          <div className="flex items-center gap-3 text-[#39ff14] mb-4">
            <FaExclamationTriangle size={24} />
            <span className="font-display text-sm tracking-[0.3em]">FRAGMENTATION</span>
            <span className="h-px flex-1 bg-[#39ff14]/20" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Aujourd'hui, faire du sport ressemble à organiser un voyage{" "}
            <span className="bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">sans Google Maps.</span>
          </h2>
          
          <div className="mt-6 p-6 bg-gradient-to-r from-[#39ff14]/5 to-[#00bfff]/5 rounded-2xl border border-[#39ff14]/10">
            <p className="text-muted-ink text-lg flex items-start gap-3">
              <FaQuoteLeft size={24} className="text-[#39ff14] mt-1 shrink-0" />
              <span>Chercher un terrain sur Instagram, trouver des partenaires sur WhatsApp, découvrir un tournoi ailleurs… et parfois abandonner avant même de jouer.</span>
            </p>
          </div>
          
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-ink">
            <span className="flex items-center gap-2">
              <FaTimesCircle size={14} className="text-[#ff007f]" />
              6+ applications
            </span>
            <span className="h-4 w-px bg-white/10" />
            <span className="flex items-center gap-2">
              <FaTimesCircle size={14} className="text-[#ff007f]" />
              Perte de temps
            </span>
            <span className="h-4 w-px bg-white/10" />
            <span className="flex items-center gap-2">
              <FaTimesCircle size={14} className="text-[#ff007f]" />
              Opportunités manquées
            </span>
          </div>
          
          <div className="mt-6 p-6 bg-gradient-to-r from-[#39ff14]/5 to-[#00bfff]/5 rounded-2xl border border-[#39ff14]/10">
            <p className="font-display text-xl md:text-2xl font-semibold flex items-center gap-3">
              <span className="text-[#39ff14]">?</span>
              Pourquoi toute cette expérience est-elle encore{" "}
              <span className="bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">fragmentée&nbsp;?</span>
            </p>
          </div>
        </div>

        <div className="md:col-span-5 reveal">
          <div className="relative aspect-square glass rounded-3xl p-8 overflow-hidden backdrop-blur-xl border border-white/10">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.25),transparent_60%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="h-24 w-24 mx-auto rounded-full flex items-center justify-center text-white font-display font-black bg-gradient-to-r from-[#39ff14] to-[#00bfff] shadow-[0_0_60px_rgba(57,255,20,0.5)]">
                  <FaLink size={32} className="rotate-45" />
                </div>
                <p className="mt-3 text-sm text-white/30 font-display tracking-[0.3em]">DÉCONNECTÉ</p>
              </div>
            </div>
            {chaos.map((c, i) => {
              const Icon = c.icon;
              const angle = (i / chaos.length) * Math.PI * 2;
              const r = 34 + (i % 2) * 8;
              const x = 50 + Math.cos(angle) * r;
              const y = 50 + Math.sin(angle) * r;
              return (
                <div
                  key={i}
                  className="absolute flex flex-col items-center animate-float-slow"
                  style={{
                    left: `${x}%`, top: `${y}%`,
                    transform: "translate(-50%,-50%)",
                    animationDelay: `${i * 0.4}s`,
                  }}
                >
                  <div className="h-14 w-14 rounded-2xl glass flex items-center justify-center border border-white/5"
                    style={{ color: c.color, boxShadow: `0 10px 30px ${c.color}22` }}>
                    <Icon size={24} />
                  </div>
                  <span className="text-[8px] text-white/20 mt-1 font-display tracking-wider">{c.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── Slide 3 — Context ───────────────────────── */
function Slide3() {
  return (
    <Section id="chiffres" dark>
      <div className="absolute top-20 right-10 h-96 w-96 rounded-full blur-3xl opacity-20 bg-[#00bfff]" />
      <SlideBadge n="03" label="LE CONTEXTE" dark icon={FaChartLine} />
      <div className="reveal">
        <div className="flex items-center gap-4 mb-4">
          <FaChartLine size={32} className="text-[#39ff14]" />
          <span className="text-white/30 text-sm font-display tracking-[0.3em]">MARCHÉ EN EXPANSION</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold max-w-4xl leading-tight">
          Un secteur qui grandit, mais qui reste{" "}
          <span className="bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">déconnecté.</span>
        </h2>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <div className="reveal glass-dark rounded-3xl p-10 backdrop-blur-xl border border-white/5 group hover:border-[#39ff14]/20 transition relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-20 bg-[#39ff14]" />
          <div className="relative flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <FaBuilding size={20} className="text-[#39ff14]" />
                <span className="text-white/30 text-xs font-display tracking-[0.3em]">INFRASTRUCTURES</span>
              </div>
              <div className="font-display text-6xl md:text-7xl font-black bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent mt-2">2 488</div>
              <div className="mt-2 text-white/40 font-display tracking-widest text-sm flex items-center gap-2">
                <FaCheckCircle size={14} className="text-[#39ff14]" />
                Terrains & équipements
              </div>
            </div>
            <FaMapPin size={40} className="text-white/5 group-hover:text-[#39ff14]/10 transition" />
          </div>
        </div>
        <div className="reveal glass-dark rounded-3xl p-10 backdrop-blur-xl border border-white/5 group hover:border-[#00bfff]/20 transition relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full blur-3xl opacity-20 bg-[#00bfff]" />
          <div className="relative flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <FaUsers size={20} className="text-[#00bfff]" />
                <span className="text-white/30 text-xs font-display tracking-[0.3em]">BÉNÉFICIAIRES</span>
              </div>
              <div className="font-display text-6xl md:text-7xl font-black text-[#00bfff] mt-2">+2,44M</div>
              <div className="mt-2 text-white/40 font-display tracking-widest text-sm flex items-center gap-2">
                <FaCheckCircle size={14} className="text-[#00bfff]" />
                Sportifs & clubs
              </div>
            </div>
            <FaUser size={40} className="text-white/5 group-hover:text-[#00bfff]/10 transition" />
          </div>
        </div>
      </div>

      <blockquote className="reveal mt-14 relative glass-dark rounded-3xl p-10 max-w-4xl backdrop-blur-xl border border-white/5">
        <FaQuoteLeft size={32} className="absolute -top-4 -left-4 text-[#39ff14]" />
        <div className="flex gap-4 items-start">
          <div className="h-10 w-10 rounded-full bg-[#39ff14]/10 flex items-center justify-center text-[#39ff14] shrink-0">
            <FaInfoCircle size={20} />
          </div>
          <div>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed italic">
              L'expérience reste fragmentée&nbsp;: les réseaux sociaux, WhatsApp, des solutions séparées...
              Aucune solution ne connecte encore réellement tout son écosystème.
            </p>
            <div className="mt-4 flex items-center gap-3 text-white/50">
              <span className="h-px w-8 bg-[#39ff14]/30" />
              <span className="text-sm">
                C'est cet angle mort que{" "}
                <span className="font-display font-bold bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">PlayForest</span> veut résoudre.
              </span>
              <span className="h-px w-8 bg-[#39ff14]/30" />
            </div>
          </div>
        </div>
      </blockquote>
    </Section>
  );
}

/* ───────────────────────── Slide 4 — Solution ───────────────────────── */
function Slide4() {
  const pillars = [
    { title: "Play", icon: FaPlay, color: "#39ff14",
      desc: "Trouver une session et réserver en quelques clics.",
      features: ["Recherche intelligente", "Réservation instantanée", "Notifications"] },
    { title: "Connect", icon: FaUsers, color: "#00bfff",
      desc: "Rejoindre des partenaires et des communautés.",
      features: ["Matchmaking", "Chat intégré", "Communautés"] },
    { title: "Manage", icon: FaChartLine, color: "#8a2be2",
      desc: "Piloter son activité depuis un tableau de bord.",
      features: ["Statistiques", "Gestion des créneaux", "Paiements"] },
  ];
  return (
    <Section id="solution">
      <SlideBadge n="04" label="LA SOLUTION" icon={FaLightbulb} />
      <div className="reveal max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <FaPuzzlePiece size={32} className="text-[#39ff14]" />
          <span className="text-muted-ink/40 text-sm font-display tracking-[0.3em]">CONNECTIVITÉ UNIVERSELLE</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          Connecter tout l'<span className="bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">écosystème sportif.</span>
        </h2>
        <p className="mt-4 text-muted-ink text-lg flex items-start gap-3">
          <FaArrowRight size={20} className="text-[#39ff14] mt-1 shrink-0" />
          Une plateforme unique qui rassemble joueurs, gestionnaires et organisateurs autour d'une expérience fluide et connectée.
        </p>
      </div>

      <div className="mt-16 relative">
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="netG" x1="0" x2="1">
              <stop offset="0%" stopColor="#39ff14" />
              <stop offset="50%" stopColor="#00bfff" />
              <stop offset="100%" stopColor="#8a2be2" />
            </linearGradient>
          </defs>
          <path d="M 170 200 Q 500 60 830 200" stroke="url(#netG)" strokeWidth="2" fill="none" strokeDasharray="6 8" opacity="0.3" />
          <path d="M 170 200 Q 500 340 830 200" stroke="url(#netG)" strokeWidth="2" fill="none" strokeDasharray="6 8" opacity="0.3" />
          <circle cx="170" cy="200" r="4" fill="#39ff14" opacity="0.3" />
          <circle cx="830" cy="200" r="4" fill="#8a2be2" opacity="0.3" />
        </svg>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="reveal group relative overflow-hidden rounded-3xl p-8 backdrop-blur-xl border border-white/10 bg-white/5 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
                   style={{ transitionDelay: `${i * 60}ms`, boxShadow: `0 20px 60px ${p.color}15` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl flex items-center justify-center text-white mb-6"
                       style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}66)`, boxShadow: `0 10px 30px ${p.color}44` }}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-3 flex items-center gap-2">
                    {p.title}
                    <FaArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition" style={{ color: p.color }} />
                  </h3>
                  <p className="text-muted-ink leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <span key={f} className="text-xs px-3 py-1 rounded-full border border-white/10 text-muted-ink/80 flex items-center gap-1 bg-white/5">
                        <FaCheck size={10} style={{ color: p.color }} />
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 h-px w-full" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── Slide 5 — Value ───────────────────────── */
function Slide5() {
  const actors = [
    {
      title: "Sportif", icon: FaUser, color: "#39ff14",
      body: "Trouve une session, réserve un terrain et rejoint des partenaires en un seul endroit.",
      chip: "Tout en 1 clic",
      benefits: ["Accès instantané", "Partenaires proches", "Historique"] },
    {
      title: "Gestionnaire", icon: FaBuilding, color: "#00bfff",
      body: "Augmente sa visibilité et remplit ses créneaux.",
      chip: "+45 000 DH / mois",
      sub: "Ex: 5 réservations/jour × 300 DH",
      benefits: ["Visibilité", "Remplissage", "Automatisation"] },
    {
      title: "Organisateur", icon: FaTrophy, color: "#ff007f",
      body: "Gère un tournoi de 16 équipes, les inscriptions et les paiements depuis une seule plateforme.",
      chip: "16 équipes gérées",
      benefits: ["Inscriptions", "Paiements", "Classements"] },
  ];
  return (
    <Section id="valeur" dark>
      <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full blur-3xl opacity-15 bg-[#8a2be2]" />
      <SlideBadge n="05" label="LA VALEUR" dark icon={FaGem} />
      <div className="reveal max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <FaBalanceScale size={32} className="text-[#39ff14]" />
          <span className="text-white/30 text-sm font-display tracking-[0.3em]">IMPACT MESURABLE</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          Une valeur mesurable pour{" "}
          <span className="bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">chaque acteur.</span>
        </h2>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {actors.map((a) => {
          const Icon = a.icon;
          return (
            <div
              key={a.title}
              className="reveal group relative overflow-hidden rounded-3xl p-8 backdrop-blur-xl border border-white/5 bg-white/5 hover:border-[var(--hc)]/30 transition-all hover:shadow-2xl"
              style={{ "--hc": a.color, boxShadow: `0 20px 60px ${a.color}10` } as React.CSSProperties}
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-2xl opacity-20" style={{ background: a.color }} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="h-14 w-14 rounded-2xl flex items-center justify-center text-white mb-6"
                       style={{ background: `${a.color}22`, border: `1px solid ${a.color}44`, color: a.color }}>
                    <Icon size={24} />
                  </div>
                  <div className="flex gap-1">
                    {a.benefits.map((_, i) => (
                      <FaCircle key={i} size={6} className="fill-current" style={{ color: a.color }} />
                    ))}
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 text-white">{a.title}</h3>
                <p className="text-white/70 leading-relaxed">{a.body}</p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-display font-bold"
                       style={{ background: `${a.color}18`, color: a.color, border: `1px solid ${a.color}44` }}>
                    <FaZap size={12} /> {a.chip}
                  </div>
                  {a.sub && <span className="text-xs text-white/20">{a.sub}</span>}
                </div>
                
                <div className="mt-4 flex flex-wrap gap-1">
                  {a.benefits.map((b) => (
                    <span key={b} className="text-[10px] px-2 py-1 rounded-full border border-white/5 text-white/30 flex items-center gap-1">
                      <FaPlus size={8} style={{ color: a.color }} />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ───────────────────────── Slide 6 — Economic Model ───────────────────────── */
function Slide6() {
  const rows = [
    { label: "Sportifs", value: "Gratuit", color: "#39ff14", w: "100%", icon: FaGift, desc: "Accès illimité" },
    { label: "Gestionnaires — Basic", value: "500 DH / mois", color: "#00bfff", w: "40%", icon: FaBriefcase, desc: "Jusqu'à 50 réservations" },
    { label: "Gestionnaires — Pro", value: "2 000 DH / mois", color: "#8a2be2", w: "75%", icon: FaCrown, desc: "Illimité + analytics" },
    { label: "Commission réservations", value: "10 %", color: "#ff007f", w: "55%", icon: FaPercent, desc: "Sur chaque réservation" },
    {
      label: "Commission publicité",
      value: "Variable",
      color: "#ffd700",
      w: "65%",
      icon: FaBullhorn,
      desc: "Sponsors, annonces, mise en avant",
    },
    {
      label: "Abonnement tournoi",
      value: "500 MAD / ≤12 éq.",
      color: "#ff8c00",
      w: "70%",
      icon: FaTrophy,
      desc: "+50 MAD par équipe supplémentaire",
    },
  ];

  const pieSegments = [
    ["Abonnements", "#39ff14"],
    ["Commissions", "#00bfff"],
    ["Publicité", "#ffd700"],
    ["Tournois", "#ff8c00"],
    ["Services premium", "#8a2be2"],
    ["Autres", "#ff007f"],
  ];

  return (
    <Section id="modele">
      <SlideBadge n="06" label="MODÈLE ÉCONOMIQUE" icon={FaCoins} />
      <div className="reveal max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <FaCalculator size={32} className="text-[#39ff14]" />
          <span className="text-muted-ink/40 text-sm font-display tracking-[0.3em]">REVENUS DURABLES</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          Un modèle{" "}
          <span className="bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">simple et accessible.</span>
        </h2>
      </div>

      <div className="mt-14 grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-3 space-y-3">
          {rows.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.label}
                className="reveal group relative overflow-hidden rounded-2xl p-4 backdrop-blur-xl border border-white/10 bg-white/5 hover:border-[var(--hc)]/30 transition"
                style={{ "--hc": r.color, transitionDelay: `${i * 60}ms` } as React.CSSProperties}
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center text-white text-sm shrink-0"
                       style={{ background: r.color, boxShadow: `0 8px 20px ${r.color}44` }}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-display font-semibold text-ink text-sm">{r.label}</span>
                      <span className="font-display font-bold text-sm" style={{ color: r.color }}>{r.value}</span>
                    </div>
                    {r.desc && <p className="text-xs text-muted-ink/70">{r.desc}</p>}
                    <div className="mt-2 h-1.5 w-full rounded-full bg-black/5 overflow-hidden">
                      <div className="h-full rounded-full transition-all group-hover:scale-x-110" 
                           style={{ width: r.w, background: `linear-gradient(90deg, ${r.color}, ${r.color}66)` }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal md:col-span-2 glass rounded-3xl p-8 backdrop-blur-xl border border-white/10">
          <div className="flex items-center gap-2 font-display text-xs tracking-[0.3em] text-muted-ink/70">
            <FaChartLine size={14} /> RÉPARTITION
          </div>
          <div className="mt-4 relative aspect-square rounded-full"
               style={{
                 background: "conic-gradient(#39ff14 0 30%, #00bfff 30% 50%, #ffd700 50% 65%, #ff8c00 65% 80%, #8a2be2 80% 95%, #ff007f 95% 100%)",
               }}>
            <div className="absolute inset-6 rounded-full bg-white flex flex-col items-center justify-center">
              <span className="font-display text-4xl font-black bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">100%</span>
              <span className="text-xs text-muted-ink mt-1">de l'écosystème</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-1 text-xs">
            {pieSegments.map(([n, c]) => (
              <div key={n} className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ background: c }} />
                <span className="text-muted-ink">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── Slide 7 — Roadmap ───────────────────────── */
function Slide7() {
  const steps = [
    { when: "Maintenant", title: "Lancement du pilote", place: "Casablanca", color: "#39ff14", icon: FaRocket, desc: "Test sur 5 terrains" },
    { when: "Court terme", title: "Premiers partenaires", place: "Mesure de l'impact", color: "#00bfff", icon: FaHandshake, desc: "10+ partenaires" },
    { when: "Moyen terme", title: "Extension nationale", place: "Maroc entier", color: "#8a2be2", icon: FaGlobe, desc: "100+ terrains" },
  ];
  return (
    <Section id="roadmap" dark>
      <SlideBadge n="07" label="ROADMAP" dark icon={FaRoute} />
      <div className="reveal max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <FaFlag size={32} className="text-[#39ff14]" />
          <span className="text-white/30 text-sm font-display tracking-[0.3em]">FEUILLE DE ROUTE</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          La prochaine étape est{" "}
          <span className="bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">déjà claire.</span>
        </h2>
      </div>

      <div className="mt-16 relative">
        <div className="absolute left-0 right-0 top-8 h-px hidden md:block bg-gradient-to-r from-[#39ff14] via-[#00bfff] to-[#8a2be2] opacity-30" />
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex flex-col items-start">
                  <div className="relative">
                    <div className="absolute inset-0 blur-xl opacity-40" style={{ background: s.color }} />
                    <div className="relative h-16 w-16 rounded-full flex items-center justify-center text-white z-10"
                         style={{ background: s.color, boxShadow: `0 0 40px ${s.color}66` }}>
                      <Icon size={24} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full w-4 h-4 flex items-center justify-center shadow-lg">
                      <span className="text-[8px] font-black" style={{ color: s.color }}>{i + 1}</span>
                    </div>
                  </div>
                  <div className="mt-6 glass-dark rounded-2xl p-6 w-full backdrop-blur-xl border border-white/5">
                    <div className="flex items-center gap-2 font-display text-xs tracking-[0.3em]" style={{ color: s.color }}>
                      <FaClock size={12} /> {s.when.toUpperCase()}
                    </div>
                    <div className="mt-2 font-display text-xl font-bold text-white">{s.title}</div>
                    <div className="mt-1 text-white/40 text-sm flex items-center gap-2">
                      <FaMapPin size={14} style={{ color: s.color }} />
                      {s.place}
                    </div>
                    <div className="mt-3 text-xs text-white/30 flex items-center gap-2">
                      <FaCheckCircle size={14} style={{ color: s.color }} />
                      {s.desc}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── Slide 8 — Team ───────────────────────── */
function Slide8() {
  const members = [
    { role: "Développement", icon: FaCode, color: "#39ff14", desc: "Architecture & APIs" },
    { role: "Design", icon: FaPalette, color: "#00bfff", desc: "UX & Interface" },
    { role: "Data", icon: FaDatabase, color: "#8a2be2", desc: "Analytics & ML" },
    { role: "Stratégie", icon: FaChessKnight, color: "#ff007f", desc: "Business & Growth" },
  ];
  return (
    <Section id="equipe">
      <SlideBadge n="08" label="L'ÉQUIPE" icon={FaUsers} />
      <div className="reveal max-w-4xl">
        <div className="flex items-center gap-4 mb-4">
          <FaUsers size={32} className="text-[#39ff14]" />
          <span className="text-muted-ink/40 text-sm font-display tracking-[0.3em]">TALENTS COMPLÉMENTAIRES</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          Derrière PlayForest, il n'y a pas seulement une idée&nbsp;:{" "}
          <span className="bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">il y a une équipe.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-ink max-w-2xl flex items-start gap-3">
          <FaHandshake size={20} className="text-[#39ff14] mt-1 shrink-0" />
          Des profils complémentaires en développement, design, data et stratégie managériale,
          réunis autour d'une même vision.
        </p>
      </div>

      <div className="mt-16 relative">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="teamG" x1="0" x2="1">
              <stop offset="0%" stopColor="#39ff14" />
              <stop offset="100%" stopColor="#ff007f" />
            </linearGradient>
          </defs>
          <path d="M 125 150 L 375 150 L 625 150 L 875 150" stroke="url(#teamG)" strokeWidth="1.5" fill="none" strokeDasharray="4 6" opacity="0.2" />
          {[125, 375, 625, 875].map((x) => (
            <circle key={x} cx={x} cy={150} r="3" fill="#39ff14" opacity="0.2" />
          ))}
        </svg>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
          {members.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={m.role} className="reveal flex flex-col items-center text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative">
                  <div className="absolute inset-0 blur-2xl opacity-40" style={{ background: m.color }} />
                  <div className="relative h-24 w-24 rounded-full glass flex items-center justify-center border-2"
                       style={{ color: m.color, borderColor: `${m.color}44` }}>
                    <Icon size={28} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-lg">
                    <span className="text-[10px] font-black" style={{ color: m.color }}>{i + 1}</span>
                  </div>
                </div>
                <div className="mt-5 font-display font-bold">{m.role}</div>
                <div className="text-xs text-muted-ink mt-1 flex items-center gap-1">
                  <FaZap size={10} style={{ color: m.color }} />
                  {m.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── Slide 9 — Contact / Conclusion ───────────────────────── */
function Slide9() {
  return (
    <Section id="contact" dark className="min-h-screen flex items-center">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-30 animate-ken-burns"
        src={sportVideo}
        autoPlay muted loop playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a]/70 via-[#0a0a1a]/85 to-[#1a002a]/95" />

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 animate-float-slow bg-[radial-gradient(circle,#39ff14,transparent_70%)]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 animate-float-slower bg-[radial-gradient(circle,#00bfff,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full blur-3xl opacity-20 animate-pulse-glow bg-[radial-gradient(circle,#ff007f,transparent_70%)]" />
      </div>

      <div className="relative w-full text-center stagger">
        <SlideBadge n="09" label="CONCLUSION" dark icon={FaFlag} />
        
        <div className="mb-6 flex items-center justify-center gap-6 text-white/20">
          <span className="h-px w-16 bg-[#39ff14]/30" />
          <span className="text-[#39ff14] text-xs font-display tracking-[0.3em]">L'AVENIR DU SPORT COMMENCE ICI</span>
          <span className="h-px w-16 bg-[#39ff14]/30" />
        </div>
        
        <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-black leading-[1.05] max-w-5xl mx-auto">
          <span className="block text-white font-black">Le futur du sport</span>
          <span className="block text-white font-black">est en train de</span>
          <span className="block bg-gradient-to-r from-[#39ff14] via-[#00bfff] to-[#8a2be2] bg-[length:300%_300%] animate-gradient-shift bg-clip-text text-transparent font-black">
            se connecter.
          </span>
        </h2>
        
        <div className="mt-6 flex justify-center gap-8 text-white/20">
          <FaLink size={24} className="text-[#39ff14]" />
          <FaArrowRight size={20} className="text-white/10" />
          <FaUsers size={24} className="text-[#00bfff]" />
          <FaArrowRight size={20} className="text-white/10" />
          <FaTrophy size={24} className="text-[#8a2be2]" />
          <FaArrowRight size={20} className="text-white/10" />
          <FaGlobe size={24} className="text-[#ff007f]" />
        </div>
        
        <p className="mt-8 text-lg md:text-2xl text-white/80 max-w-2xl mx-auto flex items-center justify-center gap-3 font-medium">
          <FaHandshake size={24} className="text-[#39ff14]" />
          <span>Nous vous invitons à construire cette connexion avec nous.</span>
        </p>
        
        <div className="mt-6 flex items-center justify-center gap-6 text-white/30 text-sm">
          <span className="flex items-center gap-2">
            <FaCheckCircle size={14} className="text-[#39ff14]" />
            Innovation
          </span>
          <span className="h-4 w-px bg-white/10" />
          <span className="flex items-center gap-2">
            <FaCheckCircle size={14} className="text-[#00bfff]" />
            Performance
          </span>
          <span className="h-4 w-px bg-white/10" />
          <span className="flex items-center gap-2">
            <FaCheckCircle size={14} className="text-[#8a2be2]" />
            Communauté
          </span>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="mailto:hello@playforest.io" className="relative group overflow-hidden rounded-xl px-8 py-4 text-base font-display font-bold text-ink transition-all shadow-2xl shadow-[#39ff14]/30">
            <span className="absolute inset-0 bg-gradient-to-r from-[#39ff14] to-[#00bfff] transition-transform duration-300 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#39ff14] to-[#00bfff] blur-xl opacity-50 group-hover:opacity-100 transition" />
            <span className="relative flex items-center gap-3">
              <FaHandshake size={18} /> Devenir Partenaire
            </span>
          </a>
          <a href="mailto:hello@playforest.io" className="group relative overflow-hidden rounded-xl px-8 py-4 text-base font-display font-bold text-white/80 transition-all border-2 border-white/20 hover:border-white/40 hover:text-white">
            <span className="absolute inset-0 bg-white/5 transition-transform duration-300 group-hover:scale-105" />
            <span className="relative flex items-center gap-3">
              <span className="text-[#39ff14]">✉</span> Contactez-nous
            </span>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-3 text-white/30">
            <FaTwitter size={18} className="hover:text-[#39ff14] transition cursor-pointer" />
            <FaInstagram size={18} className="hover:text-[#39ff14] transition cursor-pointer" />
            <FaLinkedinIn size={18} className="hover:text-[#39ff14] transition cursor-pointer" />
            <FaYoutube size={18} className="hover:text-[#39ff14] transition cursor-pointer" />
          </div>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-3">
            <img src={logoAsset} alt="PlayForest" className="h-10 w-10 object-contain" />
            <span className="font-display font-bold tracking-widest text-white">
              PLAY<span className="bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">FOREST</span>
            </span>
          </div>
          <div className="h-6 w-px bg-white/10" />
          <span className="text-white/10 text-xs font-display tracking-widest">© 2026</span>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── Slide 10 — QR Codes ───────────────────────── */
function Slide10() {
  const qrCodes = [
    {
      title: "Télécharger l'app",
      desc: "Scannez pour télécharger l'application PlayForest sur votre smartphone.",
      image: appQr,
      color: "#39ff14",
      store: "App Store & Play Store",
    },
    {
      title: "Réserver un terrain",
      desc: "Scannez pour réserver votre terrain de sport préféré en 1 clic.",
      image: reservationQr,
      color: "#00bfff",
      store: "Disponible 24/7",
    },
    {
      title: "Créer un tournoi",
      desc: "Scannez pour créer et gérer votre tournoi avec l'abonnement dédié.",
      image: tournoiQr,
      color: "#ff8c00",
      store: "Gestion complète",
    },
  ];

  return (
    <Section id="qr-codes" dark className="min-h-screen flex items-center">
      <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full blur-3xl opacity-15 animate-pulse-glow bg-[radial-gradient(circle,#39ff14,transparent_70%)]" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full blur-3xl opacity-15 animate-pulse-glow bg-[radial-gradient(circle,#00bfff,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full blur-3xl opacity-10 animate-pulse-glow bg-[radial-gradient(circle,#ffd700,transparent_70%)]" />

      <div className="relative w-full">
        <div className="text-center mb-16">
          <SlideBadge n="10" label="QR CODES" dark icon={MdQrCode} />
          <div className="flex items-center justify-center gap-4 mb-4">
            <MdQrCode size={32} className="text-[#39ff14]" />
            <span className="text-white/30 text-sm font-display tracking-[0.3em]">ACCÈS INSTANTANÉ</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Un accès{" "}
            <span className="bg-gradient-to-r from-[#39ff14] to-[#00bfff] bg-clip-text text-transparent">instantané</span> à toutes les fonctionnalités.
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto flex items-center justify-center gap-3">
            <FaCamera size={20} className="text-[#39ff14]" />
            Scannez les codes QR ci-dessous pour accéder directement à l'application,
            la réservation de terrains ou la création de tournois.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {qrCodes.map((qr, i) => {
            return (
              <div
                key={qr.title}
                className="reveal group relative overflow-hidden rounded-3xl p-8 backdrop-blur-xl border border-white/5 bg-white/5 hover:border-[var(--hc)]/30 transition-all hover:shadow-2xl hover:-translate-y-2"
                style={{ 
                  "--hc": qr.color, 
                  transitionDelay: `${i * 100}ms`, 
                  boxShadow: `0 20px 60px ${qr.color}10` 
                } as React.CSSProperties}
              >
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-48 h-48 rounded-2xl mb-6 overflow-hidden border-2 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl relative"
                    style={{ borderColor: `${qr.color}44`, boxShadow: `0 0 30px ${qr.color}20` }}
                  >
                    <img 
                      src={qr.image} 
                      alt={`QR Code ${qr.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white text-xs font-display tracking-[0.3em] flex items-center gap-1">
                        <MdQrCode size={12} style={{ color: qr.color }} />
                        Scannez-moi
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2">{qr.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{qr.desc}</p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-white/20">
                    <FaCheckCircle size={14} style={{ color: qr.color }} />
                    {qr.store}
                  </div>

                  <div className="mt-6 w-full h-px" style={{ background: `linear-gradient(90deg, ${qr.color}, transparent)` }} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/20 text-sm font-display tracking-[0.3em] flex items-center justify-center gap-2">
            <FaInfoCircle size={14} className="text-[#39ff14]" />
            Scannez les QR codes pour accéder instantanément aux fonctionnalités
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── Slide deck navigation ───────────────────────── */
const SLIDE_IDS = [
  "top", "probleme", "chiffres", "solution", "valeur",
  "modele", "roadmap", "equipe", "contact", "qr-codes",
] as const;

function Pitch() {
  useReveal();
  const [index, setIndex] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const total = 10;

  const go = (i: number) => setIndex(Math.max(0, Math.min(total - 1, i)));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault(); setIndex((i) => Math.min(total - 1, i + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault(); setIndex((i) => Math.max(0, i - 1));
      } else if (e.key === "Home") { setIndex(0); }
      else if (e.key === "End") { setIndex(total - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace("#", "");
      const idx = SLIDE_IDS.indexOf(h as typeof SLIDE_IDS[number]);
      if (idx >= 0) setIndex(idx);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    let lock = false;
    const onWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;
      const scroller = target?.closest("[data-slide-scroll]") as HTMLElement | null;
      if (scroller) {
        const { scrollTop, scrollHeight, clientHeight } = scroller;
        const atTop = scrollTop <= 0;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
        if (e.deltaY > 0 && !atBottom) return;
        if (e.deltaY < 0 && !atTop) return;
      }
      if (lock || Math.abs(e.deltaY) < 20) return;
      lock = true; setTimeout(() => { lock = false; }, 700);
      setIndex((i) => Math.max(0, Math.min(total - 1, i + (e.deltaY > 0 ? 1 : -1))));
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    let touchY = 0;
    const onTS = (e: TouchEvent) => { touchY = e.touches[0].clientY; };
    const onTE = (e: TouchEvent) => {
      const dy = touchY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 60) {
        setIndex((i) => Math.max(0, Math.min(total - 1, i + (dy > 0 ? 1 : -1))));
      }
    };
    window.addEventListener("touchstart", onTS, { passive: true });
    window.addEventListener("touchend", onTE, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTS);
      window.removeEventListener("touchend", onTE);
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll("[data-slide-index]").forEach((el) => {
      const i = Number((el as HTMLElement).dataset.slideIndex);
      el.classList.toggle("is-active", i === index);
    });
    const active = document.querySelector(`[data-slide-index="${index}"]`);
    active?.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }, [index]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10];

  return (
    <main className="fixed inset-0 overflow-hidden bg-white text-ink">
      <Nav />

      <div className="fixed top-0 inset-x-0 h-[3px] z-[60]">
        <div className="h-full transition-all duration-500 bg-gradient-to-r from-[#39ff14] via-[#00bfff] to-[#8a2be2]"
             style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{ transform: `translateX(-${index * 100}vw)`, width: `${total * 100}vw` }}
      >
        {slides.map((S, i) => (
          <div
            key={i}
            data-slide-index={i}
            data-slide-scroll
            className="h-full w-screen shrink-0 overflow-y-auto"
          >
            <S />
          </div>
        ))}
      </div>

      <button
        aria-label="Précédent"
        onClick={() => go(index - 1)}
        disabled={index === 0}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-[55] h-12 w-12 rounded-full glass flex items-center justify-center text-ink hover:scale-110 transition disabled:opacity-30 disabled:pointer-events-none backdrop-blur-xl border border-white/10 shadow-lg"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        aria-label="Suivant"
        onClick={() => go(index + 1)}
        disabled={index === total - 1}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-[55] h-12 w-12 rounded-full glass flex items-center justify-center text-ink hover:scale-110 transition disabled:opacity-30 disabled:pointer-events-none backdrop-blur-xl border border-white/10 shadow-lg"
      >
        <FaChevronRight size={20} />
      </button>

      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[55] flex items-center gap-2 glass rounded-full px-4 py-2 backdrop-blur-xl border border-white/10 shadow-lg">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => go(i)}
            className="h-2 rounded-full transition-all"
            style={{
              width: i === index ? 28 : 8,
              background: i === index ? "linear-gradient(90deg, #39ff14, #00bfff)" : "rgba(0,0,0,0.15)",
            }}
          />
        ))}
        <span className="ml-2 font-display text-[10px] tracking-[0.3em] text-muted-ink flex items-center gap-1">
          <FaSlidersH size={10} />
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <button
        aria-label="Retour en haut"
        className={`fixed bottom-8 right-8 z-50 hidden items-center justify-center rounded-full p-3 opacity-0 transition-all duration-300 ${
          showBackToTop ? "flex opacity-100" : ""
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ background: "linear-gradient(135deg, #39ff14, #00bfff)", boxShadow: "0 10px 30px rgba(57,255,20,0.35)" }}
      >
        <FaChevronUp size={20} className="text-ink" />
      </button>
    </main>
  );
}

export default Pitch;