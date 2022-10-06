import React, {useEffect} from 'react';
import styles from './Info.module.css';
import AOS from 'aos'
import "aos/dist/aos.css";


function Info() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })

    return (<div className={styles.info_section} data-aos="fade-up"  >
        <div className={styles.info_container}>
            <div className={styles.info}>
                <h1>$217B</h1>
                <p>Quarterly volume traded</p>

            </div>
            <div className={styles.info}>
                <h1>100+</h1>
                <p>Countries supported</p>

            </div>
            <div className={styles.info}>
                <h1>103M+</h1>
                <p>Verified users</p>

            </div>

        </div>


    </div>


    );
}

export default Info;