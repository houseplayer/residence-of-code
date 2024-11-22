'use client';

import { clsx } from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  formAction?: (formData: FormData) => Promise<void>;
}

const Button = ({ label, className, formAction, disabled }: Props) => {
  return (
    <button
      formAction={formAction}
      className={clsx(className, 'border-black border-1 px-2 py-1')}
      disabled={disabled}
    >
      {disabled ? 'saving...' : label}
    </button>
  );
};

export default Button;
