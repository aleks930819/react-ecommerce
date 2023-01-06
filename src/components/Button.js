import className from 'classnames';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  primary,
  success,
  danger,
  warning,
  outline,
  rounded,
  dark,
  to,
  ...rest
}) => {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border h-8',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'bg-zinc-500': dark,
      'text-blue-500': outline && primary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
    }
  );

  if (to) {
    return (
      <Link {...rest} to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
