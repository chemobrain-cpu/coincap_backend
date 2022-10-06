import React, { useState } from 'react';
import styles from './Dogecoin.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import LearnCard from "../../component/learnCard"
import Footer from "../../component/Footer"
//let { admin} = useSelector(state => state.userAuth)

function Dogecoin() {

    let navigate = useNavigate()      
let handleNavigate = (url) => {
        navigate(url)
}

    return (<>
        <NavBar />
        <div className={styles.content}>
            <div className={styles.leftContent}>
                <div className={styles.headingSection}>
                    <h1>What is Dogecoin?</h1>
                    <p>DOGE was created as a lighthearted alternative to traditional cryptocurrencies, but it's become seriously valuable. Our explainer can help you understand what it is and how it works</p>
                </div>

                <img src={"../../home3.jpg"} />


                <div className={styles.definitionSection}>
                    <h1>Definition</h1>

                    <p>
                        Dogecoin (DOGE) was created as a lighthearted alternative to traditional cryptocurrencies like Bitcoin in 2013. The name and Shiba Inu logo are based on a meme. Unlike Bitcoin, which was designed to be scarce, Dogecoin is intentionally abundant — with 10,000 new coins mined every minute and no maximum supply.
                    </p>

                </div>

                <div className={styles.contentSection}>
                    <p>
                        For most of its existence, Dogecoin was generally considered to be an amusing “memecoin” beloved by its community — but with relatively little value. That changed in 2021: as of April, Dogecoin became one of the ten biggest cryptocurrencies by market cap — with a total value that has topped $50 billion, even though each individual coin is worth pennies (see the current price).

                    </p>

                    <p>
                        How is that possible? Because there’s a lot of Dogecoin in the world. Unlike Bitcoin, which is designed to be scarce and resistant to inflation, Dogecoin was created to be abundant. There are about 130 billion DOGE circulating, and miners produce another 10,000 every minute. (By contrast, there are around 19 million bitcoin, and just 12.5 BTC are mined every ten or so minutes.)

                    </p>

                    <p>
                        Abundance is a key part of the idea — Dogecoin (pronounced “dohj coin”) was created as a funny, low-stakes Bitcoin alternative. As soon as it was launched in late 2013, it began attracting an enthusiastic online community that have used DOGE for everything from tipping strangers for good Reddit comments to helping send the Jamaican bobsled team to the 2014 Winter Olympics in Sochi.
                    </p>

                    <div className={styles.headingSection}>
                        <h1>What makes Dogecoin valuable ?</h1>

                    </div>

                    <p>
                        Like any other asset, the market assigns DOGE a value based on supply and demand. Given the vast and ever-growing supply, demand has had to surge enormously to drive values as high as they’ve been recently.
                    </p>

                    <p>
                        That happened in the first months of 2021, when prices soared around 7,000 percent — driven by retail investors on Reddit (including the wallstreetbets subreddit that sparked the “memestock” craze) working together to push prices up, the broader crypto boom, and months of seemingly tongue-in-cheek tweets by Tesla founder Elon Musk punctuated by his appearance on Saturday Night Live in May 2021.
                    </p>
                    <p>
                        Fast-rising DOGE prices in 2021 attracted considerable media attention (as well as social media posts)  —  which for a time created a cycle that attracted more investors and further increased prices. Whenever an asset sees such dramatic gains, FOMO (or “fear of missing out”) brings waves of new traders into the fold. DOGE remains a highly volatile cryptocurrency, however, and like any investment there is no guarantee that it will go up or down in the future.
                    </p>

                    <div className={styles.headingSection}>
                        <h1>Where did Dogecoin come from ?</h1>

                    </div>

                    <p>
                        Dogecoin was launched as a joke in late 2013 by software developers Billy Marcus and Jackson Palmer, friends from Reddit who had never met offline. They combined two then popular themes in their online circle: the ascendant cryptocurrency Bitcoin and a meme featuring a Shiba Inu and a misspelled version of the word “dog.”
                    </p>
                    <p>
                        To its creators’ surprise, Dogecoin caught on almost immediately — with dogecoin.com receiving more than a million visitors in the first month. Part of what made Dogecoin funny is that it was (and is) a full-fledged cryptocurrency, with its own blockchain and a mining system similar to the one used by Litecoin. Historically low prices (for much of its life you could get DOGE for fractions of a penny) and abundance have recently made it attractive for speculators hoping its value will soar.
                    </p>
                </div>

                <div className={styles.guideSection}>
                    <LearnCard
                       onPress={() => handleNavigate('/learn/crypto-basics/what-is-bitcoin')}
                        url="../../Learn_Illustration_Ultimate_Guide_Bitcoin (1).png"
                        paragraph="BEGINNER'S GUIDE"

                        firstParagraph='What is Bitcoin'

                    />
                    <LearnCard
                        onPress={() => handleNavigate('/learn/crypto-basics/what-is-cefi')}
                        url="../../Alt-Coin.png"
                        paragraph="BEGINNER'S GUIDE"
                        firstParagraph="Guide to Defi tokens and altcoins"



                    />

                    <LearnCard
                        onPress={() => handleNavigate('/learn/crypto-basics/what-is-ethereum')}
                        url="../../what-is-ethereum.png"
                        paragraph="BEGINNER'S GUIDE"
                        firstParagraph="What is Ethereum"


                    />
                </div>





            </div>
            <div className={styles.rightContent}>

            </div>

        </div>
        <div className={styles.earnSection}>
            <div className={styles.earnLeft}>
                <h1>
                Buy Bitcoin in just a few minutes

                </h1>
                <p>
                Start with as little as $25 and pay with your bank account or debit card.

                </p>
                <button>
                    Get Started

                </button>

            </div>
          

        </div>


        <Footer />

    </>

    );
}

export default Dogecoin;