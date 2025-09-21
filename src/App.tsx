import { ProfileHeader } from './components/ProfileHeader';
import { LinkButton } from './components/LinkButton';
import { SocialLinks, createSocialLink } from './components/SocialLinks';
import { Github, Globe, BookOpen, Video, ShoppingBag, Coffee } from 'lucide-react';

export default function App() {
  // Sample data - replace with your own information
  const profile = {
    name: "Your Name",
    bio: "Digital creator, developer, and content enthusiast. Welcome to my corner of the internet!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  };

  const links = [
    {
      title: "Portfolio Website",
      description: "Check out my latest projects and work",
      url: "https://your-portfolio.com",
      icon: <Globe className="w-5 h-5 text-blue-600" />
    },
    {
      title: "GitHub",
      description: "Open source projects and code repositories",
      url: "https://github.com/yourusername",
      icon: <Github className="w-5 h-5 text-gray-700" />
    },
    {
      title: "Blog",
      description: "Thoughts on tech, design, and life",
      url: "https://your-blog.com",
      icon: <BookOpen className="w-5 h-5 text-green-600" />
    },
    {
      title: "YouTube Channel",
      description: "Tutorials and tech content",
      url: "https://youtube.com/@yourchannel",
      icon: <Video className="w-5 h-5 text-red-600" />
    },
    {
      title: "Online Store",
      description: "Merch and digital products",
      url: "https://your-store.com",
      icon: <ShoppingBag className="w-5 h-5 text-purple-600" />
    },
    {
      title: "Buy Me a Coffee",
      description: "Support my work",
      url: "https://buymeacoffee.com/yourusername",
      icon: <Coffee className="w-5 h-5 text-orange-600" />
    }
  ];

  const socialLinks = [
    createSocialLink('twitter', 'https://twitter.com/yourusername'),
    createSocialLink('instagram', 'https://instagram.com/yourusername'),
    createSocialLink('linkedin', 'https://linkedin.com/in/yourusername'),
    createSocialLink('github', 'https://github.com/yourusername'),
    createSocialLink('email', 'mailto:your.email@example.com')
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1722811722309-d4c8c09156cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkaWVudCUyMGJhY2tncm91bmQlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NTg0MzYzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      />
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm -z-10" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-md mx-auto px-6 py-12">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          avatarUrl={profile.avatar}
        />
        
        <div className="space-y-4">
          {links.map((link, index) => (
            <LinkButton
              key={index}
              title={link.title}
              description={link.description}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </div>
        
        <SocialLinks links={socialLinks} />
        
        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}