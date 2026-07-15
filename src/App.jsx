import { useEffect, useRef } from "react";

function useCursorWash() {
    const target = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });
    const frame = useRef(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reduceMotion) return;

        const root = document.documentElement;

        const handlePointerMove = (e) => {
            target.current = {
                x: e.clientX / window.innerWidth - 0.5,
                y: e.clientY / window.innerHeight - 0.5,
            };
        };

        const tick = () => {
            current.current.x +=
                (target.current.x - current.current.x) * 0.05;
            current.current.y +=
                (target.current.y - current.current.y) * 0.05;
            root.style.setProperty("--mx", current.current.x.toFixed(4));
            root.style.setProperty("--my", current.current.y.toFixed(4));
            frame.current = requestAnimationFrame(tick);
        };

        window.addEventListener("pointermove", handlePointerMove);
        frame.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            cancelAnimationFrame(frame.current);
        };
    }, []);
}

const projects = [
    {
        name: "kreics.com",
        desc: "A filmmaker portfolio shaped around visual browsing and simple editing.",
        link: "https://kreics.com/",
    },
];

const experience = [
    {
        name: "Eventavenue",
        role: "Full-Stack Developer",
        timeline: "2026–present",
        link: "https://eventavenue.vercel.app/",
    },
    {
        name: "Tiec.lv",
        role: "Full-Stack Developer",
        timeline: "2025–present",
        link: "https://tiec.lv/",
    },
    {
        name: "Cube",
        role: "Junior Programmer",
        timeline: "2024–2026",
        link: "https://www.cube.lv/",
    },
];

const skills = [
    "Front-End Development",
    "Back-End Development",
    "Product Thinking",
    "API Design",
    "AI Agent Development",
    "RAG Systems",
];

const elsewhere = [
    { name: "GitHub", href: "https://github.com/GustavsIljuconoks" },
    { name: "Cosmos", href: "https://www.cosmos.so/cipis" },
];

const contactLinks = [
    { name: "Email", href: "mailto:gustavs.iljuconoks@gmail.com" },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/gustavs-i%C4%BCju%C4%8Donoks-60559b223/",
    },
];

function App() {
    useCursorWash();

    return (
        <main className="page">
            <header className="masthead">
                <h1>Gustavs Iļjučonoks</h1>
                <p className="lede">
                    I&rsquo;m a web developer focused on{" "}
                    <em>front-end craft</em>, back-end fundamentals, and
                    interfaces that feel considered.
                </p>
            </header>

            <div className="columns">
                <section className="col" id="work" aria-label="Work">
                    <p className="label">Work</p>
                    {experience.map((r) => (
                        <article className="col-entry" key={r.name}>
                            <p className="meta">{r.timeline}</p>
                            <h3>{r.role}</h3>
                            <p className="desc">
                                <a
                                    href={r.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {r.name}
                                </a>
                            </p>
                        </article>
                    ))}
                </section>

                <section className="col" id="skills" aria-label="Skills">
                    <p className="label">Skills</p>
                    <ul className="skill-list">
                        {skills.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>

                    <p className="label col-secondary-label">Elsewhere</p>
                    <ul className="footer-list">
                        {elsewhere.map((l) => (
                            <li key={l.name}>
                                <a href={l.href}>{l.name}</a>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="col" id="projects" aria-label="Projects">
                    <p className="label">Projects</p>
                    {projects.map((w) => (
                        <article className="col-entry" key={w.name}>
                            <p className="meta">{w.kind}</p>
                            <h3>
                                <a
                                    href={w.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {w.name}
                                </a>
                            </h3>
                            <p className="desc">{w.desc}</p>
                        </article>
                    ))}
                    <p className="cta-note">
                        Got a project in mind?{" "}
                        <a href="mailto:gustavs.iljuconoks@gmail.com">
                            Let&rsquo;s talk
                        </a>
                        .
                    </p>
                </section>
            </div>

            <footer className="footer">
                <div className="col">
                    <p className="label">Contact</p>
                    <ul className="footer-list">
                        {contactLinks.map((l) => (
                            <li key={l.name}>
                                <a
                                    href={l.href}
                                    target={
                                        l.href.startsWith("mailto:")
                                            ? undefined
                                            : "_blank"
                                    }
                                    rel="noreferrer"
                                >
                                    {l.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </main>
    );
}

export default App;
