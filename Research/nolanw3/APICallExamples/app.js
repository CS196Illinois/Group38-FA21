/*
Score meaning: All reported tones have a score of at least 0.5. Tones with a score of at least 0.75 are likely to be perceived in the content.
Possible Tones:
Anger
 	Anger is evoked due to injustice, conflict, humiliation, negligence, or betrayal. If anger is active, the individual attacks the target, verbally or physically. If anger is passive, the person silently sulks and feels tension and hostility. (An emotional tone.)
Fear
 	Fear is a response to impending danger. It is a survival mechanism that is triggered as a reaction to some negative stimulus. Fear can be a mild caution or an extreme phobia. (An emotional tone.)
Joy
 	Joy (or happiness) has shades of enjoyment, satisfaction, and pleasure. Joy brings a sense of well-being, inner peace, love, safety, and contentment. (An emotional tone.)
Sadness
 	Sadness indicates a feeling of loss and disadvantage. When a person is quiet, less energetic, and withdrawn, it can be inferred that they feel sadness. (An emotional tone.)
Analytical
 	An analytical tone indicates a person's reasoning and analytical attitude about things. An analytical person might be perceived as intellectual, rational, systematic, emotionless, or impersonal. (A language tone.)
Confident
 	A confident tone indicates a person's degree of certainty. A confident person might be perceived as assured, collected, hopeful, or egotistical. (A language tone.)
Tentative
 	A tentative tone indicates a person's degree of inhibition. A tentative person might be perceived as questionable, doubtful, or debatable. (A language tone.)
 */

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const {IamAuthenticator} = require('ibm-watson/auth');
const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
        apikey: 'gBM315juVfKWlIiEzn4uNyvhIO3JVy3CKKR8hnWZfMlD'
    }),
    serviceUrl: 'https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/afd81026-a1c6-4e99-a7fb-cf368ae87909',
});


const text = 'Team, I know that times are tough! Product '
  + 'sales have been disappointing for the past three '
  + 'quarters. We have a competitive product, but we '
  + 'need to do a better job of selling it!';

const toneParams = {
  toneInput: { 'text': text },
  contentType: 'text/plain',
  sentences: false,
};

