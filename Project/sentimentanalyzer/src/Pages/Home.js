import GetUserTweets from "./GetUserTweets";
import { useState } from "react";
const Home = () => {
    const [clicked, setClicked] = useState(false);
    const [userName, setUserName] = useState("");
    return (
        <div>
            <h1>
                Group 38 Social Media Sentiment Analyzer
            </h1>
            <h3>This website anaylzes the sentiment of people's tweets, comments, and profile description and Facebook posts, comments, and profile description.</h3>
            <div className="search">
                <input type="text" placeholder="Enter Twitter Username" height = "300" className="searchbar" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <button type="Submit" onClick={()=>{setClicked(!clicked); }} className="searchbutton">Find Emotion</button>
                { clicked && <GetUserTweets uName={userName}/>}
            </div>
            
        </div>
    );
};
export default Home;