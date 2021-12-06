import {useState, useEffect} from 'react';

const GetSentiment = (text) => {
    const [tones, setTones] = useState([]);

    useEffect(() => {
        async function load() {
            const rawResponse = await fetch('http://localhost:8080/getTone', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"input": text})
            });
            console.log("rawResponse" + rawResponse);
            const response = await rawResponse.json();
            console.log("response" + response);
            setTones(response['tones']);
        }
        load();
    }, [text])
    
    return (
        <ul>
            {tones.map(tone => (
                <li>{tone}</li>
            ))}
        </ul>
    )
}
export default GetSentiment;