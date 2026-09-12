import { getProfile, getProjects } from '../lib/api';

export default async function Home() {
  const [profile, projects] = await Promise.all([getProfile(), getProjects()]);

  return (
    <main>
      <section className="hero">
        <div className="eyebrow">AI CREATIVE DIRECTOR · VISUAL STORYTELLER</div>
        <div className="heroGrid">
          <div>
            <h1>{profile.name}<br /><span>CREATIVE</span><br />DIRECTOR</h1>
            <p className="lead">{profile.tagline}</p>
          </div>
          <div className="portraitPlaceholder" aria-label="Portrait placeholder">
            <span>PORTRAIT / EDITORIAL FRAME</span>
          </div>
        </div>
        <div className="scrollNote">SCROLL TO EXPLORE ↓</div>
      </section>

      <section className="work" id="work">
        <div className="sectionLabel">SELECTED WORK</div>
        {projects.map((project, index) => (
          <article className="project" key={project.slug}>
            <div className="projectNumber">0{index + 1}</div>
            <div>
              <div className="projectType">{project.type}</div>
              <h2>{project.title}</h2>
            </div>
          </article>
        ))}
      </section>

      <section className="about">
        <div className="sectionLabel">ABOUT</div>
        <p className="statement">Human taste. AI possibility. Cinematic execution.</p>
        <p className="copy">I shape visual concepts, campaigns and stories using creative direction and generative tools as one integrated process.</p>
      </section>

      <section className="services">
        <div className="sectionLabel">SERVICES</div>
        <div className="serviceGrid">
          {['Creative Direction','AI Visuals','AI Film','Brand Storytelling','Campaign Concepts','Social Content'].map((item) => <div key={item}>{item}</div>)}
        </div>
      </section>

      <section className="contact">
        <div className="sectionLabel">CONTACT</div>
        <h2>LET&apos;S CREATE<br />SOMETHING UNEXPECTED.</h2>
      </section>
    </main>
  );
}
