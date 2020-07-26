import React from 'react'
import Link from 'next/link'

import B from './withBase'
// ____________________________________________________________________________
//
export type MyLink = {
  href: string
  as?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>
// ____________________________________________________________________________
//
export const MyLink: React.FC<MyLink> = ({
  href,
  as,
  children,
  ...otherProps
}) => (
  <>
    <Link href={B(href)} as={as && B(as)}>
      <a {...otherProps}>{children}</a>
    </Link>
  </>
)
