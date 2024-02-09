import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <nav className="dashApp__UI__footer">

<ul className="dashApp__UI__footer__nav">

    <li className="dashApp__UI__footer__nav__item"><Link href="#/about" className="dashApp__UI__footer__nav__item__link">about</Link></li>
    <li  className="dashApp__UI__footer__nav__item"><Link href="#/termsandconditions"  className="dashApp__UI__footer__nav__item__link"> terms &amp; conditions</Link></li>
    <li  className="dashApp__UI__footer__nav__item"><Link href="#/accessibility" className="dashApp__UI__footer__nav__item__link"> accessability</Link></li>
    <li  className="dashApp__UI__footer__nav__item"><Link href="#/privacy" className="dashApp__UI__footer__nav__item__link">privacy</Link></li>
    


</ul>

    </nav>
  )
}

export default Footer