import React from "react"
import ResponsiveContainer from "../components/ui/responsive-container"
import CardBlog from '../components/ui/card-blog'
import { ButtonOutlineBrand } from "../components/ui/buttons"

export default function SomePiecesSection() {
  return (
    <div className="some-pieces-section base-section">
      <ResponsiveContainer className="some-pieces-section__container">
        <div className="some-pieces-section__grid">
          <div className="some-pieces-section__grid-spec">
            <h2 className="typo-head-2">Some pieces of our work</h2>
            <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
            <ButtonOutlineBrand>SHOW MORE</ButtonOutlineBrand>
          </div>
          
          <CardBlog className="some-pieces-section__card-blog some-pieces-section__grid_big-01" imgUrl='/images/mock/sea-sunset-01.jpg'  tags={['WEBSITE']} title='Creative landing page' />
          <CardBlog className="some-pieces-section__card-blog" tags={['DIGITAL MARKETING']} title='Why We Collect User’s Data' />

          <CardBlog className="some-pieces-section__card-blog" tags={['BRANDING']} title='Creative Branding' />
          <CardBlog className="some-pieces-section__card-blog some-pieces-section__grid_big-02" imgUrl='/images/mock/seo-sunset-02.jpg' tags={['WEBSITE']} title='Creative landing page' />


          <CardBlog className="some-pieces-section__card-blog" tags={['DEVELOPMENT']} title='Automation. Advanced Level' />
          <CardBlog className="some-pieces-section__card-blog" tags={['SEO']} title='How We Optimized Our SEO' />

        </div>
      </ResponsiveContainer>
    </div>
  )
}
