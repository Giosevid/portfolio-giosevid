import React, { Fragment } from 'react'
import Header from '../shared/Header'
import Head from 'next/head'

const BaseLayout = ({ children, headerType, className }) => {
  const getHeader = headerType || 'default';
  return (
    <Fragment>
      <Head>
        <title>Giosevid Acosta</title>
        <script src="https://kit.fontawesome.com/0ad13ac68c.js" crossOrigin="anonymous" />
      </Head>
      <div className="layout-container">
        <Header className={`port-nav-${getHeader}`} />
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </Fragment>

  )
};

export default BaseLayout
