import React from "react"
import ResponsiveContainer from "../components/ui/responsive-container"
import { InputDefault } from "../components/ui/input"
import { ButtonPrimaryBrand } from "../components/ui/buttons"

export default function FaceSection() {
  return (
    <div className="face-section base-section">
      <ResponsiveContainer className="face-section__container">
        <img
          className="face-section__decor face-section__decor-1"
          src="/images/sections/start/decor-1.svg"
          alt="Colour decor shape"
        />
        <img
          className="face-section__decor face-section__decor-2"
          src="/images/sections/start/decor-2.svg"
          alt="Colour decor shape"
        />

        <img
          className="face-section__grid"
          src="/images/sections/start/bg-grid.svg"
          alt="Background decoration grid"
        />

        <h1 className="face-section__title typo-head-hero">
          Attract <span className="text-gradient-brand">NewLeads</span> like
          never before{" "}
        </h1>
        <p className="face-section__description">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros{" "}
        </p>
        <div className="face-section__action">
          <InputDefault
            placeholder="Your email..."
            className="face-section__action-input"
          />
          <ButtonPrimaryBrand className="face-section__action-btn">
            ATTRACT
          </ButtonPrimaryBrand>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
