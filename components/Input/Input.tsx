import React from 'react';
import './input.scss';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * label to be displayed alongside the input field
   */
  label?: string;
}

/**
 * Input component for user text input
 */
export const Input = ({ defaultValue, onChange, ...props }: InputProps) => {
  return (
    <input
      type="text"
      className=""
      value={defaultValue}
      onChange={onChange}
      { ...props }
    />
  );
};
