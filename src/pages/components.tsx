import { Head } from "minista"
import ResponsiveContainer from "../components/ui/responsive-container"
import {
  ButtonOutlineBrand,
  ButtonPrimaryBrand,
  ButtonSwiperNav,
} from "../components/ui/buttons"
import { InputDefault, InputWhite } from "../components/ui/input"
import CardOffer from "../components/ui/card-offer"
import CardBlog from "../components/ui/card-blog"
import CardReview from "../components/ui/card-review"
import LogotypeBar from "../components/ui/logotype-bar"
import React from "react"
import Menu from "../components/ui/menu"
import Burger from "../components/ui/burger"

export default function () {
  return (
    <div className="components base-section">
      <ResponsiveContainer>
        <div className="components__heading typo-head-1">Components</div>

        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">Buttons:</div>
          <div className="components__section-box">
            <ButtonPrimaryBrand>Hello brand</ButtonPrimaryBrand>
            <ButtonOutlineBrand>Hi outline!</ButtonOutlineBrand>
          </div>
        </div>
        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">
            Buttons swiper nav:
          </div>
          <div className="components__section-box">
            <ButtonSwiperNav direction="left" />
            <ButtonSwiperNav direction="right" />
          </div>
        </div>

        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">Inputs:</div>
          <div className="components__section-description mb-1h">
            Component used to accept user input information.
          </div>
          <div className="components__section-box">
            <InputDefault placeholder="Enter your email" />
            <InputWhite placeholder="Your Email..." />
          </div>
        </div>

        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">
            Offer card:
          </div>
          <div className="components__section-description mb-1h"></div>
          <div className="components__section-box">
            <CardOffer
              imgUrl="/icons/misc/brand.svg"
              title="Branding"
              description="Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
            />
            <CardOffer
              imgUrl="/icons/misc/user-testing.svg"
              title="User testing"
              description="Sed faucibus faucibus Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est. Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est. Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est. egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est. Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est. Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
            />
          </div>
        </div>
        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">
            Blog card:
          </div>
          <div className="components__section-description mb-1h"></div>
          <div className="components__section-box">
            <CardBlog
              tags={["WEBSITE"]}
              title="Creative landing page"
              imgUrl="/images/mock/sea-sunset-01.jpg"
            />
            <CardBlog
              tags={["DIGITAL MARKETING"]}
              title="Why We Collect User’s Data"
            />
            <CardBlog tags={[]} title="How We Optimized Our SEO" />
          </div>
        </div>
        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">
            Review card:
          </div>
          <div className="components__section-description mb-1h"></div>
          <div className="components__section-box">
            <CardReview avatarUrl="/images/sections/review/avatar-01.jpg" name='Brooklyn Simmons' username='manam' comment="Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci."  />
            <CardReview avatarUrl="/images/sections/review/avatar-02.jpg" name='Esther Howard' username='Offmax' comment="Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit."  />
          </div>
        </div>
        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">
            Shadient_co logotype:
          </div>
          <div className="components__section-description mb-1h"></div>
          <div className="components__section-box">
            <LogotypeBar textClassName="log-text" />
          </div>
        </div>
        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">
            Menu:
          </div>
          <div className="components__section-description mb-1h"></div>
          <div className="components__section-box">
            <Menu />
          </div>
        </div>
        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">
            Burger:
          </div>
          <div className="components__section-description mb-1h"></div>
          <div className="components__section-box">
            <Burger />
            <Burger className="has-open" />
            <Burger />
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
