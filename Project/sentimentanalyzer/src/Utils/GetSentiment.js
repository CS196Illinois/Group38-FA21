const GetSentiment = (text) => {
    console.log(text);
    (async () => {
        const rawResponse = await fetch('http://localhost:8080/getTone', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: {"input": text}
        });
        console.log("rawResponse" + rawResponse);
        const response = await rawResponse.json();
        console.log("response" + response);
        const tonesList = response['tones'].map((tone) =>
            <li> {response['tones']["tone_name"]} </li>);
        return(<ul>{tonesList}</ul>);
    })();
    
    
}
export default GetSentiment;