module.exports = {
  photoCarousel: {
    api: '/carousel-module/*',
    url: 'http://13.57.185.148:3003',
    bundle: 'bundle.js',
  },
  reservations: {
    api: ['/reservation/reservationCost', '/reservation/calendar'],
    url: 'http://18.219.68.43:3001',
    bundle: 'bundle.js',
  },
  reviews: {
    api: '/reviews-module/*',
    url: 'http://18.223.97.190:3006',
    // url: 'http://localhost:3006',
    bundle: 'bundle.js',
  },
  placesToStay: {
    api: ['/more/listings/:id', '/more/users/:id/favorites'],
    url: 'http://ec2-54-183-104-214.us-west-1.compute.amazonaws.com:3004/',
    bundle: 'bundle.js',
  },
};

