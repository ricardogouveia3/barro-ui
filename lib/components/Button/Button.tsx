import ToggleButton from './Toogle';
import type { ButtonProps } from './Button.types';

const Button = (props: ButtonProps) => {
  if (props.type === 'toggle') {
    const { ...toggleProps } = props;
    return <ToggleButton {...toggleProps} />;
  }
  return null;
};

export default Button;
