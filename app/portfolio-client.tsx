'use client';

import { useEffect, useMemo, useState } from 'react';

type Profile = { name: string; role?: string; tagline?: string };
type Work = { title: string; type: string; image: string; video: string; copy: string };

const works: Work[] = [
  { title: 'Cinematic Automotive', type: 'AI FILM', image: '/media/automotive.webp', video: '/media/automotive.mp4', copy: 'Luxury automotive storytelling with cinematic pacing, atmosphere and AI-directed visual language.' },
  { title: 'Editorial Worlds', type: 'AI VISUALS', image: '/media/editorial.webp', video: '/media/editorial.mp4', copy: 'Fashion-led AI imagery shaped as a complete editorial universe rather than a single generated frame.' },
  { title: 'Fantasy Cinema', type: 'AI FILM', image: '/media/fantasy.webp', video: '/media/fantasy.mp4', copy: 'A cinematic fantasy study combining character design, styling, environment and motion.' },
];

const services = [
  ['Creative Direction', 'Concept, art direction and visual language.'],
  ['AI Film', 'Short-form cinematic storytelling and branded motion.'],
  ['Campaign Concepts', 'Ideas designed to work across an entire campaign.'],
  ['AI Visuals', 'High-end still imagery with a coherent art direction.'],
  ['Brand Storytelling', 'Visual stories that make a brand feel distinctive.'],
  ['Social Content', 'Premium content systems for social platforms.'],
];

