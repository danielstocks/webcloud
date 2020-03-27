const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(
  withMDX({
    exportTrailingSlash: true,
    pageExtensions: ["js", "jsx", "md", "mdx"]
  })
);
