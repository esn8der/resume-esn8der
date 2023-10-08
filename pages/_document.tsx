import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es-CO">
      <Head >
      <meta charSet="UTF-8" />
      <meta name="description" content="Curriculum para la materia Ingeniería Web de la UdeA" />
      <meta name="author" content="Esneider Ballesta Paredes" />
      <meta name="keywords" content="Curriculum UdeA" />
      </Head>
      <title>Curriculum UdeA</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
