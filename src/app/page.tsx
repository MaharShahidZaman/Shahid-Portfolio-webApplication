import { Navbar } from "@/components/layout/Navbar";
import { MotionController } from "@/components/ui/MotionController";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tags } from "@/components/ui/Tags";
import { ContactForm } from "@/components/contact/ContactForm";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const linkedin = "https://www.linkedin.com/in/zaman1913";
const github = "https://github.com/MaharShahidZaman";
const email = "mahar.shahid.zaman1913@gmail.com";
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
            <p className="eyebrow" data-animate>
              FULL STACK DEVELOPER
            </p>
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
                View My Work <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#contact">
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="socials" aria-label="Social links">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Shahid Zaman's LinkedIn profile (opens in a new tab)"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <span aria-hidden="true" />
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Shahid Zaman's GitHub profile (opens in a new tab)"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div
            className="portrait-area reveal-scale"
            data-animate
            role="img"
            aria-label="Professional profile placeholder for Shahid Zaman"
          >
            <div className="portrait-glow" aria-hidden="true" />
            <div className="portrait-card" aria-hidden="true">
              <div className="portrait-initials">SZ</div>
              <p>Shahid Zaman</p>
              <small>Full Stack Developer</small>
            </div>
            <div className="orbit one" aria-hidden="true" />
            <div className="orbit two" aria-hidden="true" />
            <div className="availability">
              <i aria-hidden="true" /> Available for opportunities
            </div>
          </div>
        </section>

        <section
          id="about"
          className="section container about-grid"
          data-animate
        >
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
            <article
              className="experience-card timeline-reveal"
              data-animate
              key={exp.company}
            >
              <div className="timeline-dot" />
              <div className="experience-head">
                <div>
                  <p className="card-label">CURRENT ROLE</p>
                  <h3>{exp.role}</h3>
                  <p className="company">
                    {exp.company} <span>·</span> {exp.location}
                  </p>
                  <p className="experience-date">{exp.duration}</p>
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
                    <h4>My role</h4>
                    <p>{project.role}</p>
                  </div>
                  <div>
                    <h4>My contribution</h4>
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
              <article
                className="project-row project-reveal"
                data-animate
                key={project.name}
              >
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
                  {project.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                  {project.github && (
                    <a
                      className="project-github"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
                    >
                      View on GitHub <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="education"
          className="section container education"
          data-animate
        >
          <SectionTitle eyebrow="05 / EDUCATION" title="Academic foundation" />
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.qualification}>
                <p className="card-label">{item.period}</p>
                <h3>{item.qualification}</h3>
                <p>{item.institution}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="section container contact"
          data-animate
        >
          <p className="eyebrow">06 / CONTACT</p>
          <h2>
            Let&apos;s build something
            <br />
            <span>meaningful.</span>
          </h2>
          <p>
            Have a role, collaboration, or project in mind? Let&apos;s connect.
          </p>
          <div className="contact-details" aria-label="Contact details">
            <a className="contact-detail" href={`mailto:${email}`}>
              <span className="contact-detail-label">Email</span>
              <span>{email}</span>
            </a>
            <a
              className="contact-detail"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-detail-label">LinkedIn</span>
              <span>Connect professionally ↗</span>
            </a>
            <a
              className="contact-detail"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-detail-label">GitHub</span>
              <span>Explore my code ↗</span>
            </a>
          </div>
          <ContactForm />
          <div className="contact-actions">
            <a
              className="button primary"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button whatsapp-button"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp chat with Shahid Zaman (opens in a new tab)"
            >
              WhatsApp <span aria-hidden="true">Open</span>
            </a>
          </div>
          <p className="contact-note">
            Available for roles, collaborations, and project inquiries.
          </p>
        </section>
      </main>
      <footer>
        <div className="container">
          <a className="brand" href="#home" aria-label="Back to the top">
            <span className="brand-mark" aria-hidden="true">
              SZ
            </span>
            <span className="brand-name">Shahid Zaman</span>
          </a>
          <div className="footer-links">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Shahid Zaman's LinkedIn profile (opens in a new tab)"
            >
              LinkedIn ↗
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Shahid Zaman's GitHub profile (opens in a new tab)"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
