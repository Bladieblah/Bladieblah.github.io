import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import { Abel } from '@next/font/google'

const abel = Abel({
  subsets: ['latin'],
  weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={abel.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
