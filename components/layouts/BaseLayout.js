import React, { Fragment } from 'react'
import Header from '../shared/Header'
import Head from 'next/head'

const BaseLayout = ({ children, headerType, className, title, cannonical }) => {
  const getHeader = headerType || 'default';
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="Description" content="My name is Giosevid Acosta" />
        <meta name="keywords" content="Giosevid portfolio, giosevid developer, giosevid, giosevid linkedin"/>
        <meta property="og:title" content="Giosevid Acosta - programmer, developer"/>
        <meta property="og:locale" content="en_EU, en_US"/>
        <meta property="og:url" content="http://localhost:3000"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Giosevid Acosta"/>
        {cannonical && <link rel="cannonical" href={`http://localhost:3000${cannonical}`} />}
        <link rel="icon" type="image/ico" href="/static/images/favicon.ico" />
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
