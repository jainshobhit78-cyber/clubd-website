"use client";

import {
  Apple,
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Blocks,
  ChevronRight,
  CirclePlay,
  Crown,
  Dumbbell,
  Flame,
  Footprints,
  Gamepad2,
  Gem,
  Globe2,
  GraduationCap,
  Menu,
  Orbit,
  Play,
  QrCode,
  Radar,
  Rotate3D,
  Shirt,
  ShieldCheck,
  Sparkles,
  Swords,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const proofSignals = [
  "REAL PROGRESS",
  "VERIFIED WINS",
  "YOUR DIGITAL TWIN",
  "NO FAKE FLEX",
  "BUILD YOUR AURA",
  "FIND YOUR PEOPLE",
];

const proofRush = [
  { action: "FIT CHECK", signal: "+34 AURA", tone: "pink" },
  { action: "TOP BINS", signal: "GOAL VERIFIED", tone: "lime" },
  { action: "BENCH PR", signal: "145 KG", tone: "violet" },
  { action: "SHIP MODE", signal: "47 DAY PULSE", tone: "cyan" },
  { action: "POSTERIZED", signal: "+88 AURA", tone: "pink" },
  { action: "NEW PB", signal: "11.42 SEC", tone: "lime" },
];

const liveProofs = [
  { name: "Vishal", handle: "@vishal.lifts", proof: "VISHAL HIT A 175 KG DEADLIFT", label: "BREAKING · NEW PR", detail: "VERIFIED · TOP 7% NEARBY", meta: "1 AUG · 10:31 PM · GOLD'S GYM, NEW DELHI", tone: "violet", avatar: "vishal" },
  { name: "Tanya", handle: "@tanya.stylefile", proof: "TANYA ADDED NIKE JORDAN 1 TO HER VAULT", label: "JUST IN · STYLE DROP", detail: "OWNERSHIP VERIFIED · +200 AURA", meta: "1 AUG · 10:24 PM · SELECT CITYWALK, NEW DELHI", tone: "pink", avatar: "tanya" },
  { name: "Rohan", handle: "@rohan.builds", proof: "ROHAN COMPLETED A 47 DAY CODE STREAK", label: "LIVE · STREAK UPGRADED", detail: "GITHUB VERIFIED · +80 AURA", meta: "1 AUG · 10:18 PM · KORAMANGALA, BENGALURU", tone: "cyan", avatar: "rohan" },
  { name: "Zoya", handle: "@zoya.oncourt", proof: "ZOYA SCORED THE MATCH WINNER", label: "BREAKING · FULL TIME", detail: "CLUB VERIFIED · UP 12 SPOTS", meta: "1 AUG · 10:09 PM · BANDRA, MUMBAI", tone: "lime", avatar: "zoya" },
];

const twinProofCards = [
  {
    icon: Dumbbell,
    eyebrow: "BENCH PRESS PR",
    value: "175 KG",
    detail: "GYM VERIFIED",
    boost: "+120 AURA",
    tone: "cyan",
    slot: "one",
    phase: "a",
  },
  {
    icon: Dumbbell,
    eyebrow: "BICEPS",
    value: "18 IN",
    detail: "TOP 18% NEARBY",
    boost: "+65 AURA",
    tone: "lime",
    slot: "two",
    phase: "a",
  },
  {
    icon: Footprints,
    eyebrow: "NIKE / VAULT",
    value: "JORDAN 1",
    detail: "OWNERSHIP VERIFIED",
    boost: "+200 AURA",
    tone: "pink",
    slot: "three",
    phase: "a",
  },
  {
    icon: Blocks,
    eyebrow: "CODING STREAK",
    value: "120 DAYS",
    detail: "GITHUB VERIFIED",
    boost: "+140 AURA",
    tone: "violet",
    slot: "four",
    phase: "a",
  },
  {
    icon: Shirt,
    eyebrow: "STYLE VAULT",
    value: "TECH JACKET",
    detail: "PRODUCT VERIFIED",
    boost: "+80 AURA",
    tone: "pink",
    slot: "one",
    phase: "b",
  },
  {
    icon: Gamepad2,
    eyebrow: "ESPORTS RANK",
    value: "TOP 2%",
    detail: "DIAMOND DIVISION",
    boost: "+180 AURA",
    tone: "violet",
    slot: "two",
    phase: "b",
  },
  {
    icon: Trophy,
    eyebrow: "FOOTBALL SEASON",
    value: "23 GOALS",
    detail: "CLUB VERIFIED",
    boost: "+160 AURA",
    tone: "lime",
    slot: "three",
    phase: "b",
  },
  {
    icon: Zap,
    eyebrow: "100M SPRINT PB",
    value: "11.42 SEC",
    detail: "EVENT VERIFIED",
    boost: "+95 AURA",
    tone: "cyan",
    slot: "four",
    phase: "b",
  },
];

const statCards = [
  {
    icon: Gem,
    eyebrow: "THE VAULT",
    value: "₹2.84L",
    note: "Verified collection value / Every piece has receipts",
    tags: ["5 SNEAKERS", "4 BAGS", "3 SHADES", "6 FITS"],
    status: "18 PRODUCT BADGES LOCKED",
    tone: "pink",
    featured: true,
  },
  {
    icon: Crown,
    eyebrow: "GRAIL TIER",
    value: "3 RARE",
    note: "Top 4% collection rarity / The pieces people chase",
    tags: ["JORDAN 1", "LV SLING", "OAKLEY X"],
    status: "COLLECTION HEAT: HIGH",
    tone: "lime",
  },
  {
    icon: Flame,
    eyebrow: "AURA",
    value: "2,480",
    note: "+126 from verified products, rare drops and reactions",
    tags: ["RARE DROP +80", "NEW BADGE +46"],
    status: "SIGNAL RISING",
    tone: "cyan",
  },
  {
    icon: Zap,
    eyebrow: "FLEX SCORE",
    value: "874",
    note: "Powered by Vault authenticity, rarity and community heat",
    tags: ["VALUE 42%", "RARITY 33%", "HEAT 25%"],
    status: "ELITE TIER",
    tone: "violet",
  },
];

const features = [
  {
    icon: BadgeCheck,
    kicker: "PROOF LAYER",
    title: "Turn real wins into verified identity.",
    copy: "A PR, a tournament win, a course, a product drop—every proof-backed moment becomes a badge that lives with you.",
    tone: "cyan",
    detail: "ISSUED BY CLUBS · BRANDS · PLATFORMS",
  },
  {
    icon: Flame,
    kicker: "FLEX FEED",
    title: "A feed worth opening.",
    copy: "See what people actually achieved—not what they pretended to be. React, rank, verify and gas up the grind.",
    tone: "pink",
    detail: "LOCAL · LIVE · CATEGORY-BASED",
  },
  {
    icon: Gem,
    kicker: "VAULT",
    title: "Your wins. Your products. Your collection.",
    copy: "Store achievement badges, sneaker badges, event cards and the proof behind every collectible.",
    tone: "violet",
    detail: "FLIP THE CARD TO SEE THE STORY",
  },
  {
    icon: Users,
    kicker: "CLUBS",
    title: "Find the people who get it.",
    copy: "Train, build and compete inside trusted communities with mentors, coaches and club-issued proof.",
    tone: "lime",
    detail: "ZERO NPC ENERGY",
  },
];

const journeyMoments = [
  ["DAY 001", "Twin activated", "Builder identity installed"],
  ["DAY 014", "First proof", "30-day coding streak"],
  ["DAY 047", "Level up", "Bench PR · 120 → 145 KG"],
  ["DAY 093", "Rare drop", "Jordan Vault badge added"],
];

function StoreButton({
  apple = false,
  onClick,
}: {
  apple?: boolean;
  onClick: () => void;
}) {
  const Icon = apple ? Apple : Play;

  return (
    <button className="store-button" onClick={onClick} type="button">
      <Icon aria-hidden="true" fill="currentColor" size={24} />
      <span>
        <small>{apple ? "COMING TO THE" : "COMING TO"}</small>
        <strong>{apple ? "App Store" : "Google Play"}</strong>
      </span>
      <ChevronRight aria-hidden="true" size={17} />
    </button>
  );
}

function PhoneFrame({
  className = "",
  image,
  label,
  priority = false,
}: {
  className?: string;
  image: string;
  label: string;
  priority?: boolean;
}) {
  return (
    <figure className={`phone-frame ${className}`}>
      <div className="phone-speaker" />
      <Image
        alt={label}
        fill
        priority={priority}
        sizes="(max-width: 760px) 78vw, 360px"
        src={image}
        unoptimized
      />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export function ClubDHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [twinCardFlipped, setTwinCardFlipped] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const updatePointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    const revealNodes = document.querySelectorAll(".reveal");
    revealNodes.forEach((node) => observer.observe(node));

    const proofStage = document.querySelector(".proof-rush-stage");
    const scanObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        entry.target.classList.add("is-scanning");
        scanObserver.unobserve(entry.target);
      },
      { threshold: 0.34 },
    );
    if (proofStage) scanObserver.observe(proofStage);

    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      observer.disconnect();
      scanObserver.disconnect();
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  const showLaunchNotice = () => {
    setNotice("DROP ALERT LOCKED · STORE LINKS GO LIVE AT LAUNCH");
    window.setTimeout(() => setNotice(""), 3200);
  };

  return (
    <main>
      <div className="site-noise" aria-hidden="true" />
      <div className="pointer-aura" aria-hidden="true" />

      <header className="site-header">
        <a aria-label="ClubD home" className="wordmark" href="#top">
          CLUB<span>D</span>
        </a>
        <nav className={menuOpen ? "is-open" : ""}>
          <a href="#twin" onClick={() => setMenuOpen(false)}>
            Digital Twin
          </a>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            The System
          </a>
          <a href="#worlds" onClick={() => setMenuOpen(false)}>
            Explore
          </a>
          <a href="#download" onClick={() => setMenuOpen(false)}>
            Get ClubD
          </a>
        </nav>
        <a className="header-cta" href="#download">
          GET EARLY ACCESS <ArrowRight size={15} />
        </a>
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-signal hero-signal-one" aria-hidden="true" />
        <div className="hero-signal hero-signal-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            THE NEW-GEN SOCIAL APP FOR REAL-LIFE FLEX
          </p>
          <h1>
            PROOF IS THE
            <br />
            NEW <em>PROFILE.</em>
          </h1>
          <p className="hero-lede">
            <strong>ClubD turns your real life into a social profile.</strong>
            Your wins, skills, stats, style and verified products build one
            living Digital Twin—made to flex, share, rank and level up.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#download">
              BUILD YOUR TWIN
              <ArrowRight size={18} />
            </a>
            <a className="text-button" href="#twin">
              <CirclePlay size={21} /> SEE CLUBD IN ACTION
            </a>
          </div>
          <div className="hero-proof">
            <span>
              <Flame size={16} /> FLEX FEED
            </span>
            <span>
              <Orbit size={16} /> LIVING DIGITAL TWIN
            </span>
            <span>
              <Gem size={16} /> VERIFIED VAULT
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="ClubD app preview">
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />
          <PhoneFrame
            className="hero-phone"
            image="/clubd-splash.jpeg"
            label="ClubD identity and achievement experience"
            priority
          />
          <div className="floating-proof proof-one">
            <span>
              <Dumbbell size={15} />
            </span>
            <small>NEW PR</small>
            <strong>145 KG</strong>
            <i>+18 AURA</i>
          </div>
          <div className="floating-proof proof-two">
            <span>
              <Trophy size={15} />
            </span>
            <small>ARENA RANK</small>
            <strong>TOP 5%</strong>
            <i>↑ 12</i>
          </div>
          <div className="floating-proof proof-three">
            <span>
              <Shirt size={15} />
            </span>
            <small>VAULT DROP</small>
            <strong>JORDAN 1</strong>
            <i>RARE</i>
          </div>
          <div className="hero-sticker">NO FAKE FLEX</div>
        </div>

        <a aria-label="Scroll to learn more" className="scroll-cue" href="#intro">
          SCROLL TO ENTER <ArrowDown size={15} />
        </a>
      </section>

      <div className="proof-marquee" aria-label="ClubD values">
        <div>
          {[...proofSignals, ...proofSignals].map((signal, index) => (
            <span key={`${signal}-${index}`}>
              {signal}
              <Sparkles size={16} />
            </span>
          ))}
        </div>
      </div>

      <section className="proof-rush" aria-label="Real life becoming live proof">
        <div className="proof-rush-heading">
          <span>LIVE / ALL GRINDS</span>
          <strong className="proof-rush-title" aria-label="The world is flexing right now">
            <span aria-hidden="true">THE WORLD IS</span>
            <em aria-hidden="true">FLEXING</em>
            <b aria-hidden="true">RIGHT NOW.</b>
          </strong>
          <i><span /> SIGNALS HITTING LIVE</i>
        </div>
        <div className="proof-rush-stage">
          <div className="rush-laser rush-laser-one" aria-hidden="true" />
          <div className="rush-laser rush-laser-two" aria-hidden="true" />
          {proofRush.map(({ action, signal, tone }, index) => (
            <article
              className={`proof-rush-card rush-${index + 1} ${tone}`}
              key={action}
            >
              <div className="rush-character" aria-hidden="true" />
              <div className="rush-activity">
                <small>{action}</small>
                <strong>{signal}</strong>
              </div>
            </article>
          ))}
        </div>
        <div className="proof-rush-feed" aria-label="Live ClubD proof updates">
          <div className="live-proof-window">
            {[...liveProofs, ...liveProofs].map((proof, index) => (
                <article className={`live-proof-card ${proof.tone}`} key={`${proof.name}-${index}`}>
                  <div className="live-proof-profile">
                    <div className={`live-proof-avatar ${proof.avatar}`} aria-hidden="true">
                      <span>{proof.name.slice(0, 1)}</span>
                    </div>
                    <div className="live-proof-person">
                      <small>JUST CHECKED IN</small>
                      <strong>{proof.name}</strong>
                      <span>{proof.handle}</span>
                    </div>
                  </div>
                  <div className="live-proof-copy">
                    <small><BadgeCheck size={14} aria-hidden="true" /> {proof.label}</small>
                    <strong>{proof.proof}</strong>
                    <em>{proof.detail}</em>
                    <span className="live-proof-meta">{proof.meta}</span>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </section>

      <section className="campaign-section reveal" id="campaign" aria-label="ClubD proof campaign">
        <div className="campaign-topline">
          <span>CLUBD / MANIFESTO 002</span>
          <span><i /> LIVE IDENTITY SIGNAL</span>
        </div>
        <div className="campaign-frame">
          <Image
            alt="A ClubD Digital Twin evolving through real-life proof"
            className="campaign-image"
            fill
            sizes="(max-width: 900px) 100vw, 94vw"
            src="/og-twin-v3.png"
            unoptimized
          />
          <Image
            alt=""
            aria-hidden="true"
            className="campaign-glitch campaign-glitch-cyan"
            fill
            sizes="(max-width: 900px) 100vw, 94vw"
            src="/og-twin-v3.png"
            unoptimized
          />
          <Image
            alt=""
            aria-hidden="true"
            className="campaign-glitch campaign-glitch-pink"
            fill
            sizes="(max-width: 900px) 100vw, 94vw"
            src="/og-twin-v3.png"
            unoptimized
          />
          <div className="campaign-twin-copy">
            <span className="campaign-twin-kicker">
              <Orbit size={13} /> YOUR LIVING DIGITAL TWIN
            </span>
            <h3>
              THE REAL YOU.
              <br />
              <em>NOW ALIVE.</em>
            </h3>
            <p>
              What you wear. The stats you earn. The skills you build. The
              wins you prove.
            </p>
            <div className="campaign-twin-tags" aria-label="Digital Twin attributes">
              <span>STYLE</span>
              <span>STATS</span>
              <span>SKILLS</span>
              <span>WINS</span>
            </div>
            <strong>
              ONE TWIN THAT <i>EVOLVES</i>
              <br />
              WHEN REAL LIFE DOES.
            </strong>
          </div>
          <div className="twin-proof-cloud" aria-label="Examples of proof added to a Digital Twin">
            {twinProofCards.map(
              ({ boost, detail, eyebrow, icon: Icon, phase, slot, tone, value }) => (
                <article
                  className={`campaign-proof-card proof-${tone} proof-slot-${slot} proof-phase-${phase}`}
                  key={`${eyebrow}-${phase}`}
                >
                  <span className="campaign-proof-icon">
                    <Icon size={17} />
                  </span>
                  <div>
                    <small>{eyebrow}</small>
                    <strong>{value}</strong>
                    <p>{detail}</p>
                  </div>
                  <b>{boost}</b>
                  <BadgeCheck className="campaign-proof-check" size={13} />
                </article>
              ),
            )}
          </div>
          <div className="campaign-scan" aria-hidden="true" />
          <div className="campaign-noise" aria-hidden="true" />
          <span className="campaign-corner campaign-corner-one" aria-hidden="true" />
          <span className="campaign-corner campaign-corner-two" aria-hidden="true" />
        </div>
        <div className="campaign-caption">
          <p>STYLE · STATS · SKILLS · WINS</p>
          <strong>EVERY REAL MOVE UPDATES THE DIGITAL YOU.</strong>
          <span>PROOF IN / YOUR TWIN EVOLVES ↓</span>
        </div>
      </section>

      <section className="intro-section reveal" id="intro">
        <p className="section-index">01 · THE SHIFT</p>
        <div>
          <p className="script-line">Your profile should hit different.</p>
          <h2>
            THE INTERNET KNOWS
            <br />
            WHAT YOU <span>POST.</span>
            <br />
            CLUBD KNOWS WHAT
            <br />
            YOU’VE <em>DONE.</em>
          </h2>
        </div>
        <aside>
          <p>
            ClubD turns your real-world progress into a social identity that
            grows with every proof-backed win.
          </p>
          <span>
            FITNESS · SPORTS · EDUCATION · CODING · STYLE · GAMING · CREATIVE
          </span>
        </aside>
      </section>

      <section className="twin-section" id="twin">
        <div className="twin-copy reveal">
          <p className="section-index">02 · YOUR LIVING IDENTITY</p>
          <p className="eyebrow cyan">
            <Orbit size={15} /> DIGITAL TWIN / VERSION 001
          </p>
          <h2>
            IT LOOKS LIKE YOU.
            <br />
            IT LEVELS UP
            <br />
            <span>BECAUSE OF YOU.</span>
          </h2>
          <p>
            Your Twin brings every side of you into one evolving identity.
            Add the fit. Link the stat. Verify the win. Let the world watch
            your signal get louder.
          </p>
          <a className="line-link" href="#features">
            EXPLORE THE SYSTEM <ArrowRight size={17} />
          </a>
        </div>

        <div className="twin-lab reveal">
          <div className="twin-lab-grid" aria-hidden="true" />
          <div className="twin-platform" aria-hidden="true" />
          <Image
            alt="A futuristic ClubD Digital Twin"
            className="twin-person"
            height={1821}
            sizes="(max-width: 760px) 60vw, 360px"
            src="/clubd-twin.webp"
            unoptimized
            width={864}
          />
          <div className="twin-scan" aria-hidden="true" />
          <div className="twin-node node-style">
            <Shirt size={14} />
            <span>
              <small>FASHION</small>
              <strong>FIT SCORE 92</strong>
            </span>
          </div>
          <div className="twin-node node-fitness">
            <Dumbbell size={14} />
            <span>
              <small>STRENGTH</small>
              <strong>175 KG PR</strong>
            </span>
          </div>
          <div className="twin-node node-build">
            <Sparkles size={14} />
            <span>
              <small>SKILL</small>
              <strong>BUILDER LVL 47</strong>
            </span>
          </div>
          <div className="twin-node node-aura">
            <Flame size={14} />
            <span>
              <small>AURA</small>
              <strong>2,480 · ↑ 126</strong>
            </span>
          </div>
          <div className="twin-node node-flex">
            <Zap size={14} />
            <span>
              <small>FLEX SCORE</small>
              <strong>874 · ELITE</strong>
            </span>
          </div>
          <span className="twin-status">
            <i /> TWIN ONLINE
          </span>
        </div>
      </section>

      <section className="stats-section reveal" aria-label="Example ClubD stats">
        <div className="stats-heading">
          <div>
            <p>YOUR FLEX HAS RECEIPTS.</p>
            <span>Sneakers, bags, shades and fits become verified badges—not empty claims.</span>
          </div>
          <h2>YOUR VAULT.<br /><em>YOUR FLEX.</em></h2>
        </div>
        <div className="stat-card-row">
          {statCards.map(({ eyebrow, featured, icon: Icon, note, status, tags, tone, value }) => (
            <article className={`stat-card ${tone}${featured ? " featured" : ""}`} key={eyebrow}>
              <span>
                <Icon size={18} />
              </span>
              <small>{eyebrow}</small>
              <strong>{value}</strong>
              <p>{note}</p>
              <div className="stat-tags">
                {tags.map((tag) => <b key={tag}>{tag}</b>)}
              </div>
              <i>
                {status} <BadgeCheck size={12} />
              </i>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section" id="features">
        <header className="section-heading reveal">
          <div>
            <p className="section-index">03 · THE CLUBD SYSTEM</p>
            <h2>
              BUILT FOR THE
              <br />
              <span>MULTI-HYPHENATE YOU.</span>
            </h2>
          </div>
          <p className="identity-role-copy">
            <span className="identity-role-tags">
              <b>ATHLETE</b>
              <b>CODER</b>
              <b>COLLECTOR</b>
              <b>STUDENT</b>
              <b>CREATOR</b>
            </span>
            <span>
              You were never one thing—your profile shouldn’t be either.
            </span>
          </p>
        </header>

        <div className="feature-grid">
          {features.map(({ copy, detail, icon: Icon, kicker, title, tone }) => (
            <article className={`feature-card ${tone} reveal`} key={kicker}>
              <div className="feature-topline">
                <span>
                  <Icon size={19} />
                </span>
                <small>{kicker}</small>
                <ArrowRight size={16} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <footer>{detail}</footer>
            </article>
          ))}
        </div>
      </section>

      <section className="screens-section" id="worlds">
        <header className="section-heading reveal">
          <div>
            <p className="section-index">04 · INSIDE THE CLUB</p>
            <h2>
              ONE APP.
              <br />
              <span>YOUR WHOLE ERA.</span>
            </h2>
          </div>
          <p>Swipe the story. Flex the proof. Build a Twin worth scanning.</p>
        </header>

        <div className="screen-gallery reveal">
          <PhoneFrame
            className="screen-one"
            image="/clubd-welcome.jpeg"
            label="ClubD welcome experience"
          />
          <PhoneFrame
            className="screen-two"
            image="/clubd-flex-feed-live.png"
            label="The real ClubD Flex Feed preview"
          />
          <PhoneFrame
            className="screen-three"
            image="/clubd-onboarding.jpeg"
            label="Build your ClubD Digital Twin"
          />
          <div className="screen-note note-one">
            <Flame size={16} /> FLEX FEED
          </div>
          <div className="screen-note note-two">
            <QrCode size={16} /> SCAN THE TWIN
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-copy reveal">
          <p className="section-index">05 · YOUR JOURNEY</p>
          <h2>
            NOT A TIMELINE.
            <br />
            <span>A PROOF TRAIL.</span>
          </h2>
          <p>
            Every chapter stays connected: when you started, what changed,
            who verified it and how far you’ve climbed since.
          </p>
        </div>
        <div className="journey-track reveal">
          {journeyMoments.map(([day, title, note], index) => (
            <article key={day}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <small>{day}</small>
                <strong>{title}</strong>
                <p>{note}</p>
              </div>
              <BadgeCheck size={19} />
            </article>
          ))}
        </div>
      </section>

      <section className="world-section reveal">
        <div className="world-card clubs-card">
          <span className="world-icon">
            <Users />
          </span>
          <p>CLUBS</p>
          <h3>YOUR PEOPLE GET IT.</h3>
          <span className="world-script">pull up. we’re on.</span>
          <div className="avatar-stack" aria-label="Club members">
            <i>SJ</i>
            <i>AJ</i>
            <i>RM</i>
            <i>YOU</i>
          </div>
          <small>TRAIN · BUILD · VERIFY · RISE</small>
        </div>
        <div className="world-card arena-card">
          <span className="world-icon">
            <Swords />
          </span>
          <p>ARENA</p>
          <h3>SETTLE IT WITH PROOF.</h3>
          <span className="world-script">challenges hit different.</span>
          <div className="versus">
            <i>YOU</i>
            <strong>VS</strong>
            <i>THEM</i>
          </div>
          <small>CHALLENGES · TOURNAMENTS · EVENTS</small>
        </div>
        <div className="world-card colosseum-card">
          <span className="world-icon">
            <Crown />
          </span>
          <p>COLOSSEUM</p>
          <h3>WHERE TALENT GETS SEEN.</h3>
          <span className="world-script">top signal only.</span>
          <div className="podium">
            <i>02</i>
            <i>01</i>
            <i>03</i>
          </div>
          <small>BRANDS · SCOUTS · SPONSORS · TALENT</small>
        </div>
      </section>

      <section className="download-section" id="download">
        <div className="download-radar" aria-hidden="true">
          <Radar />
          <i />
          <i />
          <i />
        </div>
        <div className="download-copy reveal">
          <p className="eyebrow">
            <Zap size={15} />
            YOUR NEXT ERA IS LOADING
          </p>
          <h2>
            BUILD THE PROFILE
            <br />
            YOU CAN’T <span>FAKE.</span>
          </h2>
          <p>
            ClubD is coming to Android and iOS. Lock your drop alert and be
            first to build your Digital Twin.
          </p>
          <div className="store-row">
            <StoreButton onClick={showLaunchNotice} />
            <StoreButton apple onClick={showLaunchNotice} />
          </div>
          <small>
            <Globe2 size={13} /> INDIA FIRST · BUILT FOR EVERY GRIND
          </small>
        </div>
        <div className="download-card-stack reveal">
          <div className="showcase-card-shell">
            <div
              aria-label={`Anaya Rao's Digital Twin card. ${twinCardFlipped ? "Showing proof and stats side" : "Showing identity side"}. Press Enter to flip.`}
              aria-pressed={twinCardFlipped}
              className={`showcase-card-stage ${twinCardFlipped ? "is-flipped" : ""}`}
              onClick={() => setTwinCardFlipped((current) => !current)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setTwinCardFlipped((current) => !current);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="showcase-card-rotor">
                <article className="showcase-card-face showcase-card-front">
                  <header className="showcase-card-chrome">
                    <span>CLUBD / DT–026</span>
                    <b>ICON</b>
                    <i>#1987</i>
                  </header>

                  <div className="showcase-card-photo">
                    <Image
                      alt="Anaya Rao's ClubD Digital Twin portrait"
                      fill
                      sizes="(max-width: 560px) 80vw, 380px"
                      src="/twin-card-anaya.webp"
                      unoptimized
                    />
                    <span className="showcase-card-scan" />
                    <span className="showcase-verified-pill">
                      <BadgeCheck size={13} /> PROOF LOCKED
                    </span>
                    <span className="showcase-level-pill">LVL 34</span>
                  </div>

                  <div className="showcase-card-identity">
                    <small>TASTEMAKER / LIVING IDENTITY</small>
                    <h3>ANAYA RAO</h3>
                    <p>@ANAYA.AFTERDARK · DELHI</p>
                  </div>

                  <div className="showcase-signature-stat">
                    <span>
                      <small>SIGNATURE STAT</small>
                      <strong>FIT AURA</strong>
                    </span>
                    <b>92<small>%</small></b>
                    <em>+11 THIS SEASON</em>
                  </div>

                  <footer className="showcase-card-metrics">
                    <span><Zap size={12} /> 1,260 AURA</span>
                    <span><Flame size={12} /> 47D PULSE</span>
                    <span><ShieldCheck size={12} /> 9 VERIFIED</span>
                  </footer>
                </article>

                <article className="showcase-card-face showcase-card-back">
                  <header className="showcase-card-chrome">
                    <span>BACK / RECEIPTS</span>
                    <b>ICON</b>
                    <i>LIVE</i>
                  </header>

                  <div className="showcase-proof-reel">
                    <Image
                      alt="Anaya Rao wearing her verified sneaker and jacket fit"
                      fill
                      sizes="(max-width: 560px) 80vw, 380px"
                      src="/twin-card-proof.webp"
                      unoptimized
                    />
                    <span className="showcase-reel-live"><i /> PROOF REEL</span>
                    <div>
                      <strong>OWNED IRL / FIT CHECK</strong>
                      <small>ISSUED BY SOLE SOCIETY × CLUBD</small>
                    </div>
                  </div>

                  <section className="showcase-stat-stack">
                    <header><b>STAT STACK</b><span>LIVE FROM THE ARC</span></header>
                    <div>
                      <article><small>FIT AURA</small><strong>92<em>%</em></strong></article>
                      <article><small>DEADLIFT</small><strong>140<em>KG</em></strong></article>
                      <article><small>SHIP STREAK</small><strong>90<em>D</em></strong></article>
                    </div>
                  </section>

                  <section className="showcase-badge-strip">
                    <article><Trophy size={13} /><strong>OWNED IRL</strong><small>RARE</small></article>
                    <article><Dumbbell size={13} /><strong>PLATE MOVER</strong><small>EPIC</small></article>
                    <article><Blocks size={13} /><strong>NIGHT SHIPPER</strong><small>RARE</small></article>
                  </section>

                  <div className="showcase-qr-strip">
                    <QrCode size={24} />
                    <span><strong>SCAN INTO THIS TWIN</strong><small>PUBLIC LINK · OWNER CONTROLLED</small></span>
                    <ArrowRight size={15} />
                  </div>
                </article>
              </div>
            </div>

            <button
              className="showcase-flip-control"
              onClick={() => setTwinCardFlipped((current) => !current)}
              type="button"
            >
              <Rotate3D size={18} />
              {twinCardFlipped ? "SHOW IDENTITY SIDE" : "FLIP FOR PROOF + STATS"}
            </button>
            <small className="showcase-card-hint">TAP THE CARD · SEE THE RECEIPTS</small>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <a className="wordmark" href="#top">
            CLUB<span>D</span>
          </a>
          <p>REAL PROGRESS. REAL RECOGNITION. REAL YOU.</p>
        </div>
        <div className="footer-links">
          <a href="#twin">Digital Twin</a>
          <a href="#features">The System</a>
          <a href="#worlds">Explore</a>
          <a href="#download">Download</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CLUBD. ALL SIGNALS RESERVED.</span>
          <span>MADE FOR THE LOCKED-IN GENERATION.</span>
        </div>
      </footer>

      {notice ? (
        <div className="launch-notice" role="status">
          <BadgeCheck size={17} />
          {notice}
        </div>
      ) : null}
    </main>
  );
}
