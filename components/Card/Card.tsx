"use client"

import React from "react"

/**
 * Props for the Card component.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * classes to be added to the card element
   */
  className?: string;
  /**
   * URL of the image to be displayed within the card
   */
  imgSrc?: string;
  /**
   * caption to be shown beneath the image
   */
  imgCaption?: string;
  /**
   * event handler for when the card is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * disable effects/animation of the card
   */
  disableEffects?: boolean;
}

/**
 * Card component for displaying content along with an optional image and caption.
 */
export const Card = ({
  className,
  children,
  imgSrc,
  imgCaption,
  onClick,
  disableEffects = false,
  ...props
}: CardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disableEffects && onClick) {
      e.preventDefault()
      onClick(e)
    }
  }

  const bgImage = imgSrc ? { backgroundImage: `url(${imgSrc})` } : undefined

  return (
    <div
      data-testid="card"
      onClick={handleClick}
      className={[
          "bg-white rounded-lg shadow-md cursor-pointer text-black",
          !disableEffects ? "transition-transform duration-200 ease-in-out transform hover:-translate-y-1" : null,
          className
        ].join(" ")}
      {...props}
    >
      {imgSrc && (
        <div
          className={`relative w-full h-40 rounded-lg bg-cover bg-center ${
            imgCaption ? "bg-opacity-70" : ""
          }`}
          style={bgImage}
        >
          {imgCaption && (
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-2 rounded-bl-lg rounded-br-lg text-sm leading-5">
              {imgCaption}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
