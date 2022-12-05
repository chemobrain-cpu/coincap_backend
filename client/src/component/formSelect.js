import React from 'react'
import styles from './formSelect.module.css'

const formSelect = React.memo(({title, changeHandler, status,option_1,option_2}) => {
    return <>
        <h2 className={styles.title}>{title}</h2>
        <select className={styles.selector} onChange={changeHandler} value={status === true ? `${option_1}` : `${option_2}`}>
            <option default>{option_1}</option>
            <option>{option_2}</option>
        </select>
    </>
})

export default formSelect