import React from "react"
import '../AllCss/Filter.css'

function Filter({handleChange}){
    return(
        <div>
            <select className="select" onChange={handleChange} name="categories">
                <option value="all">All</option>
                <option value="phones">Phones</option>
                <option value="tvs">TV's</option>
                <option value="consoles">Consoles</option>
            </select>    
        </div>
    )
}

export default Filter