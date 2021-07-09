import Head from 'next/head'
import React from 'react'
import '../styles/globals.css'
import { Header } from '../components/Header'
import { TodoProvider } from '../hooks/todoProvider'
import { NotificationProvider } from '../hooks/notificationProvider'

function MyApp({ Component, pageProps }) {
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
