import { motion } from "framer-motion";

const keywords = [
  "Platform Engineering",
  "Growth Systems",
  "Agentic Workflows",
  "Strategic Blueprinting",
];

const MarqueeRow = ({ direction = 1 }) => {
  const items = [...keywords, ...keywords, ...keywords, ...keywords];

  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex items-center gap-6 whitespace-nowrap"
        animate={{ x: direction > 0 ? [0, -50 * keywords.length] : [-50 * keywords.length, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {items.map((keyword, i) => (
          <span
            key={`${keyword}-${i}`}
            className="flex items-center gap-6 text-xs font-medium tracking-[0.15em] uppercase"
            style={{ color: 'hsl(var(--caption))' }}
          >
            <span className="opacity-30" style={{ color: 'hsl(var(--primary))' }}>//</span>
            <span>{keyword}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const KeywordMarquee = () => {
  return (
    <div
      className="py-4 border-t border-b"
      style={{ borderColor: 'hsl(var(--border) / 0.5)' }}
      data-testid="keyword-marquee"
    >
      <MarqueeRow direction={1} />
    </div>
  );
};
