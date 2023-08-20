import React from 'react';
import './button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  buttonType?: 'primary' | 'outline';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional icon element to be displayed before the label
   */
  icon?: React.ReactElement;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  buttonType = 'primary',
  size = 'medium',
  label,
  icon,
  className,
  ...props
}: ButtonProps) => {
  let buttonClass

  switch (buttonType) {
    case 'primary':
      buttonClass = 'bg-highlight-500 text-default-200 border-highlight-600 hover:bg-highlight-200 hover:text-default-700 hover:border-highlight-200'
      break
    case 'outline':
      buttonClass = 'border-default-200'
  }

  return (
    <button
      type="button"
      className={['rounded-full border-2 transition-all duration-500 disabled:!bg-gray-500 disabled:border-none disabled:!text-default-100', `storybook-button--${size}`, buttonClass, className].join(
        ' '
      )}
      {...props}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {label && label}
    </button>
  );
};
