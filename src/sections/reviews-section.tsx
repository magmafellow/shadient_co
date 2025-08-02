import React from "react"
import ResponsiveContainer from "../components/ui/responsive-container"
import { ButtonSwiperNav } from "../components/ui/buttons"
import CardReview from "../components/ui/card-review"

export default function ReviewsSection() {
  return (
    <div className="reviews-section base-section">
      <ResponsiveContainer className="reviews-section__container">
        <div className="reviews-section__info">
          <h3 className="reviews-section__title">
            {"Hear what our customers say :)"}
          </h3>
          <div className="reviews-section__nav">
            <ButtonSwiperNav
              className="reviews-section__nav_prev"
              direction="left"
            />
            <ButtonSwiperNav
              className="reviews-section__nav_next"
              direction="right"
            />
          </div>
        </div>
        <div className="reviews-section__swiper swiper">
          <div className="swiper-wrapper">
            <div className="reviews-section__slide swiper-slide">
              <CardReview
                className="reviews-section__card-review"
                avatarUrl="/images/sections/review/avatar-01.jpg"
                name="Brooklyn Simmons"
                username="manam"
                comment="Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci."
              />
            </div>
            <div className="reviews-section__slide swiper-slide">
              <CardReview
                className="reviews-section__card-review"
                avatarUrl="/images/sections/review/avatar-02.jpg"
                name="Esther Howard"
                username="Offmax"
                comment="Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit."
              />
            </div>
            <div className="reviews-section__slide swiper-slide">
              <CardReview
                className="reviews-section__card-review"
                avatarUrl="/images/sections/review/avatar-03.jpg"
                name="Arlene McCoy"
                username="bloopixel"
                comment="Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est."
              />
            </div>
            <div className="reviews-section__slide swiper-slide">
              <CardReview
                className="reviews-section__card-review"
                avatarUrl="/images/sections/review/avatar-04.jpg"
                name="Jane Cooper"
                username="unpexel"
                comment="Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est."
              />
            </div>

            <div className="reviews-section__slide swiper-slide">
              <CardReview
                className="reviews-section__card-review"
                avatarUrl="/images/sections/review/avatar-01.jpg"
                name="Brooklyn Simmons"
                username="manam"
                comment="Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci."
              />
            </div>
            <div className="reviews-section__slide swiper-slide">
              <CardReview
                className="reviews-section__card-review"
                avatarUrl="/images/sections/review/avatar-02.jpg"
                name="Esther Howard"
                username="Offmax"
                comment="Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit."
              />
            </div>
            <div className="reviews-section__slide swiper-slide">
              <CardReview
                className="reviews-section__card-review"
                avatarUrl="/images/sections/review/avatar-03.jpg"
                name="Arlene McCoy"
                username="bloopixel"
                comment="Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est."
              />
            </div>
            <div className="reviews-section__slide swiper-slide">
              <CardReview
                className="reviews-section__card-review"
                avatarUrl="/images/sections/review/avatar-04.jpg"
                name="Jane Cooper"
                username="unpexel"
                comment="Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est."
              />
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
