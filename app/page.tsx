import { getProfile } from '../lib/api';

export const dynamic = 'force-dynamic';

const works = [
  { title: 'Cinematic Automotive', type: 'AI FILM', image: '/media/automotive.webp', video: '/media/automotive.mp4' },
  { title: 'Editorial Worlds', type: 'AI VISUALS', image: '/media/editorial.webp', video: '/media/editorial.mp4' },
  { title: 'Fantasy Cinema', type: 'AI FILM', image: '/media/fantasy.webp', video: '/media/fantasy.mp4' },
];

const services = ['Creative Direction', 'AI Film', 'Campaign Concepts', 'AI Visuals', 'Brand Storytelling', 'Social Content'];

export default async function Home() {
  const profile = await getProfile();

  return (
    <main>
      <header className="navShell">
        <a className="brand" href="#top">{profile.name}</a>
        <nav className="navLinks" aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a>
        </nav>
        <a className="pill dark" href="#contact">LET&apos;S CREATE</a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <div className="eyebrow">AI CREATIVE DIRECTOR</div>
          <h1><span className="nameLine">{profile.name}</span><span className="serif accent">CREATIVE</span><span>DIRECTOR</span></h1>
          <p className="lead">Creative direction, AI visuals<br />and cinematic stories.</p>
          <p className="intro">I create visual concepts, campaigns and stories using creative direction and generative tools as one integrated process.</p>
          <a className="pill dark" href="#work">EXPLORE WORK</a>
        </div>

        <figure className="heroPortrait">
          <img src="/media/hero.webp" alt={`${profile.name}, AI Creative Director`} />
          <figcaption>01 / PORTRAIT</figcaption>
        </figure>

        <aside className="heroRail">
          <div className="railList">AI VISUALS<br />BRAND STORIES<br />CINEMATIC CONTENT</div>
          <a className="showreelLabel" href="#work"><span className="play">▶</span> WATCH SHOWREEL</a>
          <div className="showreelCard">
            <video muted loop playsInline poster="/media/automotive.webp">
              <source src="/media/automotive.mp4" type="video/mp4" />
            </video>
            <div className="showreelOverlay"><span>IDEAS<br />IMAGINED<br />DIFFERENTLY</span><b>01 / 03</b></div>
          </div>
        </aside>
      </section>

      <section className="selected" id="work">
        <div className="sectionTop"><span>SELECTED WORK</span><span>VIEW ALL →</span></div>
        <div className="workGrid">
          {works.map((work, index) => (
            <article className="workCard" key={work.title}>
              <div className="workMedia"><img src={work.image} alt="" /><span className="workIndex">0{index + 1}</span></div>
              <div className="workMeta"><span>{work.type}</span><h2 className="serif">{work.title}</h2></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <figure className="aboutPortrait"><img src="/media/about.webp" alt={`${profile.name} portrait`} /></figure>
        <div className="aboutCopy">
          <div className="eyebrow warm">ABOUT ME</div>
          <h2 className="serif">Human taste.<br />AI possibility.<br />Cinematic execution.</h2>
          <p>I&apos;m {profile.name} — AI Creative Director. I combine creative direction, aesthetic vision and generative tools to create visual concepts, campaigns and stories for brands and personal projects.</p>
          <a className="pill outline" href="#contact">MORE ABOUT ME</a>
        </div>
        <aside className="aboutAside"><div className="script serif">Ideas<br />beyond<br />reality</div><div className="railList darkText">CREATIVE DIRECTION<br />AI VISUALS<br />BRAND STORYTELLING<br />CAMPAIGNS<br />CINEMATIC CONTENT</div></aside>
      </section>

      <section className="services" id="services">
        <div className="sectionTop"><span>SERVICES</span><span>01 / 06 →</span></div>
        <div className="serviceGrid">{services.map((item, index) => <div className="serviceItem" key={item}><span>0{index + 1}</span><b>{item}</b></div>)}</div>
      </section>

      <section className="cinemaStrip">
        <img src="/media/fantasy.webp" alt="AI cinematic visual" />
        <div className="stripCopy"><span>LET&apos;S CREATE</span><strong>SOMETHING EXTRAORDINARY</strong></div>
        <a className="pill dark" href="#contact">GET IN TOUCH →</a>
      </section>

      <footer className="footer" id="contact">
        <div><span className="brand">{profile.name}</span><small>AI CREATIVE DIRECTOR</small></div>
        <h2 className="serif">Let&apos;s make the next<br />idea unforgettable.</h2>
        <a className="pill outline" href="mailto:hello@example.com">START A PROJECT</a>
      </footer>
    </main>
  );
}
