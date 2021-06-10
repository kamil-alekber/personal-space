import Head from 'next/head'
import React from 'react'
import { Navbar } from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log({ pageProps })

  return (
    <React.Fragment>
      <Head>
        <title>Start Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2>Personal Space</h2>
      </header>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
