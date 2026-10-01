// All the raw content for the site lives here. Edit this file to make the
// site your own — nothing else should need to change for a basic site.
//
// Text fields support a tiny inline markup (see lib/inline.tsx):
//   **bold**, _italic_, __underline__, [label](https://example.com)
// They also expand the {name} token to `name` below, so you don't have to
// retype your own name in multiple places.

export type LinkItem = {
  label: string;
  href: string;
};

export type Experience = {
  role: string;
  org: string;
  orgHref?: string;
  dates: string;
  location?: string;
  // One bullet per line of description, shown as a sub-list.
  bullets: string[];
};

export type Project = {
  title: string;
  description: string;
  // Tech stack / tags, shown as an italic line under the description.
  tags?: string[];
  links: LinkItem[];
};

export type NewsItem = {
  date: string;
  text: string;
};

export type SiteConfig = {
  // Shown in the page heading and browser tab (lowercased there), and
  // substitutable elsewhere via the {name} token — see lib/inline.tsx.
  name: string;
  // Used for the meta description tag, and for link previews (Open Graph / Twitter cards).
  description: string;
  // The deployed URL, no trailing slash. Used for canonical links, Open
  // Graph/Twitter image URLs, and sitemap.xml/robots.txt. Update this once
  // you know your domain, or link previews and search indexing will point
  // at the wrong place.
  siteUrl: string;
  // Optional "@handle" shown as the Twitter/X card attribution.
  twitterHandle?: string;
  // Path under /public to your headshot.
  profilePic: string;
  // The row of links under your name, e.g. resume, github, linkedin, email.
  links: LinkItem[];
  // One entry per paragraph in your bio.
  bio: string[];
  // Optional "news" table shown above experience. Leave empty to hide it.
  news: NewsItem[];
  experience: Experience[];
  projects: Project[];
};

export const siteConfig: SiteConfig = {
  name: "Your Name",
  description: "Personal portfolio website.",
  siteUrl: "https://your-name.vercel.app",
  twitterHandle: undefined,
  profilePic: "/profile-placeholder.svg",

  links: [
    { label: "resume", href: "/resume.pdf" },
    { label: "github", href: "https://github.com/your-username" },
    { label: "linkedin", href: "https://www.linkedin.com/in/your-username/" },
    { label: "email", href: "mailto:you@example.edu" },
  ],

  bio: [
    "I am a [Computer Science](https://example.edu/cs) student at [Your University](https://example.edu), expecting to graduate in 2027.",
    "I am interested in _software engineering_, particularly building things at the intersection of systems and product. I enjoy working on side projects, contributing to open source, and picking up new tools along the way.",
    "Feel free to reach out if you'd like to chat about tech, projects, or opportunities!",
  ],

  news: [
    // { date: "Jan 1, 2026", text: "This website is live." },
  ],

  experience: [
    {
      role: "Software Engineering Intern",
      org: "Example Company",
      orgHref: "https://example.com",
      dates: "Jun 2025 – Aug 2025",
      location: "San Francisco, CA",
      bullets: [
        "Built and shipped a feature that did X, improving Y by Z%.",
        "Worked with a team of engineers to design and implement A.",
        "Wrote tests and documentation for B.",
      ],
    },
  ],

  projects: [
    {
      title: "Example Project",
      description:
        "A brief one or two sentence description of what this project does and why you built it.",
      tags: ["React", "TypeScript", "Node.js"],
      links: [
        { label: "github", href: "https://github.com/your-username/example-project" },
        { label: "demo", href: "https://example-project.vercel.app" },
      ],
    },
  ],
};
