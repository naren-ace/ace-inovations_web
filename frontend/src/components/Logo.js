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
          className="font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1A202C' }}
        >
          ACE
        </span>
        <span
          className="tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 200, color: '#1A202C' }}
        >
          inovations
        </span>
      </span>
    </Link>
  );
};
