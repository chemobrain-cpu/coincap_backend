import React from 'react'
import styles from './Input.module.css'

let InputCard = ({label,value,onChange}) => {
    return <div className={styles.form_input_card}>
                <label>{label}</label>
                <input required
                value={value} onChange={onChange}/>
            </div>

}

export default InputCard