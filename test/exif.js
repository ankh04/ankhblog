var ExifImage = require('exif').ExifImage;

try {
    new ExifImage({ image: __dirname + '/avatar2.png' }, function (error, exifData) {
        if (error)
            console.log('Error: ' + error.message);
        else
            console.log(exifData); // Do something with your data!
    });
} catch (error) {
    console.log('Error: ' + error.message);
}