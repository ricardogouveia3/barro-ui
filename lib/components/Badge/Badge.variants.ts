import { variants } from '../../utils/variants';

export const badgeVariants = variants(
  'text-[12px] inline-flex items-center rounded-full default-border px-3 py-0.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-transparent smooth-text-color hover:bg-stone-100 dark:hover:bg-stone-800',
        secondary:
          'border-transparent bg-stone-100 text-stone-900 hover:bg-stone-100/80 dark:bg-stone-800 dark:text-stone-50 dark:hover:bg-stone-800/80',
        destructive:
          'border-transparent bg-red-500 text-stone-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-stone-50 dark:hover:bg-red-900/80',
        outline: 'text-stone-950 dark:text-stone-50',
        success:
          'border-transparent bg-green-500/15 text-green-700 dark:text-green-400 hover:bg-green-500/25',
        warning:
          'border-transparent bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/25',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
