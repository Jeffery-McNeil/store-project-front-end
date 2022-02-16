import React from "react"

function Filter({handleChange}){
    return(
        <div>
            <select onChange={handleChange} name="categories">
                <option value="all">ALL</option>
                <option value="phones">Phones</option>
                <option value="games">Games</option>
            </select>    
        </div>
    )
}

export default Filter