import { AppProps } from 'next/app'
import { CSSBaseline, ZEITUIProvider } from '@zeit-ui/react'

const App = ({ Component, pageProps }: AppProps) => (
  <ZEITUIProvider>
    <CSSBaseline />
    <Component {...pageProps} />
  </ZEITUIProvider>
)

export default App