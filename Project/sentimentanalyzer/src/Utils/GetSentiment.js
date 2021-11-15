const GetSentiment = (text) => {
/*     const toneAnalyzer = new ToneAnalyzerV3({
        version: '2017-09-21',
        authenticator: new IamAuthenticator({
            apikey: 'gBM315juVfKWlIiEzn4uNyvhIO3JVy3CKKR8hnWZfMlD'
        }),
        serviceUrl: 'https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/afd81026-a1c6-4e99-a7fb-cf368ae87909',
        disableSslVerification: true,
    }); */
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
    (async () => {
        const rawResponse = await fetch('http://localhost:8080/getTone', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                input: text
            })
        });
        const response = await rawResponse.json();
        console.log("response" + response);
        const tonesList = response['tones'].map((tone) =>
            <li> {response['tones']["tone_name"]} </li>);
        return(<ul>{tonesList}</ul>);
    })();
    
/*     const toneParams = {
        toneInput: { 'text': text },
        contentType: 'text/plain',
        sentences: false,
    };
    console.log(toneParams);
    const toneAnalysis = toneAnalyzer.tone(toneParams).catch(err => {
        console.log('error:', err);
    });
    console.log(JSON.stringify(toneAnalysis, null, 2));
    const tones = toneAnalysis["result"]["document_tone"]["tones"]; */
    
}
export default GetSentiment;