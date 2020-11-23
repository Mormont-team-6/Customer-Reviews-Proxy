module.exports = {
  photoCarousel: {
    api: '/carousel-module/*',
    url: 'http://localhost:3003',
    bundle: 'bundle.js',
  },
  reservations: {
    api: ['/reservation/reservationCost', '/reservation/calendar'],
    url: 'http://localhost:3001',
    bundle: 'bundle.js',
  },
  reviews: {
    api: '/reviews-module/*',
    // ['/reviews-module/reviews/:id', '/reviews-module/ratings/:id'],
    url: 'http://localhost:3006',
    bundle: 'bundle.js',
  },
  placesToStay: {
    api: ['/more/listings/:id', '/more/users/:id/favorites'],
    url: 'http://localhost:3004',
    bundle: 'bundle.js',
  },
};

