const express = require('express');
const cors = require('cors');
const util = require('util');
const exec = require('child_process').exec;
require('dotenv').config();
const app = express();

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const {IamAuthenticator} = require('ibm-watson/auth');
const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
        apikey: process.env.IBM_WATSON_KEY,
    }),
    serviceUrl: process.env.IBM_WATSON_URL,
    disableSslVerification: true,
});
app.use(express.json());
app.use(cors());
app.post('/getTone', async (req, res) => {
  var usernamecommand = 'curl "https://api.twitter.com/2/users/by/username/' + req.body.input.text + '" -H "Authorization: Bearer ' + process.env.TWITTER_BEARER_TOKEN + '"'
  console.log(usernamecommand);
  var uid = '';
  var input = '';
  child = exec(usernamecommand, function(error, stdout, stderr){
    uid = JSON.parse(stdout).data.id;
    var tweetcommand = 'curl "https://api.twitter.com/2/users/' + uid + '/tweets?max_results=100" -H "Authorization: Bearer ' + process.env.TWITTER_BEARER_TOKEN + '"';
    c = exec(tweetcommand, function(e, stdo, stde){
      var temp = JSON.parse(stdo).data;
      for(var i = 0; i < temp.length; i++) {
        input = input + temp[i].text;
      }
      console.log(JSON.parse(stdo).meta);
      const toneParams = {
        toneInput: { 'text': input },
        contentType: 'application/json',
        sentences: false,
      };
      console.log(toneParams);
      toneAnalyzer.tone(toneParams)
      .then(toneAnalysis => {
        const tones = toneAnalysis.result.document_tone.tones;
        const finalList = [];
        for (var i = 0; i < tones.length; i++) {
          finalList.push(tones[i].tone_name);
        }
        console.log("finalList" + finalList);
        res.send({
          'tones' : finalList
        })
      })
      .catch(err => {
        console.log(err);
        res.send({
          'tones' : []
        })
      });
      
    });
    if(error !== null)
    {
        console.log('exec error: ' + error);
    }
    
    });
    
})
app.listen(8080, () => {console.log("Listening on port 8080")});