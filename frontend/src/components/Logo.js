import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export const Logo = ({ size = "default" }) => {
  const isSmall = size === "small";
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div
        className={`flex items-center justify-center rounded-lg bg-primary ${
          isSmall ? 'w-7 h-7' : 'w-8 h-8'
        }`}
      >
        <Zap className={`text-primary-foreground ${isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
      </div>
      <span className={`tracking-tight ${isSmall ? 'text-sm' : 'text-lg'}`}>
        <span className="font-extrabold" style={{ color: 'hsl(var(--primary))' }}>ACE</span>
        <span className="font-light tracking-wide" style={{ color: 'hsl(215 16% 47%)' }}>
          {' '}
          <span style={{ color: 'hsl(var(--primary))', fontWeight: 400 }}>i</span>
          novations
        </span>
      </span>
    </Link>
  );
};
