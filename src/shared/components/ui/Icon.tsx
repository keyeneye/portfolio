import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Code,
  Mail,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  Briefcase,
  Sparkles,
  Zap,
  Globe,
  Terminal,
} from 'lucide-react';

const icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  external: ExternalLink,
  code: Code,
  mail: Mail,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  menu: Menu,
  x: X,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  calendar: Calendar,
  mapPin: MapPin,
  briefcase: Briefcase,
  sparkles: Sparkles,
  zap: Zap,
  globe: Globe,
  terminal: Terminal,
} as const;

type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export function Icon({ name, size = 'md', className }: IconProps) {
  const Component = icons[name];
  return <Component size={sizeMap[size]} className={className} />;
}
