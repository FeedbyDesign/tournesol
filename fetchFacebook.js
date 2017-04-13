const fs = require('fs')
const request = require("request")

// To generate a permanent access token, check:
// http://stackoverflow.com/questions/12168452/long-lasting-fb-access-token-for-server-to-pull-fb-page-info
// OR http://stackoverflow.com/questions/17197970/facebook-permanent-page-access-token
const accessToken = process.env.facebookToken
// TODO: Delete hard coded token

const pageId = '183783018648587'
const ratingsUrl = 'https://graph.facebook.com/' + pageId + '?fields=ratings&access_token=' + accessToken
const destFile = 'data/ratings.json'

request(ratingsUrl, function (error, response, body) {
  var json = JSON.parse(body)

  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  var output = json.ratings.data

  output = JSON.stringify(output)

  fs.writeFile(destFile, output, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("Facebook ratings saved!");
  });

})
