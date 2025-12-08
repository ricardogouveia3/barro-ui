import { badgeVariants } from './Badge.variants';
import { BadgeProps } from './Badge.types';

export default function Badge({ className, variant, ...props }: Readonly<BadgeProps>) {
  return (
    <div
      className={badgeVariants({ variant, className })}
      {...props}
    />
  );
}
