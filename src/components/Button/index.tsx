'use client';

import { clsx } from 'clsx';
import { experimental_useFormStatus } from 'react-dom';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  formAction?: (formData: FormData) => Promise<void>;
}

const Button = ({ label, className, formAction }: Props) => {
  const { pending } = experimental_useFormStatus();

  return (
    <button
      disabled={pending}
      formAction={formAction}
      className={clsx(className, 'border-black border-1 px-2 py-1')}
    >
      {label}
    </button>
  );
};

export default Button;
