import '../AllCss/Reviews.css'
import{useState, useEffect} from 'react'
import Comment from './Comment'

function Reviews(){
    const [productComments, setProductComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [update, setUpdate] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:9292/reviews/${localStorage.itemInfo}`)
        .then(r => r.json())
        .then(data => {
            setProductComments(data)
            console.log('fetched', data)
        }
    )}, [update])

    function sendToCommentDB(e){
        e.preventDefault()
        console.log(newComment)
        fetch("http://localhost:9292/newComment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: newComment,
                product_id: localStorage.itemInfo,
                user_id: localStorage.user
            }),
            })
            .then((r) => r.json())
            .then((newComment) => {
               setProductComments([...productComments, newComment])
               setUpdate(!update)
               setNewComment('')
            });
    }

    return(
        <>
        <div className='comment-container'>
            <h2 className="title">Reviews</h2>
            {console.log(productComments)}
            <div >
            {productComments.map(comment => <Comment commentInfo={comment}/>)}
            </div>
            <h3 className='title'>Add Your Review!</h3>
            <form onSubmit={sendToCommentDB} className="form">
                <textarea type={'text'} name='newComment' placeholder='write your comment here....' value={newComment} onChange={(e)=> setNewComment(e.target.value)} rows='3' cols={'100'}></textarea>
                <br></br>
                <input type={"submit"} className="bttn"></input>
            </form>
        </div>
        </>
    )
}

export default Reviews