import React from 'react'
import Link from 'next/link'

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
    <Link href={href} as={as}>
      <a {...otherProps}>{children}</a>
    </Link>
  </>
)
