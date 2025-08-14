import React from "react"
import ResponsiveContainer from "../components/ui/responsive-container"
import LogoBox from "../components/ui/logo-box"

export default function TrustedBySection() {
  return (
    <div className="trusted-by-section base-section">
      <ResponsiveContainer className="trusted-by-section__container">
        <div className="trusted-by-section__info">
          <h2 className="trusted-by-section__title typo-head-2">
            Trusted by 200+ companies around the world
          </h2>
          <p className="trusted-by-section__description">
            Vulputate molestie molestie amet leo blandit accumsan. Sapien sed
            amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id
            in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus
            ac.
          </p>
        </div>

        <div className="trusted-by-section__companies">
          <div className="trusted-by-section__swiper-1 swiper">
            <div className="swiper-wrapper trusted-by-section__swiper-wrapper trusted-by-section__swiper-wrapper-1">
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/01.svg" alt="Company #1" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/02.svg" alt="Company #2" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/03.svg" alt="Company #3" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/04.svg" alt="Company #4" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/05.svg" alt="Company #5" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/06.svg" alt="Company #6" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/04.svg" alt="Company #4" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/05.svg" alt="Company #5" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/06.svg" alt="Company #6" />
                </LogoBox>
              </div>
            </div>
          </div>

          <div className="trusted-by-section__swiper-2 swiper">
            <div className="swiper-wrapper trusted-by-section__swiper-wrapper trusted-by-section__swiper-wrapper-2">
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/01.svg" alt="Company #1" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/02.svg" alt="Company #2" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/03.svg" alt="Company #3" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/04.svg" alt="Company #4" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/05.svg" alt="Company #5" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/06.svg" alt="Company #6" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/04.svg" alt="Company #4" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/05.svg" alt="Company #5" />
                </LogoBox>
              </div>
              <div className="trusted-by-section__slide swiper-slide">
                <LogoBox>
                  <img src="/icons/company-logos/06.svg" alt="Company #6" />
                </LogoBox>
              </div>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
