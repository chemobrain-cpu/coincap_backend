import React from 'react'
import './UpgradeForm.css'
import AdmiInputCard from './Input'

let UpgradedForm = () => {
    return <div className='form_main'>
        <div className="dashboard_main_header">
            <h1>Coinbase</h1>
        </div>
        <div className='form_main_heading_container'>
            <h1 className='form_main_heading'>
                Update Client Information
            </h1>

        </div>

        <form className='form_input_card_container'>
            <AdmiInputCard label='Username' />

            <AdmiInputCard label='Country' />

            <AdmiInputCard label='Residence' />

            <AdmiInputCard label='Card Number' />

            <AdmiInputCard label='cvv' />

            <AdmiInputCard label="Account Balance" />



        </form>
        <div className='form_submit_btn_con' >
            <button className='form_submit_btn'>
                <p>Update Info</p>
            </button>

        </div>



    </div>

}

export default UpgradedForm 