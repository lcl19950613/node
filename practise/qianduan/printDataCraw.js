var fs = require('fs');

exports.printDataCraw = function( arr ){

    var outputFilename = 'data.json';

    fs.writeFile(outputFilename, JSON.stringify(arr, null, 4), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + outputFilename);
        }
    });

};
