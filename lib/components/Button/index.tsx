import ToggleButton from './Toggle';
import ButtonLink from './Link';
import type { ButtonProps } from './Button.types';
import NativeButton from './Button.tsx';

function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`);
}

const Button = (props: ButtonProps) => {
  switch (props.type) {
    case 'button': {
      return <NativeButton {...props} />;
    }
    case 'toggle': {
      return <ToggleButton {...props} />;
    }
    case 'link': {
      return <ButtonLink {...props} />;
    }
    default: {
      return assertNever(props);
    }
  }
};

export default Button;
