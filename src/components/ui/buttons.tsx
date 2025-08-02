import React from "react"

type Props = {} & React.ComponentProps<"button">

export function ButtonPrimaryBrand({ className, children, ...props }: Props) {
  return (
    <button
      className={`button button-primary button-brand button-size-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonOutlineBrand({ className, children, ...props }: Props) {
  return (
    <button
      className={`button button-outline button-brand button-size-default ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonWhiteBlack({ className, children, ...props }: Props) {
  return (
    <button
      className={`button button-white-black button-size-default ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonSwiperNav({
  className,
  children,
  direction,
  ...props
}: Props & { direction: "left" | "right" }) {
  return (
    <button className={`button-swiper-nav ${className}`} {...props}>
      {direction === "left" && (
        // <img src="/icons/nav/angle-left.svg" alt="Arrow left" />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.41699 9.99996L12.3337 7.08329C12.667 6.74996 12.667 6.24996 12.3337 5.91663C12.0003 5.58329 11.5003 5.58329 11.167 5.91663L7.66699 9.41663C7.33366 9.74996 7.33366 10.25 7.66699 10.5833L11.167 14.0833C11.3337 14.25 11.5003 14.3333 11.7503 14.3333C12.0003 14.3333 12.167 14.25 12.3337 14.0833C12.667 13.75 12.667 13.25 12.3337 12.9166L9.41699 9.99996Z"
            fill="currentColor"
          />
        </svg>
      )}
      {direction === "right" && (
        // <img src="/icons/nav/angle-right.svg" alt="Arrow right" />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9163 9.41663L8.24967 4.66663C7.91634 4.33329 7.41634 4.33329 7.08301 4.66663C6.74967 4.99996 6.74967 5.49996 7.08301 5.83329L11.1663 9.91663L7.08301 14C6.91634 14.1666 6.83301 14.3333 6.83301 14.5833C6.83301 15.0833 7.16634 15.4166 7.66634 15.4166C7.91634 15.4166 8.08301 15.3333 8.24967 15.1666L12.9997 10.4166C13.2497 10.25 13.2497 9.74996 12.9163 9.41663Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  )
}