export default function PortfolioClient({ profile }: { profile: Profile }) {
  const [activeWork, setActiveWork] = useState<Work | null>(null);
  const [showContact, setShowContact] = useState(false);
  const heroWork = useMemo(() => works[0], []);

  useEffect(() => {
    document.body.style.overflow = activeWork || showContact ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeWork, showContact]);

  return (
    <main>
      <header className="navShell">
        <a className="brand" href="#top">{profile.name}</a>
        <nav className="navLinks" aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a>
        </nav>
        <button className="pill dark buttonReset" onClick={() => setShowContact(true)}>LET&apos;S CREATE</button>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy reveal">
          <div className="eyebrow">AI CREATIVE DIRECTOR</div>
          <h1><span className="nameLine">{profile.name}</span><span className="serif accent">CREATIVE</span><span>DIRECTOR</span></h1>
          <p className="lead">Creative direction, AI visuals<br />and cinematic stories.</p>
          <p className="intro">I create visual concepts, campaigns and stories using creative direction and generative tools as one integrated process.</p>
          <a className="pill dark" href="#work">EXPLORE WORK</a>
        </div>

        <figure className="heroPortrait reveal delay1">
          <img src="/media/hero.webp" alt={`${profile.name}, AI Creative Director`} />
          <figcaption>01 / PORTRAIT</figcaption>
        </figure>

        <aside className="heroRail reveal delay2">
          <div className="railList">AI VISUALS<br />BRAND STORIES<br />CINEMATIC CONTENT</div>
          <button className="showreelLabel buttonReset" onClick={() => setActiveWork(heroWork)}><span className="play">▶</span> WATCH SHOWREEL</button>
          <button className="showreelCard buttonReset" onClick={() => setActiveWork(heroWork)} aria-label="Play showreel">
            <video autoPlay muted loop playsInline poster="/media/automotive.webp">
              <source src="/media/automotive.mp4" type="video/mp4" />
            </video>
            <div className="showreelOverlay"><span>IDEAS<br />IMAGINED<br />DIFFERENTLY</span><b>01 / 03</b></div>
          </button>
        </aside>
      </section>

      <section className="selected" id="work">
        <div className="sectionTop"><span>SELECTED WORK</span><button className="textAction buttonReset" onClick={() => document.querySelector('.workGrid')?.scrollIntoView({ behavior: 'smooth' })}>VIEW ALL →</button></div>
        <div className="workGrid">
          {works.map((work, index) => (
            <button className={`workCard buttonReset ${index === 0 ? 'featured' : ''}`} key={work.title} onClick={() => setActiveWork(work)}>
              <div className="workMedia"><img src={work.image} alt={work.title} /><span className="workIndex">0{index + 1}</span><span className="viewProject">VIEW PROJECT ↗</span></div>
              <div className="workMeta"><span>{work.type}</span><h2 className="serif">{work.title}</h2><p>{work.copy}</p></div>
            </button>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <figure className="aboutPortrait"><img src="/media/about.webp" alt={`${profile.name} portrait`} /></figure>
        <div className="aboutCopy">
          <div className="eyebrow warm">ABOUT ME</div>
          <h2 className="serif">Human taste.<br />AI possibility.<br />Cinematic execution.</h2>
          <p>I&apos;m {profile.name} — AI Creative Director. I combine creative direction, aesthetic vision and generative tools to create visual concepts, campaigns and stories for brands and personal projects.</p>
          <button className="pill outline buttonReset" onClick={() => setShowContact(true)}>MORE ABOUT ME</button>
        </div>
        <aside className="aboutAside"><div className="script serif">Ideas<br />beyond<br />reality</div><div className="railList darkText">CREATIVE DIRECTION<br />AI VISUALS<br />BRAND STORYTELLING<br />CAMPAIGNS<br />CINEMATIC CONTENT</div></aside>
      </section>

      <section className="fullShowreel">
        <video autoPlay muted loop playsInline poster="/media/editorial.webp"><source src="/media/editorial.mp4" type="video/mp4" /></video>
        <div className="fullShowreelShade" />
        <div className="fullShowreelCopy"><span>AI FILM / 2026</span><strong className="serif">IMAGINATION<br />WITHOUT LIMITS</strong><button className="pill light buttonReset" onClick={() => setActiveWork(works[1])}>PLAY FILM →</button></div>
      </section>

      <section className="services" id="services">
        <div className="sectionTop"><span>SERVICES</span><span>01 / 06 →</span></div>
        <div className="serviceGrid">{services.map(([item, copy], index) => <div className="serviceItem" key={item}><span>0{index + 1}</span><div><b>{item}</b><p>{copy}</p></div></div>)}</div>
      </section>

      <section className="cinemaStrip">
        <img src="/media/fantasy.webp" alt="AI cinematic visual" />
        <div className="stripCopy"><span>LET&apos;S CREATE</span><strong>SOMETHING EXTRAORDINARY</strong></div>
        <button className="pill dark buttonReset" onClick={() => setShowContact(true)}>GET IN TOUCH →</button>
      </section>

      <footer className="footer" id="contact">
        <div><span className="brand">{profile.name}</span><small>AI CREATIVE DIRECTOR</small></div>
        <h2 className="serif">Let&apos;s make the next<br />idea unforgettable.</h2>
        <button className="pill outline buttonReset" onClick={() => setShowContact(true)}>START A PROJECT</button>
      </footer>

      {activeWork && <div className="modalBackdrop" role="dialog" aria-modal="true" aria-label={activeWork.title} onClick={() => setActiveWork(null)}>
        <div className="filmModal" onClick={(e) => e.stopPropagation()}>
          <button className="modalClose buttonReset" onClick={() => setActiveWork(null)}>CLOSE ×</button>
          <video autoPlay controls playsInline poster={activeWork.image}><source src={activeWork.video} type="video/mp4" /></video>
          <div className="modalMeta"><span>{activeWork.type}</span><h3 className="serif">{activeWork.title}</h3><p>{activeWork.copy}</p></div>
        </div>
      </div>}

      {showContact && <div className="modalBackdrop" role="dialog" aria-modal="true" aria-label="Start a project" onClick={() => setShowContact(false)}>
        <div className="contactModal" onClick={(e) => e.stopPropagation()}>
          <button className="modalClose buttonReset" onClick={() => setShowContact(false)}>CLOSE ×</button>
          <span className="eyebrow warm">START A PROJECT</span>
          <h3 className="serif">Tell me what you want<br />to create.</h3>
          <p>The interaction is ready. Before public launch we only need to connect Inga&apos;s real email, Instagram or Telegram here.</p>
          <a className="pill dark" href="#contact" onClick={() => setShowContact(false)}>BACK TO CONTACT</a>
        </div>
      </div>}
    </main>
  );
}
