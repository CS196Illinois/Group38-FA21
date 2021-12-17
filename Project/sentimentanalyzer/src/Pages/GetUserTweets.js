import GetSentiment from "../Utils/GetSentiment";
const GetUserTweets = ({uName}) => {
    return(
        <div>
            <GetSentiment text={uName}/>
        </div>

    );
};
export default GetUserTweets;