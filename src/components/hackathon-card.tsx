import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Props { title: string; description: string; dates: string; location: string; image?: string; links?: readonly { icon: React.ReactNode; title: string; href: string }[]; }

export function HackathonCard({ title, description, dates, location, image, links }: Props) {
  return <li className="relative grid gap-4 border-b border-border py-6 pl-16 sm:grid-cols-[1fr_auto] sm:pl-20"><div className="absolute left-0 top-6"><Avatar className="size-11 rounded-xl border border-border bg-background"><AvatarImage src={image} alt={title} className="object-contain p-1" /><AvatarFallback className="rounded-xl bg-secondary">{title[0]}</AvatarFallback></Avatar></div><div><time className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{dates}</time><h2 className="mt-1 font-display text-xl font-semibold tracking-tight">{title}</h2><p className="mt-1 text-sm text-muted-foreground">{location}</p>{description && <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{description}</p>}</div>{links && links.length > 0 && <div className="flex flex-wrap items-start gap-2 sm:justify-end">{links.map((link, idx) => <Link href={link.href} key={idx} target="_blank" rel="noreferrer"><Badge variant="outline" className="gap-1.5 rounded-full px-3 py-1.5 text-xs">{link.icon}{link.title}<ArrowUpRight className="size-3" /></Badge></Link>)}</div>}</li>;
}
