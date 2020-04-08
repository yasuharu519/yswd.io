import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import styled from '@emotion/styled'

const Body = styled.body`
  font-family: 'Noto Sans Japanese',   sans-serif;
  font-weight: 900;
`
type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja" >
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <style>
              @import url(https://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
          </style>
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    )
  }
}

export default Document