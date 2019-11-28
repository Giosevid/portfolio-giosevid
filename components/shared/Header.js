import { Fragment } from 'react'
import Link from 'next/link'

const Header = ({ title, children }) => (
  <Fragment>
    <h1>{title}</h1>
    {children}
    <p className='customClass'>Header style</p>
    <Link href="/"><a> Home</a></Link>
    <Link href="/blogs"><a> Blogs</a></Link>
    <Link href="/portfolios"><a> Portfolio</a></Link>
    <Link href="/about"><a> About</a></Link>
    <Link href="/cv"><a> Cv</a></Link>
    <style jsx>
      {`
        a {
          font-size: 20px
        };
        .customClass {
          color: red;
        }
      `}
    </style>
  </Fragment>
)

export default Header
