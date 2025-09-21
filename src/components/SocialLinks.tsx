import { Github, Twitter, Instagram, Linkedin, Mail, Globe } from 'lucide-react';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  if (!links.length) return null;

  return (
    <div className="flex justify-center space-x-4 mt-8">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
          aria-label={link.platform}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

// Helper function to create social links with icons
export function createSocialLink(platform: string, url: string): SocialLink {
  const icons: Record<string, React.ReactNode> = {
    github: <Github className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    instagram: <Instagram className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    email: <Mail className="w-5 h-5" />,
    website: <Globe className="w-5 h-5" />,
  };

  return {
    platform,
    url,
    icon: icons[platform.toLowerCase()] || <Globe className="w-5 h-5" />
  };
}