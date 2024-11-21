import { clsx } from 'clsx';
import { forwardRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ className, error, ...props }, ref) => {
  return (
    <>
      <input className={clsx(className, 'border-1 border-black px-2 py-1')} ref={ref} {...props} />
      <p className="text-red-500 text-sm">{error}</p>
    </>
  );
});

export default Input;
