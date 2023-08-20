import React, { useState } from 'react';

type className = string;
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
   * classes to be added to the wrapper div
   */
  wrapperClass?: className;
  /**
   * classes to be added to the input
   */
  inputClass?: className;
  /**
   * classes to be added to the label
   */
  labelClass?: className;
  /**
   * event handler for input value change
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * style for positioning the label relative to the input field
   * - float (default): the label floats to the input's top border when focused or has a value 
   * - top: the label stays above the input field
   * - side: the label is beside the input field
   */
  labelStyle?: 'float' | 'top' | 'side';
  /**
   * style for the input field
   * - underline (default): the label floats to the input's top border when focused or has a value
   * - outline: the label stays above the input field
   * - outline-filled: the label is beside the input field
   * - filled: the label is beside the input field
   */
  inputStyle?: 'underline' | 'outline' | 'outline-filled' | 'filled';
}

/**
 * Input component for user text input
 */
export const Input = ({
  defaultValue,
  onChange,
  label,
  labelStyle = 'float',
  wrapperClass,
  inputClass,
  labelClass,
  ...props }: InputProps) => {
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
    <div className={[
        `relative z-0`,
        labelStyle === 'side' ? 'flex items-center space-x-4' : null,
        wrapperClass
      ].join(' ')}>
      {label && (
        <>
          <label
            htmlFor="floating_standard"
            className={[
              `text-sm transition-all -z-10 origin-[0] duration-300`,
              labelStyle === 'float' ? 
                isFocused || inputValue ? 'absolute -trandefault-y-6 scale-75 top-3' : 'absolute top-1/2 -trandefault-y-1/2 scale-100' 
                : null,
              isFocused && !inputValue ? 'text-highlight-600 dark:text-highlight-500' : 'text-default-500 dark:text-default-400',
              labelClass
            ].join(' ')}
          >
            {label}
          </label>
        </>
      )}
      <input
        type="text"
        className={[
          `block py-2.5 px-0 w-full text-sm text-default-900 bg-transparent border-0 border-b-2 appearance-none peer outline-none ring-0 dark:text-white`,
          isFocused && !inputValue ? `dark:border-highlight-500 border-highlight-600` : `border-default-300 dark:border-default-600`,
          inputClass
        ].join(' ')}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
};
