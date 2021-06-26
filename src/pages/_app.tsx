import Head from 'next/head'
import React from 'react'
import '../styles/globals.css'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  )
}

export default MyApp
