const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const {IamAuthenticator} = require('ibm-watson/auth');
const GetSentiment = ({text}) => {
    const toneAnalyzer = new ToneAnalyzerV3({
        version: '2017-09-21',
        authenticator: new IamAuthenticator({
            apikey: 'gBM315juVfKWlIiEzn4uNyvhIO3JVy3CKKR8hnWZfMlD'
        }),
        serviceUrl: 'https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/afd81026-a1c6-4e99-a7fb-cf368ae87909',
        disableSslVerification: true,
    });
   /*  const actualContentofSampleTweet = "No one making under $400,000 per year will see their taxes go up a single penny because of my Build Back Better Agenda. In fact, the plan cuts taxes for working people.";
    const toneParamsContent = {
      toneInput: {'text': actualContentofSampleTweet},
      contentType: 'text/plain',
      sentences: false,
    }
    toneAnalyzer.tone(toneParamsContent).then(toneAnalysis => {
        console.log(JSON.stringify(toneAnalysis, null, 2));
        console.log("Actual Content Tweet request");
        console.log();
    })
    .catch(err => {
        console.log('error:', err);
    })
    console.log(toneParamsContent);
    return(<h1>HI</h1>); */
   console.log({text})
    const tempText = {text}["text"];
    console.log(tempText);
    const toneParams = {
        toneInput: { 'text': tempText },
        contentType: 'text/plain',
        sentences: false,
    };
    console.log(toneParams);
    const toneAnalysis = toneAnalyzer.tone(toneParams).catch(err => {
        console.log('error:', err);
    });
    console.log(JSON.stringify(toneAnalysis, null, 2));
    const tones = toneAnalysis["result"]["document_tone"]["tones"];
    const tonesList = tones.map((tone) =>
            <li> {tones["tone_name"]} </li>);
    return(<ul>{tonesList}</ul>);
}
export default GetSentiment;