import React from 'react'
import './Modal.css'
import Bounce from "react-activity/dist/Bounce"
import "react-activity/dist/Bounce.css"

let PageLoader = () => {
    return <div className='modal_screen'>
        <div className='modal_center'>
            <div className='modal_input_card'>
                <div className='modal_heading_con'>
                    <Bounce size={30} className='loader' />
                    <p > please wait ... </p>


                </div>


            </div>

        </div>

    </div>
}

export default PageLoader