import { Head } from "minista"

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
      {url === "/" ? (
        <div className="home typo-body">{children}</div>
      ) : (
        <div className="typo-body">{children}</div>
      )}
    </>
  )
}
