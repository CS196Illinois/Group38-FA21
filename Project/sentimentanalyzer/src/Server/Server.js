const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const {IamAuthenticator} = require('ibm-watson/auth');
const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
        apikey: 'gBM315juVfKWlIiEzn4uNyvhIO3JVy3CKKR8hnWZfMlD'
    }),
    serviceUrl: 'https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/afd81026-a1c6-4e99-a7fb-cf368ae87909',
    disableSslVerification: true,
});
app.use(express.json());
var whitelist = ['http://localhost:3000/', 'http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.post('/getTone', cors(corsOptions), (req, res) => {
    const toneParams = {
        toneInput: { 'text': req.body.text },
        contentType: 'application/json',
        sentences: false,
    };
    console.log(toneParams);
    const toneAnalysis = toneAnalyzer.tone(toneParams).catch(err => {
        console.log('error:', err);
    });
    const tones = toneAnalysis.result.document_tone.tones;
    const finalList = [];
    for (var i = 0; i < tones.length; i++) {
        if (tones[i].score >= 0.75) {
            finalList.push(tones[i].tone_name);
        }
    }
    console.log(finalList);
    res.send({
        'tones' : finalList
    })
})
app.listen(8080, () => {console.log("Listening on port 8080")});