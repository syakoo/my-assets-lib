import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import B from './withBase'
// ____________________________________________________________________________
//
export type MyLink = {
  href: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>
export type MyDynamicLink = {
  as: string
} & MyLink
// ____________________________________________________________________________
//
export const MyLink: React.FC<MyLink> = ({ href, children, ...otherProps }) => (
  <>
    <Link href={href} as={B(href)}>
      <a {...otherProps}>{children}</a>
    </Link>
  </>
)

export const MyDynamicLink: React.FC<MyDynamicLink> = ({
  href,
  children,
  as,
  ...otherProps
}) => {
  const router = useRouter()

  return (
    <>
      <a
        style={{ cursor: 'pointer' }}
        {...otherProps}
        onClick={() => router.push(href, as)}
      >
        {children}
      </a>
    </>
  )
}
