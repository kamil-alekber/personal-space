import Head from 'next/head'
import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/globals.css'
import { BasketProvider } from '../hooks/useBasket'

function MyApp({ Component, pageProps }) {
  return (
    <BasketProvider>
      <Head>
        <title>Start Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </BasketProvider>
  )
}

export default MyApp
