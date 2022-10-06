import React, { useState } from 'react';
import styles from './Volatility.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import Footer from "../../component/Footer"
import BulletList from "../../component/bulletListItem"
import {useNavigate } from 'react-router-dom'
//let { admin} = useSelector(state => state.userAuth)

function Volatility() {

    let navigate = useNavigate()
    let handleNavigate = (url) => {
        navigate(url)
    }
    //onClick={()=>{handleNavigate('/signup')}}

    return (<>
        <NavBar />
        <div className={styles.content}>
            <div className={styles.leftContent}>
                <div className={styles.headingSection}>
                    <h1>What is volatility?</h1>


                </div>

                <img src={"../../Volatility.png"} />

                <div className={styles.definitionSection}>
                    <h1>Definition</h1>
                    <p>
                        Volatility is a measure of how much the price of an asset has moved up or down over time. Generally, the more volatile an asset is, the riskier it’s considered to be as an investment — and the more potential it has to offer either higher returns or higher losses over shorter periods of time than comparatively less volatile assets.
                    </p>

                </div>


                <div className={styles.contentSection}>
                    <p>
                        Volatility is a measure of how much the price of any particular asset has moved up or down over time. Generally, the more volatile an asset is, the riskier it’s considered to be as an investment — and the more potential it has to offer either higher returns or higher losses over shorter periods of time than comparatively less volatile assets.
                    </p>

                    <p>
                        As a newer asset class, crypto is widely considered to be volatile — with the potential for significant upward and downward movements over shorter time periods. Stocks are considered to have a wide range of volatility, from the relative stability of large-cap stocks (like Apple or Berkshire Hathaway) to often erratic “penny stocks.” Bonds, by contrast, are considered to be a lower-volatility asset — and typically see less dramatic upward and downward swings that take place over longer time frames.
                    </p>

                </div>

                <div className={styles.headingSection}>
                    <h1>How is volatility measured?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        When people talk about measuring volatility, they’re usually referring to “historical volatility,” a number derived from a study of prices over a specific time period (often 30 days or a year). The prediction of future movements is called “implied volatility” — and because nobody can actually predict the future it’s a less exact science (although it’s the basis for widely used financial tools like the Cboe Volatility Index, nicknamed the “fear index,” which predicts the next 30 days’ stock market volatility).   Quantifying volatility can be done a couple of ways:
                    </p>
                </div>


                <BulletList
                    text="You can use a method called beta, which measures how volatile one stock is relative to the broader market (the typical benchmark is the S&P 500)."
                />
                <BulletList
                    text=" You can compute an asset’s standard deviation, which is a measure of how widely its price has diverged from its historical average."
                />

                <div className={styles.headingSection}>
                    <h1>Why is volatility important to understand?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        Volatility is one of the primary factors that goes into assessing investment risk. Traditionally, investors will take on a high level of risk if they believe the potential reward is worth the possibility of losing some of their investment. (Or all of their investment, as in the recent case of high-risk hedge-fund manager Bill Hwang, whose entire $20 billion dollar fund disappeared in two days.)
                    </p>
                </div>
                <BulletList
                    text="Traditionally, retail investors are advised to diversify their investments within an asset class as a way of reducing risk. One popular strategy is to invest in a basket of stocks (or an index fund), rather than just a few. To further reduce the potential for downside, they may also pair investments in more volatile asset classes like stocks with investments in less volatile classes like bonds."
                />
                <BulletList
                    text="As an asset class that’s only a little more than a decade old, crypto has seen a series of steep rises and subsequent falls — and is considered to be more volatile as a category than stocks. That said, higher trading volumes on Bitcoin (by far the biggest cryptocurrency by market cap) and increased institutional participation seem to be reducing its volatility over time. Cryptocurrencies with lower trading volumes or emerging cryptoassets like DeFi tokens tend to have higher volatility — when experimenting with these assets as a beginner it’s best to risk amounts you can afford to lose."
                />
                <BulletList
                    text="Factors that can increase volatility include positive or negative news coverage and earnings reports that are better or worse than expected. Unusually high spikes in volume of trading will usually correspond to volatility. Very low volume (as seen with so-called penny stocks that don’t trade on major markets or smaller cryptocurrencies) also usually corresponds with high volatility."
                />

                <div className={styles.headingSection}>
                    <h1>Are there ways to reduce crypto volatility?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        For some crypto investors, high volatility is part of the appeal — it creates the possibility for high returns. (And even as Bitcoin’s volatility seems to be declining, it often moves by double-digit percentages in a single week, allowing for strategies like “buying the dip.”)
                    </p>
                    <p>
                        For less risk-tolerant investors, there are strategies that can be used to limit the downside impact of volatility, like dollar-cost averaging. (Generally, investors with longer-term strategies who have good reason to believe that an investment will ultimately rise over time don’t need to think as much about short-term volatility.)  And there are now cryptocurrencies specifically designed to have low volatility called stablecoins (including USD Coin and Dai) — these have their price pegged to a reserve asset like the U.S. dollar.
                    </p>
                </div>





            </div>
            <div className={styles.rightContent}>

            </div>

        </div>

        <div className={styles.earnSection} onClick={()=>{handleNavigate('/signup')}}>
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

export default Volatility;