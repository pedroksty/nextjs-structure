module.exports = {
  images: {
    domains: [
      'assets.vercel.com',
      'i.imgur.com',
      'source.unsplash.com'
    ]
  }
}

const withImages = require('next-images')
module.exports = withImages({
  esModule: true
})
