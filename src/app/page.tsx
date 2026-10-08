import { Navbar } from "@/components/layout/Navbar";
import { MotionController } from "@/components/ui/MotionController";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tags } from "@/components/ui/Tags";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const linkedin = "https://www.linkedin.com/in/zaman1913";
const resume = "/resume/Shahid_Zaman_FullStackDeveloper.pdf";
const whatsapp = "https://wa.me/923027434561";

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <MotionController />
        <section id="home" className="hero container">
          <div className="hero-copy">
            <p className="eyebrow" data-animate>FULL STACK DEVELOPER</p>
            <h1 data-animate className="reveal-delay-1">
              Hi, I&apos;m <span>Shahid Zaman</span>
            </h1>
            <p className="hero-role reveal-delay-2" data-animate>
              Building thoughtful web experiences, end to end.
            </p>
            <p className="stack-line reveal-delay-2" data-animate>
              React.js <b>•</b> Next.js <b>•</b> .NET Core <b>•</b> Node.js{" "}
              <b>•</b> SQL Server
            </p>
            <p className="hero-description reveal-delay-3" data-animate>
              I build scalable, responsive, and real-time web applications using
              modern frontend, backend, and database technologies.
            </p>
            <div className="actions reveal-delay-4" data-animate>
              <a className="button primary" href="#projects">
                View My Work <span>↗</span>
              </a>
              <a className="button ghost" href={resume} download>
                Download Resume
              </a>
              <a className="text-link" href="#contact">
                Contact Me <span>→</span>
              </a>
            </div>
            <div className="socials">
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Shahid Zaman's LinkedIn profile (opens in a new tab)"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <span aria-hidden="true"></span>
              <a href="#projects">Selected work</a>
            </div>
          </div>
          <div
            className="portrait-area reveal-scale"
            data-animate
            role="img"
            aria-label="Professional profile placeholder for Shahid Zaman"
          >
            <div className="portrait-glow" aria-hidden="true"></div>
            <div className="portrait-card" aria-hidden="true">
              <div className="portrait-initials">SZ</div>
              <p>Shahid Zaman</p>
              <small>Full Stack Developer</small>
            </div>
            <div className="orbit one" aria-hidden="true"></div>
            <div className="orbit two" aria-hidden="true"></div>
            <div className="availability">
              <i aria-hidden="true"></i> Available for opportunities
            </div>
          </div>
        </section>

        <section id="about" className="section container about-grid" data-animate>
          <SectionTitle
            eyebrow="01 / ABOUT"
            title="A builder focused on useful, durable software."
          />
          <div className="about-copy">
            <p>
              I&apos;m Shahid Zaman, a Full Stack Developer with professional
              experience building scalable web applications using React.js,
              Next.js, Node.js, Express.js, .NET Core, SQL Server, and modern
              web technologies.
            </p>
            <p>
              I currently contribute at MaxRemind Inc. to healthcare,
              communication, and enterprise management applications. My work
              spans frontend development, REST APIs, database-driven systems,
              and real-time communication experiences.
            </p>
            <div className="about-points">
              <span>Frontend development</span>
              <span>REST API development</span>
              <span>Real-time systems</span>
              <span>Enterprise applications</span>
            </div>
          </div>
        </section>

        <section id="experience" className="section container" data-animate>
          <SectionTitle
            eyebrow="02 / EXPERIENCE"
            title="Professional experience"
            text="Delivering practical applications across communication, healthcare, and enterprise workflows."
          />
          {experiences.map((exp) => (
            <article className="experience-card timeline-reveal" data-animate key={exp.company}>
              <div className="timeline-dot"></div>
              <div className="experience-head">
                <div>
                  <p className="card-label">CURRENT ROLE</p>
                  <h3>{exp.role}</h3>
                  <p className="company">
                    {exp.company} <span>·</span> {exp.location}
                  </p>
                </div>
                <p className="muted">{exp.summary}</p>
              </div>
              <div className="experience-body">
                <ul>
                  {exp.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Tags items={exp.technologies} />
              </div>
            </article>
          ))}
        </section>

        <section id="skills" className="section container" data-animate>
          <SectionTitle
            eyebrow="03 / EXPERTISE"
            title="A versatile technical toolkit"
            text="Technologies I use to bring responsive, data-driven web products to life."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" data-animate key={group.title}>
                <h3>{group.title}</h3>
                <Tags items={group.skills} />
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section container" data-animate>
          <SectionTitle
            eyebrow="04 / SELECTED WORK"
            title="Projects with purpose"
            text="A selection of enterprise and personal work, presented without disclosing private company implementation details."
          />
          <div className="featured-grid">
            {featured.map((project, index) => (
              <article
                className={`featured-card feature-${index} project-reveal`}
                data-animate
                key={project.name}
              >
                <div className="project-number">0{index + 1}</div>
                <div>
                  <p className="card-label">{project.status}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="feature-details">
                  <div>
                    <h4>Role</h4>
                    <p>{project.role}</p>
                  </div>
                  <div>
                    <h4>Highlights</h4>
                    <ul>
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Tags items={project.technologies} />
              </article>
            ))}
          </div>
          <div className="project-list">
            {otherProjects.map((project) => (
              <article className="project-row project-reveal" data-animate key={project.name}>
                <div>
                  <p className="card-label">{project.status}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="row-middle">
                  <p className="muted">{project.role}</p>
                  <Tags items={project.technologies} />
                </div>
                <div className="row-features">
                  {project.features.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section container education" data-animate>
          <SectionTitle eyebrow="05 / EDUCATION" title="Academic foundation" />
          <div className="education-note">
            <div className="note-icon">✦</div>
            <div>
              <h3>Education details</h3>
              <p>
                Education information will be added from the supplied resume to
                keep this portfolio completely accurate.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section container contact" data-animate>
          <p className="eyebrow">06 / CONTACT</p>
          <h2>
            Let&apos;s build something
            <br />
            <span>meaningful.</span>
          </h2>
          <p>
            Have a role, collaboration, or project in mind? Let&apos;s connect.
          </p>
          <div className="contact-actions">
            <a
              className="button primary"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <span>↗</span>
            </a>
            <a
              className="button whatsapp-button"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Open WhatsApp chat with Shahid Zaman"
            >
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M19.1 17.3c-.3-.2-1.9-.9-2.2-1s-.6-.2-.8.2c-.2.3-.9 1-.1 1.3.3.3.6.4.9.1.3-.4.5-.3.8-.2.3.2 1.4.6 1.7.7.3.2.5.2.6.3.2.2.2.9-.1 1.8-.3.9-1.7 1.7-2.4 1.8-.6.1-1.4.3-4.7-1.2-4-1.8-6.5-6.3-6.7-6.6-.2-.3-1.6-2.2-1.6-4.2s1-3 1.4-3.4c.3-.4.8-.5 1.1-.5h.8c.3 0 .6-.1.9.6.3.7 1 2.4 1.1 2.6.1.2.2.5 0 .8-.2.3-.3.5-.5.7l-.4.5c-.2.2-.3.4-.1.7.2.3.8 1.3 1.8 2.1 1.2 1.1 2.3 1.4 2.6 1.6.3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.5-.3.8-.2z" />
                <path d="M16 2.8a13.1 13.1 0 0 0-11.2 19.8L3.2 29l6.6-1.7A13.1 13.1 0 1 0 16 2.8zm0 23.9c-2 0-3.9-.5-5.6-1.5l-.4-.2-3.9 1 1-3.8-.3-.4A10.6 10.6 0 1 1 16 26.7z" />
              </svg>
              WhatsApp <span aria-hidden="true">Open</span>
            </a>
            <a className="button ghost" href={resume} download>
              Download Resume
            </a>
          </div>
          <p className="contact-note">
            This is a frontend-only portfolio. Contact details from the resume
            can be added here.
          </p>
        </section>
      </main>
      <footer>
        <div className="container">
          <a className="brand" href="#home">
            Shahid<span>.</span>
          </a>
          <p>© {new Date().getFullYear()} Shahid Zaman. Built with Next.js.</p>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Shahid Zaman's LinkedIn profile (opens in a new tab)"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </>
  );
}
