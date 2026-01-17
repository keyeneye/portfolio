import { 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink, 
  Code,
  Mail,
  ChevronRight
} from 'lucide-react';

const icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  external: ExternalLink,
  code: Code,
  mail: Mail,
  chevronRight: ChevronRight,
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
