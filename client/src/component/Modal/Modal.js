import React from 'react'
import './Modal.css'

let Modal = ({content,closeModal}) => {
    return <div className='modal_screen'>
        <div className='modal_center'>
            <div className='modal_input_card'>
                <div className='modal_heading_con'>
                    <p className='modal_heading'>
                        {content}
                    </p>
                    <button className='modal_button' onClick={closeModal}>
                    got it!
                </button>

                </div>
               

            </div>

        </div>

    </div>
}

export default Modal

