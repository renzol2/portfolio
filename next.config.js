const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('@mapbox/rehype-prism')]
  }
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx", "tsx"],
});
