import React from 'react'


const Methods = ({ event }) =>{
    const methods = ["+","-","/","*"]
    const MethodsInScreen = methods.map((method)=>{
        return <input type="button" value={method} onClick={event} key={method}/>
    })
    return(
        MethodsInScreen
    )
}

export default Methods