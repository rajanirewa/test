import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Head from 'next/head'
import React, { ReactNode } from 'react';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trade:able',
  description: 'Trade:able home page',
}
interface RootLayoutProps {
  children: ReactNode;
}


export default function RootLayout({children}: RootLayoutProps)

  {

  return (
    <html lang="en">
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"/>
    </Head>
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
