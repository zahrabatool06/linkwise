import { ExternalLink } from 'lucide-react';

interface LinkButtonProps {
  title: string;
  description?: string;
  url: string;
  icon?: React.ReactNode;
}

export function LinkButton({ title, description, url, icon }: LinkButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full block p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors duration-200 group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          {icon && (
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium truncate">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground truncate">{description}</p>
            )}
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
      </div>
    </a>
  );
}