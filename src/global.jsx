import { Head } from "minista"

export default function ({ url, title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content="description" />

        <link rel="stylesheet" href="/src/scss/main.scss" />
      </Head>
      {url === "/" ? (
        <div className="home">{children}</div>
      ) : (
        <div>{children}</div>
      )}
    </>
  )
}
