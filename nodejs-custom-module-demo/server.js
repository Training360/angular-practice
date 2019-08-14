const Maintainer = require('./module/maintainer');

const mt = new Maintainer('temp', /\.txt$/);
mt.flush();