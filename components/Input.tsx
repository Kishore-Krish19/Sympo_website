import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-neonBlue text-sm font-mech tracking-wide mb-2 uppercase">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <input
        className={`bg-black/50 border ${error ? 'border-red-500' : 'border-white/20'} 
          text-white text-sm rounded-none focus:ring-neonOrange focus:border-neonOrange 
          block w-full p-3 transition-all duration-300 backdrop-blur-sm 
          placeholder-gray-600 focus:shadow-[0_0_10px_rgba(255,170,0,0.3)]
          font-body ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500 font-body">{error}</p>}
    </div>
  );
};
