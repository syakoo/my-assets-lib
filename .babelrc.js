module.export = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [{ removeViewBox: false }]
        }
      }
    ],
    [
      'transform-define',
      {
        'process.env.BACKEND_URL':
          process.env.NODE_ENV === 'production' ? '/my-assets-lib' : ''
      }
    ]
  ]
}
