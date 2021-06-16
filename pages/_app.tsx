import Head from 'next/head'
import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Start Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default MyApp
