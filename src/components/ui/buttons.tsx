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

export function ButtonSwiperNav({
  className,
  children,
  direction,
  ...props
}: Props & { direction: "left" | "right" }) {
  return (
    <button className={`button-swiper-nav ${className}`} {...props}>
      {direction === "left" && (
        <img src="/icons/nav/angle-left.svg" alt="Arrow left" />
      )}
      {direction === "right" && (
        <img src="/icons/nav/angle-right.svg" alt="Arrow right" />
      )}
    </button>
  )
}
