import { Link } from "react-router-dom";
import { LogicNodeIcon } from "@/components/LogicNodeIcon";
import { BrandWordmark } from "@/components/BrandWordmark";

export const Logo = ({ size = "default", theme = "dark" }) => {
  const isSmall = size === "small";
  const iconSize = isSmall ? 20 : 26;
  const wordmarkSize = isSmall ? "sm" : "md";

  return (
    <Link to="/" className="flex items-center gap-2.5 group" data-testid="logo-link">
      <LogicNodeIcon size={iconSize} glow={!isSmall} />
      <BrandWordmark size={wordmarkSize} theme={theme} />
    </Link>
  );
};
