import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { clsx } from "clsx";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string;
  hint?: string;
  error?: string;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, leftAddon, rightAddon, className, id: externalId, ...props }, ref) => {
    const generatedId = useId();
    const id = externalId ?? generatedId;
    const hasError = !!error;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-slate-700">
            {label}
            {props.required && <span className="text-red-500 ml-0.5" aria-hidden>*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          {leftAddon && (
            <div className="absolute left-3 text-slate-400 pointer-events-none">
              {leftAddon}
            </div>
          )}
          <input
            ref={ref}
            id={id}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${id}-error` : hint ? `${id}-hint` : undefined
            }
            className={clsx(
              "w-full rounded-lg border bg-white text-sm text-slate-900 placeholder:text-slate-400",
              "h-10 px-3",
              "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0",
              leftAddon && "pl-9",
              rightAddon && "pr-9",
              hasError
                ? "border-red-400 focus-visible:ring-red-400"
                : "border-slate-300 focus-visible:ring-blue-500 hover:border-slate-400",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50",
              className
            )}
            {...props}
          />
          {rightAddon && (
            <div className="absolute right-3 text-slate-400 pointer-events-none">
              {rightAddon}
            </div>
          )}
        </div>

        {error && (
          <p id={`${id}-error`} role="alert" className="text-xs text-red-600">
            {error}
          </p>
        )}
        {!error && hint && (
          <p id={`${id}-hint`} className="text-xs text-slate-500">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
