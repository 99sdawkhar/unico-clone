import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import WhyChooseUs from '@/components/whyChooseUs'
import Services from '@/components/services'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />
      <WhyChooseUs />
      <Services />
    </main>
  )
}
