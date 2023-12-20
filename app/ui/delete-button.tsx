'use client';

import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useFormStatus } from 'react-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function DeleteButton({ children, className, ...rest }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      {...rest}
      className={clsx('rounded-md border p-2 hover:bg-gray-100', className)}
    >
      {pending ? <ArrowPathIcon className="spin w-5" /> : children}
    </button>
  );
}
