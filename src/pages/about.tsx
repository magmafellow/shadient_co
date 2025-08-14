import { Head } from "minista"
import React from "react"
import AboutFace from "../sections/about-face"
import AboutText from "../sections/about-text"

export default function () {
  return (
    <>
      <Head>
        <title>About Page | by magmafellow</title>
      </Head>
      <AboutFace />
      <AboutText />
    </>
  )
}
