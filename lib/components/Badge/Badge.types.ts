import { HTMLAttributes } from 'react';
import { VariantPropsOf } from '../../utils/variants';
import { badgeVariants } from './Badge.variants';

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantPropsOf<typeof badgeVariants> {}
