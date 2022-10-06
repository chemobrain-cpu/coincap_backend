import React from 'react';
import styles from './Volatility.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import Footer from "../../component/Footer"
import BulletList from "../../component/bulletListItem"
import { useNavigate } from 'react-router-dom'
//let { admin} = useSelector(state => state.userAuth)

function Inflation() {

    let navigate = useNavigate()
    let handleNavigate = (url) => {
        navigate(url)
    }

    return (<>
        <NavBar />
        <div className={styles.content}>
            <div className={styles.leftContent}>
                <div className={styles.headingSection}>
                    <h1>What is inflation?</h1>
                </div>

                <img src={"../../Learn_Illustration_What_is_Inflation_Rate.png"} />

                <div className={styles.definitionSection}>
                    <h1>Definition</h1>
                    <p>
                        Inflation is the process by which a currency like the dollar or Euro loses value over time, causing the price of goods to rise. Bitcoin (and some other cryptocurrencies) are designed to experience predictable and low rates of inflation.
                    </p>

                </div>


                <div className={styles.contentSection}>
                    <p>
                        One attribute that has made cryptocurrencies — particularly Bitcoin — so appealing to investors is the idea that they’re more resistant to inflation than fiat currencies like the U.S. dollar.
                    </p>

                    <p>
                        But what is inflation? Inflation is the process by which currencies lose value over time, causing prices of consumer goods to increase. Because most economists believe that some level of inflation is good for the economy, the U.S. government, for instance, has printed more money than consumers actually need for decades. It’s the reason that a Coke that cost a nickel a half-century ago goes for a few dollars today.
                    </p>

                    <p>
                        Bitcoin, on the other hand, has generally increased in value much faster than the U.S. dollar has lost value — going from virtually worthless in 2010 to more than $20,000 in late 2020. (Because it’s a volatile market, Bitcoin has also seen dramatic spikes and declines, but the trendline over time has been upward.) This has made Bitcoin an increasingly popular hedge against fiat-currency inflation.

                    </p>
                    <p>
                        The main way Bitcoin is designed to resist inflation is that its supply is limited and known, and the creation of new bitcoin will taper off over time in a predictable way. (There will only ever be 21 million bitcoin, and every four years the amount of bitcoin that is mined is reduced by half.)
                    </p>

                </div>

                <div className={styles.headingSection}>
                    <h1>Why is inflation important for crypto?</h1>
                </div>
                <div className={styles.contentSection}>
                    <p>A high inflation rate for fiat currencies might lead individuals to invest more in digital money because the dollars or Euros they placed in a savings account are actually losing value over time. Bitcoin and certain other cryptocurrencies like Ethereum offer investors an alternative. The economics of the Bitcoin market are complex, but there are some features designed into the digital currency that may help it to resist inflation.</p>

                </div>


                <BulletList
                    text="Like gold and other scarce stores of value, the conventional wisdom around Bitcoin is that it should rise in price in uncertain times. (This has not always been the case, however — at the start of the COVID pandemic for instance, it fell sharply along with the stock market.) It’s also a much more convenient way to store and transmit value than gold — it can simply be sent over the internet. "
                />

                <BulletList
                    text="Scarcity is one key to making a store of value resistant to inflation. There will never be more than 21 million bitcoin. As of now, approximately 19 million bitcoin have been mined. Around every ten minutes, miners process a new “block” and 6.25 bitcoin are added to the network. (In 2024, the mining reward will drop to 3.125 bitcoin, and will decline by half again every four years until all bitcoin are mined. This mechanism, which is designed into the Bitcoin protocol, is known as the halving.) "
                />

                <BulletList
                    text="This scheduled tapering of new supply over time makes Bitcoin predictable in unique ways — unlike gold, no new bitcoin can ever be “discovered.” "
                />


                <div className={styles.headingSection}>
                    <h1>Do cryptocurrencies experience inflation?</h1>
                </div>
                <div className={styles.contentSection}>
                    <p>
                        Yes, technically even Bitcoin experiences inflation as more of it is mined (as does gold). But because the amount of new bitcoin is automatically reduced by 50 percent every four years, Bitcoin’s inflation rate will also decrease.
                    </p>

                    <p>
                        As a practical matter, as long as Bitcoin’s purchasing power continues to rise vs. the  fiat currencies we tend to compare it to, Bitcoin’s few-percent annual rate of inflation isn’t a major factor for investors to consider.

                    </p>

                    <p>
                        But not all cryptocurrencies are designed like Bitcoin. For instance, an increasingly popular category of digital money called stablecoins — many of which are pegged to fiat currencies like the dollar — can be a useful, low-volatility place to save some money. But if a stablecoin is pegged to a fiat currency, your investment will be impacted by inflation and could lose value over time as their reserve currency loses value. (Some stablecoins offer rewards that function much like an interest-bearing savings account, which could change the value equation — especially with non-crypto interest rates hovering around zero.).
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

        <div className={styles.earnSection}>
            <div className={styles.earnLeft}>
                <h1>
                    Buy Bitcoin in just a few minutes

                </h1>
                <p>
                    Start with as little as $25 and pay with your bank account or debit card.

                </p>
                <button onClick={() => { handleNavigate('/signup') }}>
                    Get Started

                </button>

            </div>


        </div>


        <Footer />

    </>

    );
}

export default Inflation;