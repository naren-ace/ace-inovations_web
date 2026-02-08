import { Link } from "react-router-dom";
import { LogicNodeIcon } from "@/components/LogicNodeIcon";

export const Logo = ({ size = "default" }) => {
  const isSmall = size === "small";
  const iconSize = isSmall ? 20 : 26;

  return (
    <Link to="/" className="flex items-center gap-2.5 group" data-testid="logo-link">
      <LogicNodeIcon size={iconSize} glow={!isSmall} />
      <span className={`flex items-baseline ${isSmall ? 'text-sm' : 'text-lg'}`}>
        <span
          className="font-bold tracking-tight text-foreground"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          ACE
        </span>
        <span
          className="tracking-tight text-foreground"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 200 }}
        >
          inovations
        </span>
      </span>
    </Link>
  );
};
