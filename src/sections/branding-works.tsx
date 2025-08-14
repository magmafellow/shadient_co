import React from "react"
import ResponsiveContainer from "../components/ui/responsive-container"
import { ButtonPrimaryBrand } from "../components/ui/buttons"
import CardBlog from "../components/ui/card-blog"

export default function BrandingWorks() {
  return (
    <div className="branding-works base-section">
      <ResponsiveContainer className="branding-works__container">
        <h2 className="typo-head-2">Branding Works</h2>
        <div className="branding-works__grid">
          <CardBlog
            imgUrl="/images/mock/sea-sunset-01.jpg"
            tags={[]}
            title="Creative landing page"
          />
          <CardBlog
            imgUrl="/images/mock/seo-sunset-02.jpg"
            tags={[]}
            title="Creative landing page"
          />
          <CardBlog
            imgUrl="/images/mock/sea-sunset-01.jpg"
            tags={[]}
            title="Creative landing page"
          />
        </div>
      </ResponsiveContainer>
    </div>
  )
}
