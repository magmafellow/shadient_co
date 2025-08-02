import React from "react"

type Props = {} & React.ComponentProps<"ul">

export default function MenuForMobile({ className, ...props }: Props) {
  return (
    <ul className={`${className} menu-for-mobile`} {...props}>
      <li className="menu-for-mobile__item">
        <div className="menu-for-mobile__link menu-for-mobile__link_container">
          <span>Company</span>
          <img src="/icons/nav/angle-down.svg" alt="down arrow" />
        </div>
      </li>
      <li className="menu-for-mobile__item">
        <a href="#" className="menu-for-mobile__link">
          Services
        </a>
      </li>{" "}
      <li className="menu-for-mobile__item">
        <a href="#" className="menu-for-mobile__link">
          Resources
        </a>
      </li>
    </ul>
  )
}
