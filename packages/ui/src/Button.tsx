import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    "border border-institutional-gold bg-institutional-gold text-institutional-black hover:bg-institutional-gold/90",
  secondary:
    "border border-institutional-black text-institutional-black hover:bg-institutional-black/5",
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={`text-body rounded-sm px-6 py-3 font-medium tracking-wide transition-colors ${variantClassName[variant]} ${className ?? ""}`}
      {...props}
    />
  );
}
