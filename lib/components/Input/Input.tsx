import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { InputProps } from './Input.types';


const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, containerClassName, label, error, id, ...props }, ref) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

        return (
            <div className={cn('flex flex-col gap-1.5 w-full', containerClassName)}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium smooth-text-color ml-1"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={cn(
                        'flex h-10 w-full rounded-md default-border default-background px-3 py-2 text-sm',
                        'file:border-0 file:bg-transparent file:text-sm file:font-medium',
                        'placeholder:text-quartz-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        'transition-all duration-200',
                        error && 'border-red-500 focus-visible:ring-red-500',
                        className
                    )}
                    {...props}
                />
                {error && (
                    <span className="text-xs text-red-500 font-medium ml-1 animate-in slide-in-from-top-1 fade-in-0">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
