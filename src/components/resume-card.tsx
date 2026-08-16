"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDown, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface ResumeCardProps { logoUrl: string; altText: string; title: string; subtitle?: string; href?: string; badges?: readonly string[]; period: string; description?: string; }

export const ResumeCard = ({ logoUrl, altText, title, subtitle, href, badges, period, description }: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const reducedMotion = useReducedMotion();
  const content = <>
    <div className="flex min-w-0 flex-1 items-start gap-4">
      <Avatar className="size-11 shrink-0 rounded-xl border border-border bg-background"><AvatarImage src={logoUrl} alt={altText} className="object-contain p-1" /><AvatarFallback className="rounded-xl bg-secondary font-display">{altText[0]}</AvatarFallback></Avatar>
      <div className="min-w-0 pt-0.5"><div className="flex flex-wrap items-center gap-2"><h3 className="font-display text-base font-semibold tracking-tight">{title}</h3>{badges?.map((badge) => <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px]" key={badge}>{badge}</Badge>)}</div>{subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}</div>
    </div>
    <div className="flex shrink-0 items-center gap-2"><time className="hidden text-right font-mono text-[10px] uppercase tracking-wide text-muted-foreground sm:block">{period}</time>{href ? <ExternalLink className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> : description ? <ChevronDown className={cn("size-4 text-muted-foreground transition-transform", isExpanded && "rotate-180")} /> : null}</div>
  </>;
  const details = description && <motion.div initial={reducedMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? "auto" : 0 }} transition={{ duration: reducedMotion ? 0 : 0.3 }} className="overflow-hidden pl-[3.75rem] pr-2 text-sm leading-relaxed text-muted-foreground"><p className="border-t border-border/70 pb-1 pt-4">{description.trim()}</p></motion.div>;
  if (href) return <Link href={href} target="_blank" rel="noreferrer" className="group block"><Card className="flex items-start gap-3 rounded-2xl border-border/70 bg-card/60 p-4 transition hover:border-foreground/30 hover:bg-card">{content}</Card></Link>;
  return <Card className="group rounded-2xl border-border/70 bg-card/60 p-4 transition hover:border-foreground/30 hover:bg-card"><button type="button" onClick={() => description && setIsExpanded(!isExpanded)} aria-expanded={isExpanded} className="flex w-full items-start gap-3 text-left">{content}</button>{details}</Card>;
};
