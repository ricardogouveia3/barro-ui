import ToggleButton from './Toogle';
import ButtonLink from './Link';
import type { ButtonProps } from './Button.types';

const Button = (props: ButtonProps) => {
  if (props.type === 'toggle') {
    return <ToggleButton {...props} />;
  }
  if (props.type === 'link') {
    return <ButtonLink {...props} />;
  }
  return null;
};

export default Button;
