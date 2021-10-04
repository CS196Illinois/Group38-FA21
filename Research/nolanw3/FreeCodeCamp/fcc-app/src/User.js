function User(props) {
    return(
        //props only allows parent to pass data to child
        //props is read-only
        <div>
            <h2>{props.userName}</h2>
            <p>{props.message}</p>
        </div>
    ); 
}
export default User;