import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from 'components/Navigation'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default CustomApp
