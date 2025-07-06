export type ButtonProps = { type: 'toggle' } & ToggleButtonProps;

export type ToggleButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  animatedBorder?: boolean;
  icon: {
    name: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
    color?: string;
    fill?: string;
    variant?: 'solid' | 'outline';
  };
};
