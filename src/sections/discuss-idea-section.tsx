import React from "react"
import ResponsiveContainer from "../components/ui/responsive-container"
import { InputWhite } from "../components/ui/input"
import { ButtonWhiteBlack } from "../components/ui/buttons"


export default function DiscussIdeaSection() {
  return (
    <div className="discuss-idea-section base-section">
      <ResponsiveContainer className="discuss-idea-section__container base-section">
        <h2 className="discuss-idea-section__title typo-head-2">Let’s discuss the idea</h2>
        <p className="discuss-idea-section__description">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. </p>
        <div className="discuss-idea-section__action">
          <InputWhite className="discuss-idea-section__action-input" placeholder="Your email..." />
          <ButtonWhiteBlack className="discuss-idea-section__action-btn">SEND</ButtonWhiteBlack>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
