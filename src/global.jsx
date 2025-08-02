import { Head } from "minista"
import Header from "./components/ui/header"
import Footer from "./components/ui/footer"

export default function ({ url, title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content="description" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&display=swap');
        </style>

        <link rel="stylesheet" href="/src/scss/main.scss" />
      </Head>

      <div className="wrapper typo-body">
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </div>
    </>
  )
}
