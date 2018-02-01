import React from 'react'

export default props=>{
    const history = props.data.map( (val, index)=>{

        if(val.indexOf('Won') !== -1){
            val = 'You Won!'
        }

        return <li className='center-align collection-item' key={index}>{val}</li>
    })

    return(
        <ul className="collection">
            {history}
        </ul>
    )
}