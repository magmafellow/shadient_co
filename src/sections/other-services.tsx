import React from "react"
import ResponsiveContainer from "../components/ui/responsive-container"
import CardOffer from "../components/ui/card-offer"
import { ButtonOutlineBrand } from "../components/ui/buttons"

export default function OtherServices() {
  return (
    <div className="other-services base-section">
      <ResponsiveContainer className="other-services__container">
        <h2 className="typo-head-2">Other services</h2>
        <div className="other-services__grid">
          <CardOffer
            imgUrl="/icons/misc/brand.svg"
            title="Branding"
            description="Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
          />
          <CardOffer
            imgUrl="/icons/misc/web-dev.svg"
            title="Web development"
            description="Integer ante non nunc, eget est justo vel semper nunc. Lacus "
          />
          <CardOffer
            imgUrl="/icons/misc/digital-marketing.svg"
            title="Digital marketing"
            description="Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
          />
        </div>

        <a href="/">
          <ButtonOutlineBrand>GO HOME</ButtonOutlineBrand>
        </a>
      </ResponsiveContainer>
    </div>
  )
}
