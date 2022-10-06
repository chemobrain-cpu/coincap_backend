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
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-bitcoin')}
                    url="../../Learn_Illustration_Ultimate_Guide_Bitcoin (1).png"
                    paragraph="BEGINNER'S GUIDE"
                    secondHeading="Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet."
                    firstParagraph='What is Bitcoin'

                />
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-ethereum')}
                    url="../../what-is-ethereum.png"
                    paragraph="BEGINNER'S GUIDE"
                    firstParagraph='What is Ethereum?'
                    secondHeading='Ethereum is the second-biggest cryptocurrency by market cap after Bitcoin. It is also a decentralized computing platform that can run a wide variety of applications — including the...'

                />
            </div>

            <div className={styles.guideSection}>

                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-cryptocurrency')}

                    url="../../Learn_Illustration_What_is_a_Crypto_Wallet (1).png"
                    paragraph="BEGINNER'S GUIDE"

                    secondHeading="Bitcoin, Ethereum, and other crypto are revolutionizing how we invest, bank, and use money. Learn more in this beginner's guide."

                    firstParagraph='What is cryptocurrency?'

                />


                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-blockchain')}
                    url="../../Learn_Illustration_Ultimate_Guide_Blockchain.png"
                    paragraph="BEGINNER'S GUIDE"
                    firstParagraph='What is a blockchain?'
                    secondHeading='Cryptocurrencies like Bitcoin and Ethereum are powered by a technology called the blockchain.'

                />
            </div>

            <div className={styles.headingSection}>
                <h1>Glossary</h1>
                <p>Expand your crypto vocabulary</p>
            </div>



            <div className={styles.guideSection}>


                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-volatility')}

                    url="../../Volatility.png"
                    paragraph="KEY TERM"

                    secondHeading="Volatility is a measure of how much the price of an asset has moved up or down over time...."

                    firstParagraph='What is Volatility?'

                />



                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-token')}
                    url="../../Learn_Illustration_What_is_a_Token.png"
                    paragraph="KEY TERM"
                    firstParagraph='What is a Token?'
                    secondHeading='Technically, “token” is just another word for “cryptocurrency” or “cryptoasset.” But  ....'

                />


            </div>

            <div className={styles.guideSection}>


                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-dogecoin')}
                    url="../../coinbase-lend.png"
                    paragraph="KEY TERM"

                    secondHeading="DOGE was created as a lighthearted alternative to traditional cryptocurrencies, but it's b..."

                    firstParagraph='What is Dogecoin?'

                />



                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-inflation')}
                    url="../../Learn_Illustration_What_is_Inflation_Rate.png"
                    paragraph="KEY TERM"
                    firstParagraph='What is inflation?'

                    secondHeading='Inflation is the process by which a currency like the dollar or Euro loses value over time...'

                />



            </div>


            <div className={styles.guideSection}>
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-cefi')}

                    url="../../coinbase-lend (1).png"
                    paragraph="KEY TERM"

                    firstParagraph='What is CeFi?'
                    secondHeading=' Learn how to earn interest on your savings or take out a loan using crypto as collateral...'

                />




                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-stablecoin')}
                    url="../../Learn_Illustration_What_is_a_Stablecoin.png"
                    paragraph="KEY TERM"

                    firstParagraph='What is a stablecoin?'
                    secondHeading='A stablecoin is a digital currency that is pegged to a “stable” reserve asset like the U.S...'

                />






            </div>


        </div>


        <Footer />

























    </>

    );
}

export default Learn;