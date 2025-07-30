import { Head } from "minista"
import ResponsiveContainer from "../components/ui/responsive-container"
import { ButtonOutlineBrand, ButtonPrimaryBrand, ButtonSwiperNav } from "../components/ui/buttons"
import { InputDefault, InputWhite } from "../components/ui/input"

export default function () {
  return (
    <div className="components">
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
          <div className="components__section-title typo-head-2">Buttons swiper nav:</div>
          <div className="components__section-box">
            <ButtonSwiperNav direction="left" />
            <ButtonSwiperNav direction="right" />
          </div>
        </div>

        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">Inputs:</div>
          <div className="components__section-description mb-1h">Component used to accept user input information.</div>
          <div className="components__section-box">
            <InputDefault placeholder="Enter your email" />
            <InputWhite placeholder="Your Email..." />
          </div>
        </div>

        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">Offer card:</div>
          <div className="components__section-description mb-1h"></div>
          <div className="components__section-box">
          </div>
        </div>
        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">Blog card:</div>
          <div className="components__section-description mb-1h"></div>
          <div className="components__section-box">
          </div>
        </div>
        <div className="components__section base-section">
          <div className="components__section-title typo-head-2">Review card:</div>
          <div className="components__section-description mb-1h"></div>
          <div className="components__section-box">
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
