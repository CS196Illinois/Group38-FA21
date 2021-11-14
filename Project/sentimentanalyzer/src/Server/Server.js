const express = require('express');
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
app.post('/getTone', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
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
    res.send({
        'Access-Control-Allow-Origin' : 'http://localhost:3000',
        'tones' : finalList,
    })
})
app.listen(8080, () => {console.log("Listening on port 8080")});