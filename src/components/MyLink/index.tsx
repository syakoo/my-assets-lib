import React from 'react'
import Link from 'next/link'

import B from '../../logics/withBase'
// ____________________________________________________________________________
//
type MyLink = {
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
    {as && (
      <Link href={href} as={B(as)}>
        <a {...otherProps}>{children}</a>
      </Link>
    )}
    {!as && (
      <Link href={B(href)}>
        <a {...otherProps}>{children}</a>
      </Link>
    )}
  </>
)
