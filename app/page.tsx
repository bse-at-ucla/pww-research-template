import { siteConfig } from "@/lib/config";
import { renderInline } from "@/lib/inline";

function LinkRow({ links }: { links: { label: string; href: string }[] }) {
  return (
    <>
      {links.map((link, i) => (
        <span key={link.href}>
          {i > 0 && " | "}
          <a href={link.href}>{link.label}</a>
        </span>
      ))}
    </>
  );
}

export default function Home() {
  const { name, profilePic, links, bio, news, experience, projects } = siteConfig;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="profile-pic" src={profilePic} alt={name} />

      <h1>{name.toLowerCase()}</h1>

      <h3>
        <LinkRow links={links} />
      </h3>

      {bio.map((paragraph, i) => (
        <p key={i}>{renderInline(paragraph)}</p>
      ))}

      {news.length > 0 && (
        <>
          <h2>news</h2>
          <table>
            <tbody>
              {news.map((item, i) => (
                <tr key={i}>
                  <th>{item.date}</th>
                  <td>{renderInline(item.text)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {experience.length > 0 && (
        <>
          <h2>experience</h2>
          <ul>
            {experience.map((job, i) => (
              <li key={i}>
                <b>{job.role}</b>
                <br />
                {job.orgHref ? <a href={job.orgHref}>{job.org}</a> : job.org}
                {job.location && ` — ${job.location}`}
                <br />
                <i>{job.dates}</i>
                <ul>
                  {job.bullets.map((bullet, j) => (
                    <li key={j}>{renderInline(bullet)}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      )}

      {projects.length > 0 && (
        <>
          <h2>projects</h2>
          <ul>
            {projects.map((project, i) => (
              <li key={i}>
                <b>{project.title}</b>
                <br />
                {renderInline(project.description)}
                <br />
                {project.tags && project.tags.length > 0 && (
                  <>
                    <i>{project.tags.join(" · ")}</i>
                    <br />
                  </>
                )}
                <LinkRow links={project.links} />
              </li>
            ))}
          </ul>
        </>
      )}

      <footer>
        Maintained by{" "}
        <a href="https://bseatucla.com" target="_blank" rel="noopener noreferrer">
          Bruin Software Engineers
        </a>
        , styled after{" "}
        <a href="https://github.com/rishabh-ranjan/rishabh-ranjan.github.io">
          rishabh-ranjan.github.io
        </a>
        .
      </footer>

      <br />
      <br />
    </>
  );
}
