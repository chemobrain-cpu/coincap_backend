import React, { useState } from 'react';

import styles from './Learn.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import LearnCard from "../../component/learnCard"
import Footer from "../../component/Footer"
import { useNavigate } from 'react-router-dom'
//let { admin} = useSelector(state => state.userAuth)

function Learn() {
    let navigate = useNavigate()
    let handleNavigate = (url) => {
        navigate(url)
    }

    return (<>

        <NavBar />
        <div className={styles.content}>
            <div className={styles.headingSection}>
                <h1>Crypto basics</h1>
                <p>New to crypto? Not for long — start with these guides and explainers</p>

            </div>

            <div className={styles.guideSection}>
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-ethereum')}
                    url="../../what-is-ethereum.png"
                    paragraph="BEGINNER'S GUIDE"
                    secondHeading="Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet."
                    firstParagraph='What is Bitcoin'

                />
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-cefi')}
                    url="../../Alt-Coin.png"
                    paragraph="BEGINNER'S GUIDE"
                    firstParagraph="Guide to Defi tokens and altcoins"

                    secondHeading="From Aave to Zcash, decide what to trade with our beginner's guide"

                />
            </div>


            <div className={styles.guideSection}>
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-ethereum')}
                    url="../../what-is-ethereum.png"
                    paragraph="BEGINNER'S GUIDE"
                    firstParagraph='What is Ethereum?'

                />
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-cefi')}
                    url="../../Learn_Illustration_What_is_DeFi.png"
                    paragraph='KEY TERM'
                    firstParagraph='What is Defi'

                />
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-ethereum')}
                    url="../../taxes__1_.png"
                    paragraph='TAX GUIDE'

                    firstParagraph='understanding your 2021 taxes'

                />
                


            </div>



            {/* button section*/}
            <div className={styles.buttonSection}>
                <button>
                    See more crypto basics
                </button>
            </div>



            {/* what is section*/}
            <div className={styles.whatIsSection}>
                <div className={styles.headingSection}>
                    <h1>What is...</h1>

                </div>

                <div className={styles.buttonContainer}>
                    <button>Bitcoin</button><button>Blockchain</button>
                    <button>Cardano</button>
                    <button>Crypto Wallet</button>
                    <button>Defi</button>
                    <button>Etherium</button>
                    <button>Fork</button>
                    <button>Inflation</button>
                    <button>Market Cap</button>
                    <button>NFT</button>
                    <button>Private Key</button>
                    <button>Protocol</button>
                    <button>Smart contract</button>
                    <button>Stablecoin</button>
                    <button>Token</button>
                    <button>Volatility</button>

                </div>

                <button>See more</button>



            </div>

            {/*tips and tutorial section*/}

            <div className={styles.headingSection}>
                <h1>Tips and tutorials</h1>
                <p>Get practical, step-by-step answers to all things crypto</p>

            </div>

            <div className={styles.guideSection}>
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/how-to-send-crypto')}

                    url="../../Donating-Crypto.png"
                    paragraph='GETTING STARTED'

                    firstParagraph='How to denote crypto'

                />
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/how-to-send-crypto')}
                    url="../../Video_02.png"
                    paragraph='YOUR CRYPTO'
                    firstParagraph="How to invest in crypto via your retirement account"



                />
            </div>

            {/* button section*/}
            <div className={styles.buttonSection}>
                <button>
                    See more tips & tutorial
                </button>
            </div>

            {/* earn section*/}

            <div className={styles.earnSection}>
                <div className={styles.earnLeft}>
                    <h1>
                        Earn free crypto

                    </h1>
                    <p>
                        Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.

                    </p>
                    <button>
                        Start earning

                    </button>

                </div>
                <div className={styles.earnRight}>


                </div>

            </div>





        </div>


        <Footer />

























    </>

    );
}

export default Learn;