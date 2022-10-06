import React, { useState } from 'react';

import styles from './Learn.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import LearnCard from "../../component/learnCard"
import Footer from "../../component/Footer"
import {useNavigate } from 'react-router-dom'
//let { admin} = useSelector(state => state.userAuth)

function Tips() {
    let navigate = useNavigate()
    let handleNavigate = (url) => {
        navigate(url)
    }

    return (<>

        <NavBar />
        <div className={styles.content}>
            <div className={styles.headingSection}>
                <h1>Tips and tutorials</h1>
                <p>Get practical, step-by-step answers to all things crypto</p>

            </div>

            <div className={styles.guideSection}>
                <LearnCard
                    onPress={() => handleNavigate('/learn/tips-and-tutorials')}
                    url="../../what-are-nfts (1).png"
                    secondHeading="Quick-start guide to nabbing the digital collectible of your dreams"
                    firstParagraph='How do you buy an NFT'

                />
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-cefi')}
                    url="../../Group_31612615.png"
                    paragraph='GLOSSARY'
                    firstParagraph="Guide to Defi tokens and altcoins"

                    secondHeading="From diamond hands to the flippening, we break down 11 of the most popular pieces of crypto lingo"

                />
            </div>

            <div className={styles.guideSection}>
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-cefi')}

                    url="../../Video_02.png"
                    paragraph='TUTORIAL'
                    secondHeading="Learn about different kind of crypto wallet and how to set them up."
                    firstParagraph='How to setup a crypto wallet'

                />
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-cefi')}
                    url="../../Earning-Rewards.png"
                    paragraph='GETTING STARTED'
                    firstParagraph="How to earn crypto rewards"

                    secondHeading="From staking to lending, five of the best ways to grow your crypto"

                />
            </div>

            <div className={styles.guideSection}>
                <LearnCard
                    onPress={() => handleNavigate('/learn/tips-and-tutorials')}
                    url="../../Weathering-the-crypto-dip.png"
                    paragraph='TIPS'
                    secondHeading="How to minimize your losses (and even make savvy moves) during a falling market"
                    firstParagraph='From avoiding FOMO to having a plan, 5 key ways to manage a crypto down cycle'

                />

                <LearnCard
                    onPress={() => handleNavigate('/learn/tips-and-tutorials')}

                    url="../../Crypto___Retirement_Op2-D.png"
                    paragraph="BEGINNER'S GUIDE"
                    firstParagraph="How to invest in crypto via your retirement account"

                    secondHeading="Over the last few years, Bitcoin and other cryptocurrencies have fast emerged as a truly mainstream asset class with a multi-trillion dollar market capitalization. As a result many..."

                />


            </div>

            <div className={styles.guideSection}>
                <LearnCard
                    onPress={() => { console.log('#') }}
                    url="../../expert-tip-2.png"
                    paragraph='EXPERT TIPS'
                    secondHeading="
                    Longtime trader Ray Tong shares practical advice for both new and experienced investors."
                    firstParagraph='An investor who got in when Bitcoin was $10'

                />


                <LearnCard
                    onPress={() => handleNavigate('/learn/tips-and-tutorials/how-to-send-crypto')}
                    url="../../Donating-Crypto.png"
                    paragraph='GETTING STARTED'
                    firstParagraph="How to donate crypto"

                    secondHeading="Bitcoin, ETH, and other cryptocurrencies can make your giving go farther. Plus: 15 nonprofit orgs that accept crypto"

                />
            </div>


            <div className={styles.guideSection}>
                <LearnCard
                    onPress={() => handleNavigate('/learn/tips-and-tutorials/how-to-send-crypto')}
                    url="../../Sending_Crypto___1207png (1).png"
                    paragraph='TUTORIAL'
                    secondHeading="Learn how to send crypto to another wallet — to a friend, family member, or store."
                    firstParagraph='How to send crypto'



                />
                <LearnCard
                    onPress={() => handleNavigate('/learn/crypto-basics/what-is-volatility')}
                    url="../../Dollar-Cost_avg.png"
                    paragraph='TUTORIAL'
                    firstParagraph="When is the best time to invest in crypto?
                    "

                    secondHeading="When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility."

                />
            </div>





        </div>


        <Footer />

    </>

    );
}

export default Tips;