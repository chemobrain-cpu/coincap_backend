import React, { useState,useEffect} from 'react';
import SectionHead from './SectionHead'
import styles from './action.module.css'
import AOS from 'aos'
import "aos/dist/aos.css";


function Action() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })

    return (<div className={styles.action_section} >
        <SectionHead title='Get started in a few minutes' paragraph='Coincap supports a variety of the most popular digital currencies.'/>

        <div className={styles.action_container}>
            <div className={styles.action} data-aos="fade-up">
            
            <i className='material-icons'>admin_panel_settings</i>
                <h1>Create an account</h1>

            </div>
            <div className={styles.action} data-aos="fade-up">
            
            <i className='material-icons'>manage_accounts</i>
                <h1>Link your bank account</h1>

            </div>
            <div className={styles.action} data-aos="fade-up">
            
            <i className='material-icons'>add_business</i>
              
                <h1>Start buying & selling</h1>

            </div>

        </div>


    </div>


    );
}

export default Action;