import React from "react"
import ResponsiveContainer from "./responsive-container"
import LogotypeBar from "./logotype-bar"
import Menu from "./menu"
import { ButtonOutlineBrand } from "./buttons"
import Burger from "./burger"

type Props = {} & React.ComponentProps<"header">

export default function Header({ className, ...props }: Props) {
  return (
    <header className={`${className} header`} {...props}>
      <div className="header__announce">
        <span>developed by @magmafellow</span>
      </div>
      <ResponsiveContainer className="header__container">
        <a href="#" className="header__logo">
          <LogotypeBar />
        </a>
        <div className="header__desktop-box">
          <nav className="header__nav">
            <Menu className="header__menu" />
          </nav>
          <ButtonOutlineBrand>CONTACT</ButtonOutlineBrand>
        </div>
        <Burger className="header__burger" />
      </ResponsiveContainer>
    </header>
  )
}
