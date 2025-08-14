import { Head } from "minista"
import Header from "./components/ui/header"
import Footer from "./components/ui/footer"
import MobileMenu from "./components/ui/mobile-menu"

export default function ({ url, title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* Developed by magmafellow */}
        <meta property="description" content="description" />
        <link rel="icon" href="favicon.png" type="image/png"></link>
        {/* Third-party */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&display=swap');
        </style>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

        {/* Manual */}
        <link rel="stylesheet" href="/src/scss/main.scss" />
        <script type="module" defer src="/js/main.js"></script>
      </Head>

      <div className="wrapper typo-body">
        <Header />
        <div className="grow">{children}</div>
        <Footer />

        <div className="dialogs"></div>
        <div className="popovers">
          <MobileMenu className="mobile-menu-index" />
        </div>
      </div>
    </>
  )
}
