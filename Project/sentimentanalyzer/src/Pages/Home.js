import GetUserTweets from "./GetUserTweets";
const Home = () => {
    return (
        <div>
            <h1>
                Group 38 Social Media Sentiment Analyzer
            </h1>
            <h3>This website anaylzes the sentiment of people's tweets, comments, and profile description and Facebook posts, comments, and profile description.</h3>
            <div className="search">
                <input type="text" placeholder="Enter Twitter Username" height = "300" className="searchbar"/>
                <button type="Submit" onClick={GetUserTweets} className="searchbutton">Find Emotion</button>
            </div>
            
        </div>
    );
};
export default Home;