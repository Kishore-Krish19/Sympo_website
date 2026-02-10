// ../components/Input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-[var(--accent-blue)] text-sm font-mech tracking-wide mb-2 uppercase">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <input
        className={`bg-[var(--bg-input)] border ${error ? 'border-red-500' : 'border-[var(--border-input)]'} 
          text-[var(--text-primary)] text-sm rounded-none focus:ring-[var(--accent-orange)] focus:border-[var(--accent-orange)] 
          block w-full p-3 transition-all duration-300 backdrop-blur-sm 
          placeholder-[var(--text-muted)] focus:shadow-[0_0_10px_var(--accent-orange)]
          font-body ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500 font-body">{error}</p>}
    </div>
  );
};
