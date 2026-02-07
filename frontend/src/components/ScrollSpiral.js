import { useEffect, useRef } from "react";

export const ScrollSpiral = () => {
  const svgRef = useRef(null);
  const lastScrollY = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef(null);
  const hoverActiveRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!svgRef.current) return;
      const paths = svgRef.current.querySelectorAll(".spiral-path");
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / docHeight, 1);

      // Calculate scroll velocity for reactive expansion
      const delta = Math.abs(scrollY - lastScrollY.current);
      velocityRef.current = Math.min(delta / 10, 3);
      lastScrollY.current = scrollY;

      const baseWidth = 0.5;
      const velocityBoost = velocityRef.current * 0.4;
      const hoverBoost = hoverActiveRef.current ? 0.8 : 0;
      const strokeW = baseWidth + velocityBoost + hoverBoost;

      paths.forEach((path, i) => {
        const length = path.getTotalLength();
        const offset = length * (1 - progress * 1.2 + i * 0.05);
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${Math.max(offset, 0)}`;
        path.style.strokeWidth = `${strokeW}`;
        path.style.opacity = hoverActiveRef.current
          ? (i === 0 ? '0.55' : '0.4')
          : (i === 0 ? '0.35' : '0.25');
      });
    };

    // Decay velocity over time for smooth falloff
    const tick = () => {
      if (velocityRef.current > 0.01) {
        velocityRef.current *= 0.92;
        if (svgRef.current) {
          const paths = svgRef.current.querySelectorAll(".spiral-path");
          const baseWidth = 0.5;
          const velocityBoost = velocityRef.current * 0.4;
          const hoverBoost = hoverActiveRef.current ? 0.8 : 0;
          paths.forEach((path) => {
            path.style.strokeWidth = `${baseWidth + velocityBoost + hoverBoost}`;
          });
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const handleLabsHover = (e) => {
      hoverActiveRef.current = e.detail.active;
      if (svgRef.current) {
        const paths = svgRef.current.querySelectorAll(".spiral-path");
        paths.forEach((path, i) => {
          path.style.transition = 'opacity 0.4s ease, stroke-width 0.4s ease';
          path.style.opacity = e.detail.active
            ? (i === 0 ? '0.55' : '0.4')
            : (i === 0 ? '0.35' : '0.25');
          path.style.strokeWidth = e.detail.active ? '1.2' : '0.5';
          // Change stroke to blue on hover
          if (e.detail.active) {
            path.style.stroke = i === 0
              ? 'hsl(216, 100%, 50%)'
              : 'hsl(216, 100%, 60%)';
          } else {
            path.style.stroke = '';
          }
        });
      }
    };

    handleScroll();
    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("labs-card-hover", handleLabsHover);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("labs-card-hover", handleLabsHover);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
      data-testid="scroll-spiral"
    >
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 1440 5000"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="spiral-path"
          d="M-50,100 C200,150 400,50 720,200 S1100,100 1490,250 C1200,400 900,300 720,500 S300,400 -50,600 C200,750 500,650 720,800 S1100,700 1490,900 C1200,1050 900,950 720,1150 S300,1050 -50,1250 C200,1400 500,1300 720,1500 S1100,1400 1490,1600 C1200,1750 900,1650 720,1850 S300,1750 -50,1950 C200,2100 500,2000 720,2200 S1100,2100 1490,2300 C1200,2450 900,2350 720,2550 S300,2450 -50,2650 C200,2800 500,2700 720,2900 S1100,2800 1490,3000 C1200,3150 900,3050 720,3250 S300,3150 -50,3350 C200,3500 500,3400 720,3600 S1100,3500 1490,3700 C1200,3850 900,3750 720,3950 S300,3850 -50,4050 C200,4200 500,4100 720,4300 S1100,4200 1490,4400 C1200,4550 900,4450 720,4650 S300,4550 -50,4750"
          stroke="url(#spiralGradient1)"
          strokeWidth="0.5"
          strokeLinecap="round"
          opacity="0.35"
          style={{ transition: 'opacity 0.3s ease' }}
        />
        <path
          className="spiral-path"
          d="M1490,50 C1200,200 900,100 720,300 S300,200 -50,400 C200,550 500,450 720,650 S1100,550 1490,750 C1200,900 900,800 720,1000 S300,900 -50,1100 C200,1250 500,1150 720,1350 S1100,1250 1490,1450 C1200,1600 900,1500 720,1700 S300,1600 -50,1800 C200,1950 500,1850 720,2050 S1100,1950 1490,2150 C1200,2300 900,2200 720,2400 S300,2300 -50,2500 C200,2650 500,2550 720,2750 S1100,2650 1490,2850 C1200,3000 900,2900 720,3100 S300,3000 -50,3200 C200,3350 500,3250 720,3450 S1100,3350 1490,3550 C1200,3700 900,3600 720,3800 S300,3700 -50,3900 C200,4050 500,3950 720,4150 S1100,4050 1490,4250 C1200,4400 900,4300 720,4500 S300,4400 -50,4600"
          stroke="url(#spiralGradient2)"
          strokeWidth="0.5"
          strokeLinecap="round"
          opacity="0.25"
          style={{ transition: 'opacity 0.3s ease' }}
        />
        <defs>
          <linearGradient id="spiralGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(259, 72%, 58%)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(216, 100%, 50%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(259, 72%, 58%)" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="spiralGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(216, 100%, 50%)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="hsl(259, 72%, 58%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(216, 100%, 50%)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
