import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export const TestimonialCard = ({ name, role, content, avatar, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-primary transition-all duration-300">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <p className="text-foreground mb-4 italic">"{content}"</p>
      
      <div className="flex items-center gap-3">
        <img 
          src={avatar} 
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};