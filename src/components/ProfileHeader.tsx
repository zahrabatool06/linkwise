import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfileHeaderProps {
  name: string;
  bio: string;
  avatarUrl?: string;
}

export function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center space-y-4 mb-8">
      <div className="relative">
        <ImageWithFallback
          src={avatarUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'}
          alt={name}
          className="w-24 h-24 rounded-[79px] object-cover border-4 border-white shadow-lg"
        />
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-medium">{name}</h1>
        <p className="text-muted-foreground max-w-xs px-4">{bio}</p>
      </div>
    </div>
  );
}