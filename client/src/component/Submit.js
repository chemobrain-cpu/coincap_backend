import React from 'react'
import './Submit.css'

const SubmitBtn = (props)=>{
    return <button className='btn_container' style={{...props.style}}>
        <p>{props.text}</p>
    </button>
}

export default SubmitBtn