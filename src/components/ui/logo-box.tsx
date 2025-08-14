import React from "react"

type Props = {} & React.ComponentProps<"div">

export default function LogoBox({ className, children, ...props }: Props) {
  return (
    <div className={`${className} logo-box`} {...props}>
      {children}
    </div>
  )
}
