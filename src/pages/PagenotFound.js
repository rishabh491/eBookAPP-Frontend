import React from 'react'
import Layout from '../components/layout/Layout'
import { Helmet } from 'react-helmet'

const PagenotFound = () => {
  return (
    <Layout>
        <Helmet><title>Page Not Found</title></Helmet>
        <div className='pnf'></div>
        <h2 className='pnf-title'>404</h2>
        <h4>Oops! Page Not Found</h4>
    </Layout>
  )
}

export default PagenotFound
