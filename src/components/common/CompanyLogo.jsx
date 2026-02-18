import { Building2, GraduationCap, Rocket, Leaf } from 'lucide-react';

// Logo imports
import sfuLogo from '../../assets/logos/sfuLogo.png';
import livanovaLogo from '../../assets/logos/LivanovaLogo.svg';
import novionLogo from '../../assets/logos/NovionLogo.webp';
import accruentLogo from '../../assets/logos/AccruentLogo.png';
import gordianLogo from '../../assets/logos/gordianLogo.webp';

// Map logo IDs to imported images
const imageLogos = {
  sfu: sfuLogo,
  livanova: livanovaLogo,
  novion: novionLogo,
  accruent: accruentLogo,
  gordian: gordianLogo,
};

// Fallback icons when no image is provided
const fallbackIcons = {
  sfu: GraduationCap,
  livanova: Building2,
  novion: Leaf,
  accruent: Building2,
  gordian: Building2,
  current: Rocket,
  default: Building2
};

export function CompanyLogo({ id, color, size = 32 }) {
  const imageSrc = imageLogos[id];
  const FallbackIcon = fallbackIcons[id] || fallbackIcons.default;

  // If we have an image, render it
  if (imageSrc) {
    return (
      <img
        src={imageSrc}
        alt={`${id} logo`}
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          flexShrink: 0,
          borderRadius: 4,
        }}
      />
    );
  }

  // Otherwise use the fallback icon
  return (
    <FallbackIcon
      size={size}
      color={color}
      strokeWidth={1.5}
      style={{ flexShrink: 0 }}
    />
  );
}
