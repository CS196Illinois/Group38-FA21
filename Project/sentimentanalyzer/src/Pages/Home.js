import GetUserTweets from "./GetUserTweets";
const Home = () => {
    return (
        <div>
            <h1>
                Group 38 Social Media Sentiment Analyzer
            </h1>
            <div className="search">
                <input type="text" placeholder="Enter Twitter Username" height = "300" className="searchbar"/>
                <button type="Submit" onClick={GetUserTweets}>Find Emotion</button>
            </div>
            
        </div>
    );
};
export default Home;