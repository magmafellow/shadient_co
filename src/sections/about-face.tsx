import React from "react"
import ResponsiveContainer from "../components/ui/responsive-container"
import { ButtonPrimaryBrand } from "../components/ui/buttons"

export default function AboutFace() {
  return (
    <div className="general-face base-section">
      <ResponsiveContainer className="general-face__container">
        <img
          className="general-face__decor general-face__decor-1"
          src="/images/sections/start/decor-1.svg"
          alt="Colour decor shape"
        />
        <img
          className="general-face__decor general-face__decor-2"
          src="/images/sections/start/decor-2.svg"
          alt="Colour decor shape"
        />

        <h3 className="general-face__subtitle">About us</h3>

        <h2 className="general-face__title typo-head-1">Shadient.co</h2>

        <p className="general-face__text">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo
          id odio turpis pharetra elementum. Pulvinar porta porta feugiat
          scelerisque in elit. Morbi rhoncus, tellus, eros
        </p>

        <div className="general-face__action">
          <ButtonPrimaryBrand className="general-face__action-btn">
            CONTACT
          </ButtonPrimaryBrand>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
