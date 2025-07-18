interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

export const StatCard = ({ number, label, icon }: StatCardProps) => {
  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-3 group-hover:animate-bounce-gentle">
        {icon}
      </div>
      <div className="text-2xl font-bold text-foreground mb-1">{number}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};