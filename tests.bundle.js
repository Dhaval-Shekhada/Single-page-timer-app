var context = require.context('.',true, /.+\.spec\.test.jsx?$/);
context.key().forEach(context);
module.exports = context;
