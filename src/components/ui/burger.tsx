import React from "react"

type Props = {} & React.ComponentProps<'div'>

export default function Burger({ className, ...props }: Props) {
  return (
    <div className={`${className} burger`} {...props}>
      <span className="burger__stick burger__stick_01"></span>
      <span className="burger__stick burger__stick_02"></span>
      <span className="burger__stick burger__stick_03"></span>
    </div>
  )
}
