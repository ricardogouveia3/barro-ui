import * as HeroOutlineIcons from '@heroicons/react/24/outline';
import * as HeroSolidIcons from '@heroicons/react/24/solid';
import { Icon } from '../index.ts';
import { cn } from '../../utils/cn.ts';

type Variant = 'outline' | 'solid';

interface IconGalleryProps {
  variant?: Variant;
  className?: string;
  color?: string;
  fill?: string;
}

export default function IconGallery({
  variant = 'outline',
  className = 'w-6 h-6',
  color = '#334155',
  fill,
}: IconGalleryProps) {
  const icons = variant === 'solid' ? HeroSolidIcons : HeroOutlineIcons;
  const names = Object.keys(icons) as (keyof typeof icons)[];

  return (
    <div className="p-6 space-y-6 w-full">
      <div
        className={cn(
          'grid gap-6 grid-cols-2',
          'sm:grid-cols-3',
          'md:grid-cols-4',
          'lg:grid-cols-6',
          'xl:grid-cols-8',
          '2xl:grid-cols-10'
        )}
      >
        {names.map((name) => {
          return (
            <div
              key={name}
              className="flex flex-col items-center text-center gap-8 text-slate-600"
            >
              <Icon
                className={className}
                name={name}
                variant={variant}
                fill={fill}
                color={color}
              />
              <span
                className={cn(
                  'text-xs text-center px-1 break-all w-full truncate sm:whitespace-normal text-white'
                )}
                title={name}
              >
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
