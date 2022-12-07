import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { Abel, Fira_Sans, Fira_Sans_Condensed, Georama, Quicksand } from '@next/font/google'

const abel = Abel({
  subsets: ['latin'],
  weight: '400',
})

const fira = Fira_Sans_Condensed({
  subsets: ['latin'],
  weight: ['200', '400', '500'],
})

const quick = Quicksand({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={fira.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
