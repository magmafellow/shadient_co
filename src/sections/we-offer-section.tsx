import React from "react"
import ResponsiveContainer from "../components/ui/responsive-container"
import CardOffer from '../components/ui/card-offer'

export default function WeOfferSection() {
  return (
    <div className="we-offer-section base-section">
      <ResponsiveContainer className="we-offer-section__container">
        <h2 className="we-offer-section__title typo-head-2">We Offer</h2>
        <p className="we-offer-section__description typo-body">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
          magna semper orci a tincidunt.{" "}
        </p>
        <div className="we-offer-section__grid">
          <CardOffer imgUrl="/icons/misc/brand.svg" title='Branding' description="Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices" />
          <CardOffer imgUrl="/icons/misc/web-dev.svg" title='Web development' description="Integer ante non nunc, eget est justo vel semper nunc. Lacus " />
          <CardOffer imgUrl="/icons/misc/digital-marketing.svg" title='Digital marketing' description="Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est." />
          <CardOffer imgUrl="/icons/misc/mobile-app.svg" title='Mobile App' description="Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices" />
          <CardOffer imgUrl="/icons/misc/seo.svg" title='SEO' description="Integer ante non nunc, eget est justo vel semper nunc. Lacus " />
          <CardOffer imgUrl="/icons/misc/user-testing.svg" title='User testing' description="Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est." />
        </div>
      </ResponsiveContainer>
    </div>
  )
}
