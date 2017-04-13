var fs = require('fs')
var request = require("request")

var api = 'AIzaSyBFdaAx3a_aJcxVUoWG-aONdEOr_-uL7RE'
var sheet = '19_b6eAvu7ofLGB3L4ytCvgb27elIBBNqC5iOL_MQ7rk'
var url = 'https://sheets.googleapis.com/v4/spreadsheets/'+sheet+'/values/'+'1'+'?key='+api
var destFile = 'data/sheet.json'

// request
//   .get(url)
//   .on('error', function(err) {
//     console.log(err)
//   })
//   .on('response', function(response) {
//     console.log(response.statusCode) // 200
//     console.log(response.headers['content-type']) // 'image/png'
//   })
//   .on('data', function(data) {
//     // decompressed data as it is received
//     console.log(data.values)
//   })
//   .pipe(destination)


request(url, function (error, response, body) {
  var json = JSON.parse(body)

  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  var output = []
  output.length = json.values.length -1
  for (var i=1; i<json.values.length; i++) { // for each line of the dox except the first one
    output[i-1] = {}
    for (var j=0; j<json.values[0].length; j++) { // for each column in each row
      output[i-1][json.values[0][j]] = json.values[i][j]
    }
  }

  output = JSON.stringify(output)

  fs.writeFile(destFile, output, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("Google sheet saved!");
  });

})
// .pipe(destination)
