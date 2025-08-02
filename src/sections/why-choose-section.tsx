import React from "react"
import ResponsiveContainer from "../components/ui/responsive-container"
import { ButtonOutlineBrand } from "../components/ui/buttons"

export default function WhyChooseSection() {
  return (
    <div className="why-choose-section base-section">
      <ResponsiveContainer className="why-choose-section__container">
        <div className="why-choose-section__media">
          <img src="/icons/general/man-with-binocle.svg" alt="Man with binocle" className="why-choose-section__media-img" />
        </div>
        <div className="why-choose-section__info">
          <h2 className="why-choose-section__title typo-head-2">Why choose us</h2>
          <p className="why-choose-section__description">Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. </p>
          <ButtonOutlineBrand>LET’S CONNECT</ButtonOutlineBrand>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
