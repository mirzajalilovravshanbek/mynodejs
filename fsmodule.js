const fs = require('fs');
// const fsFile = fs.readdir('./');

// fs.readdir('./',function(err, files){
//     if ( err )
//         console.log(err);
//     else
//         console.log(files);    
// });

// const data = 'Salom Ravshanbek';
// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// fs.rename('message.txt', 'newFile.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
// });

fs.unlink('./newFile.txt', (err) => {
    if (err) throw err;
    console.log('./newFile.txt was deleted');
});