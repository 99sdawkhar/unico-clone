import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import WhyChooseUs from '@/components/whyChooseUs'
import Services from '@/components/services'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>No Code & Code Development Company | Build Custom Web & Mobile Apps | Unico Connect</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className={inter.className}>
        <Header />
        <WhyChooseUs />
        <Services />
      </main>
    </>
  )
}
