import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-brand-600 hover:bg-brand-500 rounded-md px-4 py-2 text-white ${className ?? ""}`}
      {...props}
    />
  );
}
