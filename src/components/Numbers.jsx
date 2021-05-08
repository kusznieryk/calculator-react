import React from 'react'


const Numbers = ({ event }) =>{
    const numbers = [1,2,3,4,5,6,7,8,9,0]
    const NumbersInScreen = numbers.map((number)=>{
        return <input type="button" value={number} onClick={event} key={number}/>
    })
    return(
        NumbersInScreen
    )
}


export default Numbers