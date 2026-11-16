import { icons, type LucideProps } from "lucide-react";

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = icons[name as keyof typeof icons] ?? icons.Sparkles;
  return <C aria-hidden {...props} />;
}
