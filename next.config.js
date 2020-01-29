const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
module.exports = withMDX({
  exportTrailingSlash: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
