const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');


function downloadBrowser(url,filename){



    const file = fs.createWriteStream(filename);
    const request = https.get(url, function(response) {
       response.pipe(file);
    
       // after download completed close filestream
       file.on("finish", () => {
           file.close();
           console.log("Download Completed");
       });
    });
}

module.exports={
    downloadBrowser
}