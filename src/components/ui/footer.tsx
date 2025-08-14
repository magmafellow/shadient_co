import React from "react"
import ResponsiveContainer from "./responsive-container"
import LogotypeBar from "./logotype-bar"
import { InputDefault } from "./input"
import ColFoot from "./col-foot"

type Props = {} & React.ComponentProps<"footer">

export default function Footer({ className, ...props }: Props) {
  return (
    <footer className={`${className} footer base-section`} {...props}>
      <ResponsiveContainer>
        <div className="footer__main">
          <div className="footer__menu-grid">
            <ColFoot
              title="Company"
              className="footer__col-foot"
              items={[
                { linkURL: "#", text: "About us" },
                { linkURL: "#", text: "Team" },
                { linkURL: "#", text: "Careers" },
              ]}
            />
            <ColFoot
              title="Services"
              className="footer__col-foot"
              items={[
                { linkURL: "#", text: "Branding" },
                { linkURL: "#", text: "Web development" },
                { linkURL: "#", text: "Digital marketing" },
                { linkURL: "#", text: "Mobile app" },
                { linkURL: "#", text: "SEO" },
                { linkURL: "#", text: "User testing" },
              ]}
            />
            <ColFoot
              title="Resources"
              className="footer__col-foot"
              items={[
                { linkURL: "#", text: "Blog" },
                { linkURL: "#", text: "Case study" },
                { linkURL: "#", text: "Testimonials" },
              ]}
            />
            <ColFoot
              title="Follow us"
              className="footer__col-foot"
              items={[
                { linkURL: "#", text: "Instagram" },
                { linkURL: "#", text: "Figma" },
              ]}
            />
          </div>
          <div className="footer__info">
            <a href="#">
              <LogotypeBar />
            </a>
            <p>Get latest updates</p>
            <InputDefault
              placeholder="Your email..."
              className="input_sm footer__info-input"
            />
          </div>
        </div>
        <div className="footer__subsidiary">
          <p>
            Created by{" "}
            <a className="footer__link-magma" href="https://magma-mirror.vercel.app/">magmafellow</a>
          </p>
        </div>
      </ResponsiveContainer>
    </footer>
  )
}
