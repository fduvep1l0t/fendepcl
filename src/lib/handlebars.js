const { format } = require('timeago.js');


const helpers = {};

helpers.timeago = (create_date) => {
    return format(create_date);
};

module.exports = helpers;