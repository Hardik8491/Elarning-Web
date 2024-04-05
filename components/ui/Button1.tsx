import { cn } from "@/lib/utils";
import { forwardRef } from "react";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          `w-auto
        rounded-md
        bg-black
        border-transparent
        px-4
        py-2
        disabled:cursor-not-allowed
        text-white
        font-semibold,
        hover:opacity-75
      transition 
        `
        ,className
        )}
        ref={ref}
        {...props}
        >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
