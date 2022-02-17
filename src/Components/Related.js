import ItemCard from "./ItemCard"
import '../AllCss/MainPage.css'
import '../AllCss/Reviews.css'

function Related({related}){

    return(
        <>
        <h2 className="title">Related Items</h2>
        <div className="card-holder">
            {related.map( i => <ItemCard item={i}/>)}
        </div>
        </>
    )
}

export default Related