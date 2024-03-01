import { ForwardRefRenderFunction, forwardRef } from "react";
import { ButtonProps } from "./button.interface";
import { twMerge } from "tailwind-merge";

const button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { className, children, disabled, type = "button", ...rest },
  ref
) => {
  return (
    <button
      type={type}
      disabled={disabled}
      ref={ref}
      {...rest}
      className={twMerge(
        `w-full rounded-full bg-green-500 px-3 py-3 disabled:cursor-not-allowed font-bold text-black transition hover:opacity-75 disabled:opacity-50 border-transparent border`,
        className
      )}
    >
      {children}
    </button>
  );
};
export const Button = forwardRef(button);
