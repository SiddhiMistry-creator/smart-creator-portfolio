import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Download } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  useCase: string;
  price: string;
  originalPrice?: string;
  image: string;
  downloads?: string;
  rating?: number;
  isPremium?: boolean;
}

export const ProductCard = ({
  title,
  description,
  features,
  useCase,
  price,
  originalPrice,
  image,
  downloads,
  rating = 5,
  isPremium = false
}: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl border border-border shadow-card hover:shadow-primary transition-all duration-500 overflow-hidden animate-fade-in">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {isPremium && (
          <Badge className="absolute top-3 right-3 bg-gradient-accent text-white border-0">
            Premium
          </Badge>
        )}
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-gradient-secondary rounded-lg">
            <p className="text-sm text-foreground">
              <span className="font-medium">Perfect for:</span> {useCase}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          {downloads && (
            <div className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              <span>{downloads}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}.0</span>
          </div>
        </div>

        <div className="space-y-3 pt-2 border-t border-border">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>

          <div className="flex gap-2">
            <Button variant="gradient" className="flex-1">
              Buy Now
            </Button>
            <Button variant="outline" size="sm">
              Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};