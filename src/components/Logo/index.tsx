import React from 'react'

export const Logo: React.FC = () => (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fontFamily: 'sans-serif' }}
  >
    <rect
      x="10"
      y="10"
      width="236"
      height="236"
      fill="palevioletred"
      stroke="palevioletred"
      strokeWidth="10"
      rx="5"
      ry="5"
    />
    <g transform="translate(20, 140)">
      <text
        fontSize="200"
        transform="translate(-5, 0)rotate(20)"
        fill="white"
        fontWeight="bold"
      >
        A
      </text>
      <text
        fontSize="140"
        transform="translate(125, 70)rotate(10)"
        fill="white"
        fontWeight="bold"
      >
        b
      </text>
      <rect x="20" y="6" width="150" height="100" fill="white" rx="5" ry="5" />
    </g>
  </svg>
)
