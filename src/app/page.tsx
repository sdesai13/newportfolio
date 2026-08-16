import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { ArrowDownRight, ArrowUpRight, MapPin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const delay = 0.06;

function SectionLabel({ children, number }: { children: React.ReactNode; number: string }) {
  return <div className="section-rule flex items-center justify-between"><span className="eyebrow">{number} / {children}</span><span className="h-2 w-2 rounded-full bg-accent" /></div>;
}

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 pb-28 pt-28 sm:px-8 lg:px-12 lg:pt-36">
      <section id="hero" className="relative grid gap-12 pb-24 lg:grid-cols-[1fr_0.7fr] lg:gap-20 lg:pb-36">
        <div className="relative z-10">
          <BlurFade delay={delay}>
            <p className="eyebrow mb-8 flex items-center gap-3"><span className="inline-block h-px w-8 bg-accent" /> Software engineer · Austin, TX</p>
          </BlurFade>
          <BlurFade delay={delay * 2}>
            <h1 className="max-w-4xl text-[3.6rem] font-semibold leading-[.95] tracking-[-.065em] sm:text-7xl lg:text-[7.2rem]">Building useful things with <span className="text-muted-foreground">curiosity</span>.</h1>
          </BlurFade>
          <BlurFade delay={delay * 3}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{DATA.description}</p>
          </BlurFade>
          <BlurFade delay={delay * 4}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">See selected work <ArrowDownRight className="size-4 transition-transform group-hover:translate-y-1 group-hover:translate-x-1" /></Link>
              <Link href={DATA.contact.social.email.url} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-foreground"><Mail className="size-4" /> Get in touch</Link>
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={delay * 3} className="relative flex items-end justify-end">
          <div className="relative h-[22rem] w-full max-w-sm overflow-hidden rounded-[2rem] bg-secondary sm:h-[30rem]">
            <div className="absolute left-6 top-6 z-10 rounded-full border border-foreground/15 bg-background/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest backdrop-blur">Currently building</div>
            <Image src="/me-3.png" alt={DATA.name} fill priority className="object-cover object-top" sizes="(max-width: 1024px) 90vw, 30vw" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-xs text-background"><span className="rounded-full bg-foreground/80 px-3 py-1.5 backdrop-blur">{DATA.name}</span><span className="font-mono">01 — 01</span></div>
          </div>
        </BlurFade>
        <div className="pointer-events-none absolute -bottom-2 right-[8%] hidden font-display text-[10rem] font-semibold leading-none text-accent/25 lg:block">↘</div>
      </section>

      <section id="about" className="grid gap-8 pb-24 lg:grid-cols-[.32fr_1fr] lg:gap-20">
        <SectionLabel number="01">About</SectionLabel>
        <BlurFade delay={delay}>
          <Markdown className="max-w-2xl text-2xl leading-snug tracking-tight text-foreground/85 sm:text-3xl">{DATA.summary}</Markdown>
        </BlurFade>
      </section>

      <section id="work" className="pb-24">
        <SectionLabel number="02">Experience</SectionLabel>
        <div className="mt-8 grid gap-3">
          {DATA.work.map((work, id) => <BlurFade key={work.company} delay={delay * (id + 1)}><ResumeCard logoUrl={work.logoUrl} altText={work.company} title={work.company} subtitle={work.title} badges={work.badges} period={`${work.start} — ${work.end ?? "Present"}`} description={work.description} /></BlurFade>)}
        </div>
      </section>

      <section id="education" className="grid gap-8 pb-24 lg:grid-cols-[.32fr_1fr] lg:gap-20">
        <SectionLabel number="03">Education</SectionLabel>
        <div className="grid gap-3">{DATA.education.map((education, id) => <BlurFade key={education.school} delay={delay * (id + 1)}><ResumeCard href={education.href} logoUrl={education.logoUrl} altText={education.school} title={education.school} subtitle={education.degree} period={`${education.start} — ${education.end}`} /></BlurFade>)}</div>
      </section>

      <section id="skills" className="grid gap-8 pb-24 lg:grid-cols-[.32fr_1fr] lg:gap-20">
        <SectionLabel number="04">Toolkit</SectionLabel>
        <div className="flex flex-wrap content-start gap-2">{DATA.skills.map((skill, id) => <BlurFade key={skill} delay={delay * (id + 1)}><Badge variant="outline" className="rounded-full px-3 py-1.5 font-mono text-xs font-normal">{skill}</Badge></BlurFade>)}</div>
      </section>

      <section id="projects" className="pb-24">
        <SectionLabel number="05">Selected work</SectionLabel>
        <div className="mt-8 mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl">A few things I&apos;ve made.</h2></div><p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Small experiments, thoughtful interfaces, and software built to be used.</p></div>
        <div className="grid gap-5 md:grid-cols-2">{DATA.projects.map((project, id) => <BlurFade key={project.title} delay={delay * (id + 1)}><ProjectCard href={project.href} title={project.title} description={project.description} dates={project.dates} tags={project.technologies} image={project.image} video={project.video} links={project.links} /></BlurFade>)}</div>
      </section>

      <section id="contact" className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-primary-foreground sm:px-12 sm:py-20">
        <div className="relative z-10 max-w-2xl"><p className="eyebrow text-primary-foreground/60">Get in touch</p><h2 className="mt-5 text-5xl font-semibold leading-none tracking-[-.06em] sm:text-7xl">Let&apos;s connect.<br /><span className="text-accent">Reach out anytime.</span></h2><p className="mt-7 max-w-md text-primary-foreground/65">You can reach me by email or find me on LinkedIn.</p><div className="mt-8 flex flex-wrap gap-3"><Link href={DATA.contact.social.email.url} className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5">Send an email <ArrowUpRight className="size-4" /></Link><Link href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-5 py-3 text-sm font-medium">LinkedIn <ArrowUpRight className="size-4" /></Link></div></div><div className="pointer-events-none absolute -right-8 -top-16 font-display text-[18rem] font-semibold leading-none text-primary-foreground/[.04]">✳</div>
      </section>
      <footer className="mt-8 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} {DATA.name}</span><span className="flex items-center gap-1"><MapPin className="size-3" /> {DATA.location}</span></footer>
    </main>
  );
}
