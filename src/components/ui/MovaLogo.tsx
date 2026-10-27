import { cn } from '@/lib/utils';

interface MovaLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: number;
  variant?: 'gold' | 'white' | 'auto';
}

export function MovaLogo({
  className,
  showWordmark = true,
  size = 36,
  variant = 'auto',
}: MovaLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 shrink-0', className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mova-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#8b7355" />
            <stop offset="45%"  stopColor="#c9a96e" />
            <stop offset="100%" stopColor="#e8d5b0" />
          </linearGradient>
          <linearGradient id="mova-shadow-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#c9a96e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6b5233" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Left panel */}
        <path d="M14 72 L14 28 L35 46 L35 72 Z" fill="url(#mova-shadow-grad)" />
        {/* Left top */}
        <path d="M14 28 L35 10 L35 46 Z" fill="url(#mova-gold-grad)" />
        {/* Center dip */}
        <path d="M35 46 L50 62 L65 46 L50 30 Z" fill="url(#mova-shadow-grad)" opacity="0.85" />
        {/* Right top */}
        <path d="M65 10 L65 46 L86 28 Z" fill="url(#mova-gold-grad)" />
        {/* Right panel */}
        <path d="M65 46 L65 72 L86 72 L86 28 Z" fill="url(#mova-shadow-grad)" />
        {/* Top highlight left */}
        <path d="M14 28 L35 10 L50 30 L35 46 Z" fill="url(#mova-gold-grad)" opacity="0.95" />
        {/* Top highlight right */}
        <path d="M50 30 L65 10 L86 28 L65 46 Z" fill="url(#mova-gold-grad)" opacity="0.9" />
      </svg>

      {showWordmark && (
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: size * 0.55,
            letterSpacing: '0.08em',
            background: variant === 'white' ? 'none' : 'var(--accent-gradient)',
            WebkitBackgroundClip: variant === 'white' ? 'unset' : 'text',
            WebkitTextFillColor: variant === 'white' ? 'white' : 'transparent',
            color: variant === 'white' ? 'white' : 'transparent',
          }}
        >
          MOVA
        </span>
      )}
    </span>
  );
}
