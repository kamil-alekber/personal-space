import Head from 'next/head'
import React from 'react'
import '../styles/globals.css'
import { Header } from '../components/Header'
import { TodoProvider } from '../contexts/todoProvider'
import { NotificationProvider } from '../contexts/notificationProvider'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <TodoProvider>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </TodoProvider>
    </NotificationProvider>
  )
}

export default MyApp
