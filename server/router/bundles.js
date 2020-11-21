const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  photoCarousel, reservations, reviews, placesToStay
} = require('../config/services.js');

const router = Router();

router.use('/.js', createProxyMiddleware({
  target: photoCarousel.url,
  pathRewrite: {
    '^/bundles/photoCarousel.js': photoCarousel.bundle
  },
  changeOrigin: true
}));
router.use('/reservations.js', createProxyMiddleware({
  target: reservations.url,
  pathRewrite: {
    '^/bundles/reservations.js': reservations.bundle
  },
  changeOrigin: true
}));
router.use('/reviews.js', createProxyMiddleware({
  target: reviews.url,
  pathRewrite: {
    '^/bundles/reviews.js': reviews.bundle
  },
  changeOrigin: true
}));
router.use('/placesToStay.js', createProxyMiddleware({
  target: placesToStay.url,
  pathRewrite: {
    '^/bundles/placesToStay.js': placesToStay.bundle
  },
  changeOrigin: true
}));

module.exports = router;