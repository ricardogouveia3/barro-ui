import ToggleButton from './Toogle';
import ButtonLink from './Link';
import type { ButtonProps } from './Button.types';
import NativeButton from './Button.tsx';

const Button = (props: ButtonProps) => {
  if (props.type === 'button') {
    return <NativeButton {...props} />;
  }
  if (props.type === 'toggle') {
    return <ToggleButton {...props} />;
  }
  if (props.type === 'link') {
    return <ButtonLink {...props} />;
  }
  return null;
};

export default Button;
