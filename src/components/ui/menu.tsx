import React from "react"

type Props = {} & React.ComponentProps<"ul">

export default function Menu({ className, ...props }: Props) {
  return (
    <ul className={`${className} menu`} {...props}>
      <li className="menu__item">
        <div className="menu__link menu__link_container">
          <span>Company</span>
          <img src="/icons/nav/angle-down.svg" alt="down arrow" />
        </div>
      </li>
      <li className="menu__item">
        <a href="/service" className="menu__link">
          Services
        </a>
      </li>{" "}
      <li className="menu__item">
        <a href="#" className="menu__link">
          Resources
        </a>
      </li>
    </ul>
  )
}
