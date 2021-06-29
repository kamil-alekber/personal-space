import Head from 'next/head'
import React from 'react'
import '../styles/globals.css'
import { Header } from '../components/Header'
import { TodoProvider } from '../hooks/todoProvider'

function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </TodoProvider>
  )
}

export default MyApp
