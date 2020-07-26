import React from 'react'
import Link from 'next/link'

import B from './withBase'
// ____________________________________________________________________________
//
export type MyLink = {
  href: string
  prefetch?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>
// ____________________________________________________________________________
//
export const MyLink: React.FC<MyLink> = ({
  href,
  children,
  prefetch,
  ...otherProps
}) => (
  <>
    <Link href={href} as={B(href)} prefetch={prefetch}>
      <a {...otherProps}>{children}</a>
    </Link>
  </>
)
