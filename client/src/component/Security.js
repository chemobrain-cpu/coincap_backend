import React, {useEffect} from 'react';
import styles from './Security.module.css'
import SectionHead from './SectionHead'
import AOS from 'aos'
import "aos/dist/aos.css";

function Security() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })


    return (<div className={styles.security_section}  >
        <SectionHead title="The most trusted cryptocurrency platform" paragraph="Here are a few reasons why you should choose Coincap" />
        <div className={styles.security_Con}>
            <div className={styles.security_card} data-aos="fade-up" >
                <div className={styles.security_imageCon}  >

                    <span className="material-icons">
                        save
                    </span>

                </div>

                <div className={styles.security_content} >
                    <h1>Secure storage</h1>
                    <p> We store the vast majority of the digital assets in secure offline storage.</p>
                    <a>Learn how Coincap keeps your funds safe and secure <span className="material-icons">
                        arrow_forward
                    </span></a>

                </div>


            </div>
            <div className={styles.security_card} data-aos="fade-up" >
                <div className={styles.security_imageCon}>
                    <img src="../../coinbase_secure2.png" />

                </div>
                <div className={styles.security_content}>
                    <h1>Protected by insurance</h1>
                    <p> Coincap maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $250,000.</p>
                    <a>Learn how your crypto is covered by our insurance policy <span className="material-icons">
                        arrow_forward
                    </span></a>


                </div>



            </div>

            <div className={styles.security_card} data-aos="fade-up" >
                <div className={styles.security_imageCon}>
                <span className="material-icons">
                account_tree
                    </span>

                </div>
                <div className={styles.security_content}>
                    <h1>Industry best practices</h1>
                    <p>Coincap supports a variety of the most popular digital currencies.</p>
                    <a>
                        Learn how we implement industry best practices for account security <span className="material-icons">
                            arrow_forward
                        </span></a>

                </div>


            </div>

        </div>

    </div>

    );
}

export default Security;