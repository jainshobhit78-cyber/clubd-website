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
  Gem,
  Globe2,
  GraduationCap,
  Menu,
  Orbit,
  Play,
  QrCode,
  Radar,
  Shirt,
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

const statCards = [
  {
    icon: Dumbbell,
    eyebrow: "STRENGTH",
    value: "145 KG",
    note: "Bench PR · Top 8% nearby",
    tone: "lime",
  },
  {
    icon: GraduationCap,
    eyebrow: "BUILD STREAK",
    value: "47 DAYS",
    note: "Verified GitHub activity",
    tone: "cyan",
  },
  {
    icon: Shirt,
    eyebrow: "STYLE VAULT",
    value: "18 PIECES",
    note: "3 rare sneaker badges",
    tone: "pink",
  },
  {
    icon: Trophy,
    eyebrow: "ARENA",
    value: "TOP 5%",
    note: "Climbed 12 spots this week",
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
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      observer.disconnect();
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
            YOUR REAL LIFE. NOW WITH STATS.
          </p>
          <h1>
            PROOF IS THE
            <br />
            NEW <em>PROFILE.</em>
          </h1>
          <p className="hero-lede">
            Build a living Digital Twin from what you actually do—your wins,
            skills, style, stats, badges and the people who back your journey.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#download">
              BUILD YOUR TWIN
              <ArrowRight size={18} />
            </a>
            <a className="text-button" href="#twin">
              <CirclePlay size={21} /> SEE HOW IT WORKS
            </a>
          </div>
          <div className="hero-proof">
            <span>
              <BadgeCheck size={16} /> VERIFIED PROGRESS
            </span>
            <span>
              <Orbit size={16} /> ONE EVOLVING IDENTITY
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
          <strong>THE WORLD IS FLEXING RIGHT NOW.</strong>
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
        <div className="proof-rush-feed" aria-hidden="true">
          <div>
            <span>VISHAL JUST LOCKED A 145 KG BENCH</span><i />
            <span>TANYA ADDED RARE SNEAKERS TO HER VAULT</span><i />
            <span>ROHAN SHIPPED HIS 47TH DAY OF CODE</span><i />
            <span>ZOYA SCORED THE WINNER</span><i />
            <span>VISHAL JUST LOCKED A 145 KG BENCH</span><i />
            <span>TANYA ADDED RARE SNEAKERS TO HER VAULT</span><i />
            <span>ROHAN SHIPPED HIS 47TH DAY OF CODE</span><i />
            <span>ZOYA SCORED THE WINNER</span><i />
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
            alt="ClubD — Proof is the new profile"
            className="campaign-image"
            fill
            sizes="(max-width: 900px) 100vw, 94vw"
            src="/og.png"
            unoptimized
          />
          <Image
            alt=""
            aria-hidden="true"
            className="campaign-glitch campaign-glitch-cyan"
            fill
            sizes="(max-width: 900px) 100vw, 94vw"
            src="/og.png"
            unoptimized
          />
          <Image
            alt=""
            aria-hidden="true"
            className="campaign-glitch campaign-glitch-pink"
            fill
            sizes="(max-width: 900px) 100vw, 94vw"
            src="/og.png"
            unoptimized
          />
          <div className="campaign-scan" aria-hidden="true" />
          <div className="campaign-noise" aria-hidden="true" />
          <span className="campaign-chip campaign-chip-one">
            <BadgeCheck size={14} /> PROOF LAYER LOCKED
          </span>
          <span className="campaign-chip campaign-chip-two">
            <Zap size={14} /> TWIN SIGNAL / 100%
          </span>
          <span className="campaign-corner campaign-corner-one" aria-hidden="true" />
          <span className="campaign-corner campaign-corner-two" aria-hidden="true" />
        </div>
        <div className="campaign-caption">
          <p>NOT A BIO. NOT A HIGHLIGHT REEL.</p>
          <strong>ONE LIVING IDENTITY BUILT FROM THE RECEIPTS.</strong>
          <span>SCROLL / THE SIGNAL GETS LOUDER ↓</span>
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
              <small>STYLE MODULE</small>
              <strong>SIGNATURE FIT</strong>
            </span>
          </div>
          <div className="twin-node node-fitness">
            <Dumbbell size={14} />
            <span>
              <small>POWER MATRIX</small>
              <strong>TOP 8%</strong>
            </span>
          </div>
          <div className="twin-node node-build">
            <Blocks size={14} />
            <span>
              <small>BUILDER OS</small>
              <strong>47 DAY PULSE</strong>
            </span>
          </div>
          <span className="twin-status">
            <i /> TWIN ONLINE
          </span>
        </div>
      </section>

      <section className="stats-section reveal" aria-label="Example ClubD stats">
        <div className="stats-heading">
          <p>YOUR LIFE ALREADY HAS STATS.</p>
          <h2>WE JUST MAKE THEM HIT.</h2>
        </div>
        <div className="stat-card-row">
          {statCards.map(({ eyebrow, icon: Icon, note, tone, value }) => (
            <article className={`stat-card ${tone}`} key={eyebrow}>
              <span>
                <Icon size={18} />
              </span>
              <small>{eyebrow}</small>
              <strong>{value}</strong>
              <p>{note}</p>
              <i>
                VERIFIED <BadgeCheck size={12} />
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
          <p>
            Athlete. Coder. Collector. Student. Creator. You were never one
            thing—your profile shouldn’t be either.
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
        <div className="download-card-stack reveal" aria-hidden="true">
          <div className="identity-card card-back">
            <span>PROOF SIDE</span>
            <strong>47 DAYS</strong>
            <b>CODING PULSE</b>
            <i>VERIFIED / 001</i>
          </div>
          <div className="identity-card card-front">
            <small>CLUBD DIGITAL TWIN</small>
            <strong>SJ</strong>
            <p>@SHOBHIT.J</p>
            <span>LVL 28 · BUILDER</span>
            <QrCode size={39} />
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
