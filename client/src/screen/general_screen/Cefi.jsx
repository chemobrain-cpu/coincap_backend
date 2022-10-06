import React, { useState } from 'react';
import styles from './Bitcoin.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import LearnCard from "../../component/learnCard"
import Footer from "../../component/Footer"
import BulletList from "../../component/bulletListItem"
import {useNavigate } from 'react-router-dom'

function Cefi() {

    let navigate = useNavigate()
    let handleNavigate = (url) => {
        navigate(url)
    }

    return (<>
        <NavBar />
        <div className={styles.content}>
            <div className={styles.leftContent}>
                <div className={styles.headingSection}>
                    <h1>What is CeFi?</h1>
                </div>
                <div className={styles.contentSection}>
                    <p>
                        Learn how to earn interest on your savings or take out a loan using crypto as collateral

                    </p>
                </div>

                <img src={"../../coinbase-lend (1).png"} />



                <div className={styles.definitionSection}>

                    <p>
                        CeFi, short for centralized finance, offers some of the yield benefits of DeFi with some of the ease of use and security of traditional financial-services products. With CeFi, you can earn interest on savings, borrow money, spend with a crypto debit card, and more.
                    </p>

                </div>


                <div className={styles.contentSection}>
                    <p>
                        One of crypto’s core concepts is “decentralization” — which allows transactions between strangers anywhere in the world to be conducted without any kind of institution in the middle.  DeFi (short for decentralized finance) takes that idea the farthest. It’s an entire ecosystem of smart-contract powered apps that make it possible to lend, save, trade, and more — all without any kind of bank or payment processor in the middle.

                    </p>
                    <p>
                        But because DeFi is an emerging technology, it comes with a set of unique risks. Navigating DeFi protocols requires a relatively strong level of technical knowledge and comfort with the potential for losing some of all of your investment in the case of buggy code, malicious actors, or even simple user error.
                    </p>
                    <p>
                        CeFi, as you’ve probably guessed, stands for “centralized finance.” The core idea behind CeFi is to create crypto investment opportunities that offer some of the yield benefits of DeFi with some of the ease of use and security of traditional financial-services products (sometimes referred to as TradFi). With CeFi, you can borrow money, buy and sell crypto, spend and earn rewards with a crypto debit card, and more.

                    </p>





                </div>


                <div className={styles.headingSection}>
                    <h1>How do you earn yield with CeFi?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        CeFi creates the potential for earning yield via crypto-based accounts that are functionally similar to a traditional bank’s savings accounts — but may offer substantially higher returns.  Unlike conventional savings accounts, crypto deposits aren’t currently eligible for government-backed FDIC or SIPC insurance so you should make sure to understand the risks involved. Coinbase, however, does offer a principal guarantee on the USDC you deposit for CeFi lending.
                    </p>
                    <p>
                        The general concept involves holding some of your crypto on one of the many platforms that offer this kind of product. Via Coinbase, US-based customers in many states can now sign up for a waitlist to start earning an annual yield of 4% for holding USD Coin (USDC).
                    </p>
                </div>
                <div className={styles.headingSection}>
                    <h1>Where does the yield come from?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        Some or all of your crypto holdings are put to work and lent out to others. These borrowers pay the centralized provider an interest rate for borrowing, and that provider passes on some of the interest to you.
                    </p>

                </div>

                <div className={styles.headingSection}>
                    <h1>How does CeFi borrowing connect to CeFi lending/saving?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        CeFi makes it possible to borrow money against your crypto holdings, the same way you’d use traditional assets as collateral to apply for a bank loan. It’s the flip side of lending — the interest users pay for borrowing money is where the yield you can earn for holding crypto via CeFi is generated.
                    </p>
                    <p>
                        Unlike bank loans, CeFi loans typically require little or no paperwork. Via Coinbase, US-based customers in many states can borrow up to $100,000 without a credit check.
                    </p>

                </div>

                <div className={styles.headingSection}>
                    <h1>What are some CeFi risks?</h1>
                </div>
                <BulletList
                    text="Each CeFi product and provider is unique and may put your deposited crypto to work in ways that have higher or lower levels of risk. It’s important to do your homework and understand how your crypto is being used, how the yield you’re earning is generated, and what risks are entailed."
                />
                <BulletList
                    text="Remember: crypto deposits aren’t currently eligible for the government-backed insurance that protects savings held by a traditional bank. (That said, Coinbase’s CeFi lending product offers a principal guarantee.)"
                />
                <BulletList
                    text="Some CeFi providers might lock up your principal for a period of time. Coinbase, however, allows you to access your USDC at any time. "
                />

                <BulletList
                    text="All stablecoins aren’t created equal. For example, USDC is based on open-source code that anyone can scrutinize. USDC is backed by dollar-denominated assets of at least equal fair value to the USDC in circulation, in segregated accounts with US regulated financial institutions. You can buy USDC via exchanges like Coinbase, and hold it in any Ethereum compatible wallet. There are no fees for transferring a US dollar to USDC. The launch of USDC was powered by a collaboration between Coinbase and Circle through the co-founding of the CENTRE Consortium."
                />

                <div className={styles.guideSection}>
                    <LearnCard
                        onPress={() => handleNavigate('/learn/crypto-basics/what-is-bitcoin')}
                        url="../../Learn_Illustration_Ultimate_Guide_Bitcoin (1).png"
                        paragraph="BEGINNER'S GUIDE"
                        firstParagraph='What is Bitcoin'

                    />
                    <LearnCard
                        onPress={() => handleNavigate('/learn/crypto-basics/what-is-token')}
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

export default Cefi;