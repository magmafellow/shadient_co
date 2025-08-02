import React from "react"
import Burger from "./burger"
import LogotypeBar from "./logotype-bar"
import MenuForMobile from "./menu-for-mobile"

type Props = {} & React.ComponentProps<"div">

export default function MobileMenu({ className, ...props }: Props) {
  return (
    <div className={`${className} mobile-menu`} {...props}>
      <LogotypeBar className="mobile-menu__logotype-bar" />
      <div className="mobile-menu__label">mobile menu</div>
      <Burger className="mobile-menu__burger" />


      <MenuForMobile />
    </div>
  )
}
