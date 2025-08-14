import { Head } from "minista"
import React from "react"
import ServiceFace from "../sections/service-face"
import ServiceText from "../sections/service-text"
import BrandingWorks from "../sections/branding-works"
import OtherServices from "../sections/other-services"
import { ButtonOutlineBrand } from "../components/ui/buttons"
import ResponsiveContainer from "../components/ui/responsive-container"

export default function () {
  return (
    <>
      <Head>
        <title>About Page | by magmafellow</title>
      </Head>
      <ServiceFace />
      <ServiceText />
      <BrandingWorks />
      <OtherServices />
    </>
  )
}
