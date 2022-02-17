import '../AllCss/Reviews.css'

function Comment({commentInfo}){
    return(
        < >
        <p className="comment">
           
       

        <span> {commentInfo.comment}</span>
        {console.log(commentInfo)}
        <span className="username"> - {commentInfo.user.username}</span>
        </p>
        </>
    )
}

export default Comment