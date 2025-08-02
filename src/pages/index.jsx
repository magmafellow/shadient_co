import { Head } from "minista"
import ResponsiveContainer from "../components/ui/responsive-container"
import FaceSection from "../sections/face-section"
import WeOfferSection from "../sections/we-offer-section"
import WhyChooseSection from "../sections/why-choose-section"
import SomePiecesSection from "../sections/some-pieces-section"
import ReviewsSection from "../sections/reviews-section"
import DiscussIdeaSection from "../sections/discuss-idea-section"
import TrustedBySection from "../sections/trusted-by-section"

export default function () {
  return (
    <>
      <Head>
        <title>Hello!</title>
      </Head>
      <FaceSection />
      <TrustedBySection />
      <WeOfferSection />
      <WhyChooseSection />
      <SomePiecesSection />
      <ReviewsSection />
      <DiscussIdeaSection />
    </>
  )
}
