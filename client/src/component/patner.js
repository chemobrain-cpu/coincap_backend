import React, { useEffect } from 'react';

import styles from './patner.module.css'
import SectionHead from './SectionHead'
//import routers
import AOS from 'aos'
import "aos/dist/aos.css";

function Patner() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    })

    return (
        <div className={styles.patnerSection} data-aos="fade-up">


            <div className={styles.sectionhead_section} data-aos="fade-up" >
                <h1>Our patners</h1>
                
            </div>




            <div className={styles.imageBox}>


                <div className={styles.innerBoxImage}>



                    <div className={styles.imageCard}>
                        <img src={"../../quorom.png"} style={{ width: '50%' }} />

                    </div>

                    <div className={styles.imageCard}>
                        <img src={"../../blockchain2.png"} style={{ width: '100%' }} />

                    </div>
                    

                    <div className={styles.imageCard}>
                        <img src={"../../bitwala_icon.png"} style={{ width: '50%' }} />

                    </div>



                </div>






            </div>

            <div className={styles.imageBox}>


                <div className={styles.innerBoxImage}>



                    <div className={styles.imageCard}>
                        <img src={"../../luno_icon.jpg"} style={{ width: '50%' }} />

                    </div>

                    <div className={styles.imageCard}>
                        <img src={"../../paypal_icon.jpg"} style={{ width: '70%' }} />

                    </div>

                    <div className={styles.imageCard}>
                        <img src={"../../telsa_icon.jpg"} style={{ width: '70%' }} />

                    </div>
                    <div className={styles.imageCard}>
                        <img src={"../../wallmart_icon.jpg"} style={{ width: '70%' }} />

                    </div>



                </div>






            </div>



        </div>

    );
}

export default Patner;