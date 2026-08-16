import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import Link from "next/link";

const sections = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav aria-label="Main navigation" className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-border/80 bg-background/80 px-4 shadow-[0_8px_30px_hsl(var(--foreground)/.04)] backdrop-blur-xl sm:px-5">
        <Link href="/" className="group flex items-center gap-2" aria-label={`${DATA.name} home`}>
          <span className="flex size-7 items-center justify-center rounded-full bg-primary font-display text-[11px] font-bold text-primary-foreground transition-transform group-hover:rotate-12">SD</span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">{DATA.name}</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {sections.map((item) => <Link key={item.href} href={item.href} className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">{item.label}</Link>)}
        </div>
        <div className="flex items-center gap-1">
          <Link href={DATA.contact.social.GitHub.url} target="_blank" rel="noreferrer" className="hidden size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:flex" aria-label="GitHub"><DATA.contact.social.GitHub.icon className="size-4" /></Link>
          <Link href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noreferrer" className="hidden size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:flex" aria-label="LinkedIn"><DATA.contact.social.LinkedIn.icon className="size-4" /></Link>
          <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
