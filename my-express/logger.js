const fs = require('fs');

function log(req, res, next) {
    console.log("Log yozish...");
    // fs.writeFile('message.txt', res.body, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    // });
    next();
}

module.exports = log;