toneAnalyzer.tone(toneParams)
  .then(toneAnalysis => {
    console.log(JSON.stringify(toneAnalysis, null, 2));
    console.log();
  })
  .catch(err => {
    console.log('error:', err);
  });

  const toneParamsNew = {
    toneInput: { 'text': text },
    contentType: 'application/json',
    sentences: false,
  };

  toneAnalyzer.tone(toneParamsNew)
  .then(toneAnalysis => {
    console.log(JSON.stringify(toneAnalysis, null, 2));
    console.log("Second request");
    console.log();
  })
  .catch(err => {
    console.log('error:', err);
  });
  
  const HTMLInput = "<p>Sad</p>"
  const toneParamsHTML = {
      toneInput: {'text': HTMLInput},
      contentType: 'text/html',
      sentences: false,
  }

  toneAnalyzer.tone(toneParamsHTML)
  .then(toneAnalysis => {
    console.log(JSON.stringify(toneAnalysis, null, 2));
    console.log("HTML request");
    console.log();
  })
  .catch(err => {
    console.log('error:', err);
  });

  const PresidentSampleTweet = "<div class=\"css-1dbjc4n\"><div class=\"css-1dbjc4n\">"+
  "<div dir=\"auto\" class=\"css-901oao r-18jsvk2 r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0\" id=\"id__9yv1pw6qrja\" lang=\"en\">"+ 
  "<span class=\"css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0\">No one making under $400,000 per year will see their taxes go up a single penny because of my Build Back Better Agenda. In fact, the plan cuts taxes for working people.</span></div></div><div class=\"css-1dbjc4n\"></div><div class=\"css-1dbjc4n\"><div aria-label=\"4015 replies, 6673 Retweets, 36990 likes\" role=\"group\" class=\"css-1dbjc4n r-1ta3fxp r-18u37iz r-1wtj0ep r-1s2bzr4 r-1mdbhws\" id=\"id__kutx08i6jve\">" + 
  "<div class=\"css-1dbjc4n r-18u37iz r-1h0z5md\"><div aria-label=\"4015 Replies. Reply\" role=\"button\" tabindex=\"0\" class=\"css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr\" data-testid=\"reply\"><div dir=\"ltr\" class=\"css-901oao r-1awozwy r-14j79pv r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0\"><div class=\"css-1dbjc4n r-xoduu5\"><div class=\"css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg\">" +
  "</div><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi\"><g><path d=\"M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z\">"+
  "</path></g></svg></div><div class=\"css-1dbjc4n r-xoduu5 r-1udh08x\"><span data-testid=\"app-text-transition-container\" style=\"transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);\"><span class=\"css-901oao css-16my406 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-1e081e0 r-qvutc0\"><span class=\"css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0\">4K</span></span></span></div></div></div></div><div class=\"css-1dbjc4n r-18u37iz r-1h0z5md\"><div aria-label=\"6673 Retweets. Retweet\" role=\"button\" tabindex=\"0\" class=\"css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr\" data-testid=\"retweet\">" + 
  "<div dir=\"ltr\" class=\"css-901oao r-1awozwy r-14j79pv r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0\"><div class=\"css-1dbjc4n r-xoduu5\"><div class=\"css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg\"></div><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi\"><g><path d=\"M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z\"></path></g></svg></div>" + 
  "<div class=\"css-1dbjc4n r-xoduu5 r-1udh08x\"><span data-testid=\"app-text-transition-container\" style=\"transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);\"><span class=\"css-901oao css-16my406 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-1e081e0 r-qvutc0\"><span class=\"css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0\">6.6K</span></span></span></div></div></div></div><div class=\"css-1dbjc4n r-18u37iz r-1h0z5md\"><div aria-label=\"36990 Likes. Like\" role=\"button\" tabindex=\"0\" class=\"css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr\" data-testid=\"like\"><div dir=\"ltr\" class=\"css-901oao r-1awozwy r-14j79pv r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0\"><div class=\"css-1dbjc4n r-xoduu5\"><div class=\"css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg\"></div>" + 
  "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi\"><g><path d=\"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z\"></path></g></svg></div><div class=\"css-1dbjc4n r-xoduu5 r-1udh08x\"><span data-testid=\"app-text-transition-container\" style=\"transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);\"><span class=\"css-901oao css-16my406 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-1e081e0 r-qvutc0\"><span class=\"css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0\">36.9K</span></span></span></div></div></div></div>" + 
  "<div class=\"css-1dbjc4n r-18u37iz r-1h0z5md\"><div aria-expanded=\"false\" aria-haspopup=\"menu\" aria-label=\"Share Tweet\" role=\"button\" tabindex=\"0\" class=\"css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr\"><div dir=\"ltr\" class=\"css-901oao r-1awozwy r-14j79pv r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0\"><div class=\"css-1dbjc4n r-xoduu5\"><div class=\"css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg\"></div><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi\"><g><path d=\"M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z\"></path><path d=\"M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z\"></path></g></svg></div></div></div></div></div></div></div>";
  const toneParamsSample = {
    toneInput: {'text': PresidentSampleTweet},
    contentType: 'text/html',
    sentences: false,
}
  toneAnalyzer.tone(toneParamsSample)
  .then(toneAnalysis => {
    console.log(JSON.stringify(toneAnalysis, null, 2));
    console.log("President Sample Tweet request");
    console.log();
  })
  .catch(err => {
    console.log('error:', err);
  });

  const actualContentofSampleTweet = "No one making under $400,000 per year will see their taxes go up a single penny because of my Build Back Better Agenda. In fact, the plan cuts taxes for working people.";
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

  /*
PS C:\Users\nolan\Data\UIUC\Freshman Year\CS196\Group38-FA21\Research\nolanw3\APICallExamples> node app.js
{
  "status": 200,
  "statusText": "OK",
  "headers": {
    "x-powered-by": "Servlet/3.1",
    "access-control-allow-origin": "*",
    "x-service-api-version": "null; 2017-09-21",
    "x-service-build-number": "2021-10-11T05:01:34",
    "cache-control": "no-store",
    "pragma": "no-cache",
    "x-xss-protection": "1; mode=block",
    "x-content-type-options": "nosniff",
    "content-security-policy": "default-src 'none'",
    "content-type": "application/json",
    "content-language": "en-US",
    "content-length": "90",
    "strict-transport-security": "max-age=31536000; includeSubDomains;",
    "x-dp-watson-tran-id": "84780144-73af-4686-ac55-7aef7091903a",
    "x-request-id": "84780144-73af-4686-ac55-7aef7091903a",
    "x-global-transaction-id": "84780144-73af-4686-ac55-7aef7091903a",
    "server": "watson-gateway",
    "x-edgeconnect-midmile-rtt": "23",
    "x-edgeconnect-origin-mex-latency": "222",
    "date": "Sat, 16 Oct 2021 19:45:18 GMT",
    "connection": "close"
  },
  "result": {
    "document_tone": {
      "tones": [
        {
          "score": 0.874323,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        }
      ]
    }
  }
}
HTML request

{
  "status": 200,
  "statusText": "OK",
  "headers": {
    "x-powered-by": "Servlet/3.1",
    "access-control-allow-origin": "*",
    "x-service-api-version": "null; 2017-09-21",
    "x-service-build-number": "2021-10-11T05:01:34",
    "cache-control": "no-store",
    "pragma": "no-cache",
    "x-xss-protection": "1; mode=block",
    "x-content-type-options": "nosniff",
    "content-security-policy": "default-src 'none'",
    "content-type": "application/json",
    "content-language": "en-US",
    "content-length": "157",
    "strict-transport-security": "max-age=31536000; includeSubDomains;",
    "x-dp-watson-tran-id": "2e59df18-6950-4006-ada7-f5a93a5ce71b",
    "x-request-id": "2e59df18-6950-4006-ada7-f5a93a5ce71b",
    "x-global-transaction-id": "2e59df18-6950-4006-ada7-f5a93a5ce71b",
    "server": "watson-gateway",
    "x-edgeconnect-midmile-rtt": "27",
    "x-edgeconnect-origin-mex-latency": "226",
    "date": "Sat, 16 Oct 2021 19:45:18 GMT",
    "connection": "close"
  },
  "result": {
    "document_tone": {
      "tones": [
        {
          "score": 0.507687,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        },
        {
          "score": 0.820755,
          "tone_id": "analytical",
          "tone_name": "Analytical"
        }
      ]
    }
  }
}

{
  "status": 200,
  "statusText": "OK",
  "headers": {
    "x-powered-by": "Servlet/3.1",
    "access-control-allow-origin": "*",
    "x-service-api-version": "null; 2017-09-21",
    "x-service-build-number": "2021-10-11T05:01:34",
    "cache-control": "no-store",
    "pragma": "no-cache",
    "x-xss-protection": "1; mode=block",
    "x-content-type-options": "nosniff",
    "content-security-policy": "default-src 'none'",
    "content-type": "application/json",
    "content-language": "en-US",
    "content-length": "155",
    "strict-transport-security": "max-age=31536000; includeSubDomains;",
    "x-dp-watson-tran-id": "40d63456-2921-4414-b9fc-f35b4d7675c1",
    "x-request-id": "40d63456-2921-4414-b9fc-f35b4d7675c1",
    "x-global-transaction-id": "40d63456-2921-4414-b9fc-f35b4d7675c1",
    "server": "watson-gateway",
    "x-edgeconnect-midmile-rtt": "29",
    "x-edgeconnect-origin-mex-latency": "233",
    "date": "Sat, 16 Oct 2021 19:45:18 GMT",
    "connection": "close"
  },
  "result": {
    "document_tone": {
      "tones": [
        {
          "score": 0.6165,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        },
        {
          "score": 0.829888,
          "tone_id": "analytical",
          "tone_name": "Analytical"
        }
      ]
    }
  }
}
Second request

{
  "status": 200,
  "statusText": "OK",
  "headers": {
    "x-powered-by": "Servlet/3.1",
    "access-control-allow-origin": "*",
    "x-service-api-version": "null; 2017-09-21",
    "x-service-build-number": "2021-10-11T05:01:34",
    "cache-control": "no-store",
    "pragma": "no-cache",
    "x-xss-protection": "1; mode=block",
    "x-content-type-options": "nosniff",
    "content-security-policy": "default-src 'none'",
    "content-type": "application/json",
    "content-language": "en-US",
    "content-length": "96",
    "strict-transport-security": "max-age=31536000; includeSubDomains;",
    "x-dp-watson-tran-id": "e12d6ef6-82da-4210-947a-548dc3bb8043",
    "x-request-id": "e12d6ef6-82da-4210-947a-548dc3bb8043",
    "x-global-transaction-id": "e12d6ef6-82da-4210-947a-548dc3bb8043",
    "server": "watson-gateway",
    "x-edgeconnect-midmile-rtt": "35",
    "x-edgeconnect-origin-mex-latency": "255",
    "date": "Sat, 16 Oct 2021 19:45:18 GMT",
    "connection": "close"
  },
  "result": {
    "document_tone": {
      "tones": [
        {
          "score": 0.959291,
          "tone_id": "analytical",
          "tone_name": "Analytical"
        }
      ]
    }
  }
}
Actual Content Tweet request

{
  "status": 200,
  "statusText": "OK",
  "headers": {
    "x-powered-by": "Servlet/3.1",
    "access-control-allow-origin": "*",
    "x-service-api-version": "null; 2017-09-21",
    "x-service-build-number": "2021-10-11T05:01:34",
    "cache-control": "no-store",
    "pragma": "no-cache",
    "x-xss-protection": "1; mode=block",
    "x-content-type-options": "nosniff",
    "content-security-policy": "default-src 'none'",
    "content-type": "application/json",
    "content-language": "en-US",
    "content-length": "96",
    "strict-transport-security": "max-age=31536000; includeSubDomains;",
    "x-dp-watson-tran-id": "49e04f49-a064-4d3f-828c-b685ea6f04a7",
    "x-request-id": "49e04f49-a064-4d3f-828c-b685ea6f04a7",
    "x-global-transaction-id": "49e04f49-a064-4d3f-828c-b685ea6f04a7",
    "server": "watson-gateway",
    "x-edgeconnect-midmile-rtt": "33",
    "x-edgeconnect-origin-mex-latency": "266",
    "date": "Sat, 16 Oct 2021 19:45:18 GMT",
    "connection": "close"
  },
  "result": {
    "document_tone": {
      "tones": [
        {
          "score": 0.941793,
          "tone_id": "analytical",
          "tone_name": "Analytical"
        }
      ]
    }
  }
}
President Sample Tweet request

   */