import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'
import { Helmet } from "react-helmet";

const Layout = (props) => {
  return (
    <div>
    <Helmet>
     
      <title>{props.title}</title>
    </Helmet>
    <Header />
    <main style={{ minHeight: "70vh" }}>
      <Toaster />

      {props.children}
    </main>
    <Footer />
  </div>
  )
}

export default Layout
