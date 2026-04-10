"use client"

import { Badge } from "@/components/ui/badge"
import { Copy } from "@/lib/translations"

interface FooterSectionProps {
  c: Copy
}

export function FooterSection({ c }: FooterSectionProps) {
  return (
    <footer className="border-t border-white/5 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <span className="font-black text-xl">{c.navLogo}</span>
          <Badge className="bg-emerald-500 text-white">{c.navBadge}</Badge>
        </div>

        <p className="text-white/30 text-sm">
          {c.footerLocation}
        </p>

        <div className="flex items-center justify-center gap-4 text-white/30 text-xs">
          {c.footerLinks.map((link, i) => (
            <div key={i} className="flex items-center gap-4">
              <a href={link.href} className="hover:text-white/60 transition">{link.label}</a>
              {i < c.footerLinks.length - 1 && <span>·</span>}
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/56930835236"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-emerald-400 text-sm hover:text-emerald-300 transition"
        >
          💬 +569 3083 5236
        </a>

        <p className="text-white/20 text-xs">
          {c.footerCopy}
        </p>
      </div>
    </footer>
  )
}
