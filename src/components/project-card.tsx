import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly { icon: React.ReactNode; type: string; href: string }[];
}

export function ProjectCard({ title, href, description, dates, tags, link, image, video, links }: Props) {
  const media = video ? <video src={video} autoPlay loop muted playsInline aria-label={`${title} preview`} className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" /> : image ? <Image src={image} alt={title} fill className="object-cover object-top transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" /> : null;
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border-border/80 bg-card/70 transition duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_18px_45px_hsl(var(--foreground)/.09)]">
      {media && <div className="relative aspect-[16/9] overflow-hidden bg-secondary">{href ? <Link href={href} target="_blank" rel="noreferrer" aria-label={`View ${title}`}>{media}</Link> : media}<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-50" /></div>}
      <CardHeader className="gap-3 px-5 pb-3 pt-5"><div className="flex items-start justify-between gap-4"><div><CardTitle className="font-display text-2xl tracking-[-.04em]">{title}</CardTitle>{dates && <time className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{dates}</time>}</div>{href && <Link href={href} target="_blank" rel="noreferrer" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition group-hover:border-foreground group-hover:text-foreground" aria-label={`Open ${title}`}><ArrowUpRight className="size-4" /></Link>}</div><Markdown className="prose prose-sm max-w-full text-pretty leading-relaxed text-muted-foreground dark:prose-invert">{description}</Markdown></CardHeader>
      <CardContent className="mt-auto px-5 pb-4"><div className="flex flex-wrap gap-1.5">{tags.map((tag) => <Badge variant="secondary" className="rounded-full px-2.5 py-1 font-mono text-[10px] font-normal" key={tag}>{tag}</Badge>)}</div></CardContent>
      {links && links.length > 0 && <CardFooter className="px-5 pb-5 pt-0"><div className="flex flex-wrap gap-2">{links.map((item, idx) => <Link href={item.href} key={idx} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">{item.icon}{item.type}</Link>)}</div></CardFooter>}
    </Card>
  );
}
