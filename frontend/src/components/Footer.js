import { Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Services: [
    "Platform Engineering",
    "Growth Engineering",
    "ACE Squads",
    "Strategic Blueprinting",
  ],
  Company: ["About", "Careers", "Blog", "Contact"],
  Resources: ["Documentation", "Case Studies", "Changelog", "Status"],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border/60">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-md bg-primary">
                <Zap className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-foreground">
                ACE<span className="font-normal text-muted-foreground"> Innovations</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-[240px]" style={{ color: 'hsl(var(--caption))' }}>
              Engineering the next generation of digital platforms with
              AI-augmented precision.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-wide uppercase text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-foreground transition-colors duration-200"
                      style={{ color: 'hsl(var(--caption))' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 opacity-60" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'hsl(var(--caption))' }}>
            &copy; {new Date().getFullYear()} ACE Innovations. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs hover:text-foreground transition-colors duration-200"
                style={{ color: 'hsl(var(--caption))' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
