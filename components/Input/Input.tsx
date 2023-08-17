"use client"

import React, { useState } from 'react'

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * label to be displayed alongside the input field
   */
  label?: string;
  /**
   * default value of the input
   */
  defaultValue?: string;
  /**
   * event handler for input value change
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input component for user text input
 */
export const Input = ({ defaultValue, onChange, label, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue || '');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="relative z-0">
      <input
        type="text"
        className={[
          `block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none peer outline-none ring-0
          dark:text-white`,
          isFocused && !inputValue ? `dark:border-blue-500 border-blue-600` :
            `border-gray-300 dark:border-gray-600`
        ].join(' ')}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {label && (
        <label
          htmlFor="floating_standard"
          className={[`absolute text-sm transition-all -z-10 origin-[0] duration-300`, 
          isFocused || inputValue ? '-translate-y-6 scale-75 top-3' : 'top-1/2 -translate-y-1/2 scale-100',
          isFocused && !inputValue ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'].join(' ')}
        >
          {label}
        </label>
      )}
    </div>
  );
};
