const roles = ["Web Developer", "Back-End Amateur", "UI Design Enthusiast"];

const work = [
    {
        name: "kreics.com",
        kind: "Creative portfolio",
        desc: "A filmmaker portfolio shaped around visual browsing and simple editing.",
        stack: ["Next.js", "Strapi"],
        link: "https://kreics.com/",
    },
    {
        name: "Lauku Forms",
        kind: "Workflow app",
        desc: "A Django form builder for practical internal data collection, built for Latvijas Lauku konsultāciju un izglītības centrs.",
        stack: ["Django", "MySQL", "Bootstrap"],
        link: "https://github.com/27-Club/27club",
    },
    {
        name: "Battleships",
        kind: "Game — in progress",
        desc: "An online take on the classic board game.",
        stack: ["C#", "TypeScript"],
        link: "https://github.com/GustavsIljuconoks/pirate-adventure",
    },
];

const skills = [
    {
        title: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "C#", "HTML", "CSS"],
    },
    {
        title: "Frameworks & Libraries",
        items: [
            "React",
            "Next.js",
            "Tailwind",
            "Django",
            ".NET MAUI",
            "Three.js",
        ],
    },
    { title: "Tools", items: ["Figma", "MySQL", "Git"] },
];

const links = [
    { name: "GitHub", href: "https://github.com/GustavsIljuconoks" },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/gustavs-i%C4%BCju%C4%8Donoks-60559b223/",
    },
    { name: "Twitter / X", href: "https://x.com/gInTheBuilding" },
    { name: "Email", href: "mailto:gustavs.iljuconoks@gmail.com" },
    { name: "Cosmos", href: "https://www.cosmos.so/cipis" },
];

function App() {
    return (
        <main className="page">
            <header className="masthead">
                <h1>Gustavs Iļjučonoks</h1>
                <p className="lede">
                    I&rsquo;m a web developer focused on{" "}
                    <em>front-end craft</em>, back-end fundamentals, and
                    interfaces that feel considered.
                </p>
                <p className="now">
                    <span className="dot" aria-hidden="true" />
                    {roles.join(" · ")}
                </p>
            </header>

            <section className="section" aria-label="Selected work">
                <p className="label">Work</p>
                <div className="work">
                    {work.map((w) => (
                        <article className="entry" key={w.name}>
                            <div className="entry-head">
                                <h3>{w.name}</h3>
                                <span className="kind">{w.kind}</span>
                            </div>
                            <p>{w.desc}</p>
                            <div className="entry-foot">
                                <div className="stack">
                                    {w.stack.map((s) => (
                                        <span key={s}>{s}</span>
                                    ))}
                                </div>
                                <a
                                    href={w.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section" aria-label="Skills">
                <p className="label">Skills</p>
                <div>
                    {skills.map((group) => (
                        <div className="skill-group" key={group.title}>
                            <h4>{group.title}</h4>
                            <p>{group.items.join(", ")}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section" aria-label="Links">
                <p className="label">Elsewhere</p>
                <div className="links">
                    {links.map((l) => (
                        <a
                            key={l.name}
                            href={l.href}
                            target={
                                l.href.startsWith("mailto:")
                                    ? undefined
                                    : "_blank"
                            }
                            rel="noreferrer"
                        >
                            {l.name}
                            <span className="arrow" aria-hidden="true">
                                ↗
                            </span>
                        </a>
                    ))}
                </div>
            </section>

            <footer className="colophon">
                © {new Date().getFullYear()} Gustavs Iļjučonoks — built with
                React, set in Fraunces, Space Grotesk & Space Mono.
            </footer>
        </main>
    );
}

export default App;
