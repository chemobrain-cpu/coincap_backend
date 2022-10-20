import React, { useState } from 'react';
import styles from './Bitcoin.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import LearnCard from "../../component/learnCard"
import Footer from "../../component/Footer"
import BulletList from "../../component/bulletListItem"
import {useNavigate } from 'react-router-dom'
//let { admin} = useSelector(state => state.userAuth)

function Blockchain() {

    let navigate = useNavigate()
    let handleNavigate = (url) => {
        navigate(url)
    }

    return (<>
        <NavBar />
        <div className={styles.content}>
            <div className={styles.leftContent}>
                <div className={styles.headingSection}>
                    <h1>What is Bitcoin?</h1>
                </div>

                <img src={"../../Learn_Illustration_Ultimate_Guide_Bitcoin (1).png"} />



                <div className={styles.definitionSection}>

                    <p>
                        The world’s first widely-adopted cryptocurrency. With Bitcoin, people can securely and directly send each other digital money on the internet.
                    </p>

                </div>


                <div className={styles.contentSection}>
                    <p>
                        Bitcoin was created by Satoshi Nakamoto, a pseudonymous person or team who outlined the technology in a 2008 white paper. It’s an appealingly simple concept: bitcoin is digital money that allows for secure peer-to-peer transactions on the internet.

                    </p>

                    <BulletList
                        text="Unlike services like Venmo and PayPal, which rely on the traditional financial system for permission to transfer money and on existing debit/credit accounts, bitcoin is decentralized: any two people, anywhere in the world, can send bitcoin to each other without the involvement of a bank, government, or other institution."
                    />

                    <BulletList
                        text="Every transaction involving Bitcoin is tracked on the blockchain, which is similar to a bank’s ledger, or log of customers’ funds going in and out of the bank. In simple terms, it’s a record of every transaction ever made using bitcoin."
                    />
                    <BulletList
                        text='Unlike a bank’s ledger, the Bitcoin blockchain is distributed across the entire network. No company, country, or third party is in control of it; and anyone can become part of that network.'
                    />

                    <BulletList
                        text='There will only ever be 21 million bitcoin. This is digital money that cannot be inflated or manipulated in any way.'
                    />
                    <BulletList
                        text='It isn’t necessary to buy an entire bitcoin: you can buy just a fraction of one if that’s all you want or need.'
                    />





                </div>

                {/*Question and answer section*/}

                <div className={styles.definitionSection}>
                    <h1>Key Questions</h1>
                    <h2>What is BTC?</h2>
                    <p>BTC is the abbreviation for bitcoin.</p>
                    <h2>Is Bitcoin cryptocurrency?</h2>

                    <p>Yes, bitcoin is the first widely adopted cryptocurrency, which is just another way of saying digital money.</p>

                    <h2>
                        Is there a simple bitcoin definition?
                    </h2>

                    <p>
                        Bitcoin is digital money that allows secure and seamless peer-to-peer transactions on the internet.

                    </p>

                    <h1> What's the price of bitcoin?</h1>

                    <p>The current price of Bitcoin can be found on Coincap's website.</p>

                    <h1>
                        Is Bitcoin an investment opportunity?
                    </h1>

                    <p>Like any other asset, you can make money by buying BTC low and selling high, or lose money in the inverse scenario.</p>

                    <h1>At what price did Bitcoin start?</h1>

                    <p>
                        One BTC was valued at a fraction of a U.S. penny in early 2010. During the first quarter of 2011, it exceeded a dollar. In late 2017, its value skyrocketed, topping out at close to $20,000. You can track the price of bitcoin here.

                    </p>




                </div>

                <img src={"../../1a_bitcoin-trading.gif"} />

                <div className={styles.headingSection}>
                    <h1>Bitcoin Basics?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        Since Bitcoin’s creation, thousands of new cryptocurrencies have been launched, but bitcoin (abbreviated as BTC) remains the largest by market capitalization and trading volume.
                    </p>
                </div>

                <img src={"../../bitcoin-stats.2c6915799e4611f2d58e7435deea1421.gif"} />

                <BulletList
                    text="Depending on your goals, bitcoin can function as"
                />

                <div className={styles.contentSection}>
                    <p>- an investment vehicle</p>

                    <p>- a store of value similar to gold</p>
                    <p>- a way to transfer value around the world</p>
                    <p>- even just a way to explore an emerging technology</p>

                </div>

                <BulletList
                    text="Bitcoin is a currency native to the Internet.Unlike government-issued currencies such as the dollar or euro, Bitcoin allows online transfers without a middleman such as a bank or payment processor. The removal of those gatekeepers creates a whole range of new possibilities, including the potential for money to move around the global internet more quickly and cheaply, and allowing individuals to have maximum control over their own assets."
                />


                <BulletList
                    text="Bitcoin is legal to use, hold, and trade, and can be spent on everything from travel to charitable donations. It’s accepted as payment by businesses including Microsoft and Expedia."
                />

                <BulletList
                    text="Is bitcoin money? It’s been used as a medium of exchange, a store of value, and a unit of account—which are all properties of money. Meanwhile, it only exists digitally; there is no physical version of it."
                />

                <div className={styles.headingSection}>
                    <h1>Who created Bitcoin?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>To really grasp how bitcoin works, it helps to start at the beginning. The question of who created bitcoin is a fascinating one, because a decade after inventing the technology—and despite a lot of digging by journalists and members of the crypto community—its creator remains anonymous.</p>

                </div>

                <BulletList
                    text="The principles behind Bitcoin first appeared in a white paper published online in late 2008 by a person or group going by the name Satoshi Nakamoto."
                />

                <BulletList
                    text='This paper wasn’t the first idea for digital money drawing on the fields of cryptography and computer science—in fact, the paper referred to earlier concepts—but it was a uniquely elegant solution to the problem of establishing trust between different online entities, where people may be hidden (like bitcoin’s own creator) by pseudonyms, or physically located on the other side of the planet.'

                />

                <BulletList
                    text="Nakamoto devised a pair of intertwined concepts: the bitcoin private key and the blockchain ledger. When you hold bitcoin, you control it through a private key—a string of randomized numbers and letters that unlocks a virtual vault containing your purchase. Each private key is tracked on the virtual ledger called the blockchain."
                />

                <div className={styles.contentSection}>
                    <p>When Bitcoin first appeared, it marked a major advance in computer science, because it solved a fundamental problem of commerce on the internet: how do you transfer value between two people without a trusted intermediary (like a bank) in the middle? By solving that problem, the invention of bitcoin has wide-ranging ramifications: As a currency designed for the internet, it allows for financial transactions that range across borders and around the globe without the involvement of banks, credit-card companies, lenders, or even governments. When any two people—wherever they might live—can send payments to each other without encountering those gatekeepers, it creates the potential for an open financial system that is more efficient, more free, and more innovative. That, in a nutshell, is bitcoin explained.</p>

                </div>

                <img src={"../../bitcoin-global.7c14fb6033095342edf8db0bdabc536c.gif"} />

                <div className={styles.headingSection}>
                    <h1>How Bitcoin works</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        Unlike credit card networks like Visa and payment processors like Paypal, bitcoin is not owned by an individual or company. Bitcoin is the world’s first completely open payment network which anyone with an internet connection can participate in. Bitcoin was designed to be used on the internet, and doesn’t depend on banks or private companies to process transactions.
                    </p>

                    <p>
                        One of the most important elements of Bitcoin is the blockchain, which tracks who owns what, similar to how a bank tracks assets. What sets the Bitcoin blockchain apart from a bank's ledger is that it is decentralized, meaning anyone can view it and no single entity controls it.
                    </p>

                    <p>Here are some details about how it all works:</p>

                </div>

                <BulletList
                    text="Specialized computers known as ‘mining rigs’ perform the equations required to verify and record a new transaction. In the early days, a typical desktop PC was powerful enough to participate, which allowed pretty much anyone who was curious to try their hand at mining. These days the computers required are massive, specialized, and often owned by businesses or large numbers of individuals pooling their resources. (In October 2019, it required 12 trillion times more computing power to mine one bitcoin than it did when Nakamoto mined the first blocks in January 2009.)"
                />

                <img src={"../../bitcoin-attack.png"} />

                <BulletList
                    text="The miners’ collective computing power is used to ensure the accuracy of the ever-growing ledger. Bitcoin is inextricably tied to the blockchain; each new bitcoin is recorded on it, as is each subsequent transaction with all existing coins."
                />

                <BulletList
                    text="How does the network motivate miners to participate in the constant, essential work of maintaining the blockchain—verifying transactions? The Bitcoin network holds a continuous lottery in which all the mining rigs around the world race to be the first to solve a math problem. Every 10 min or so, a winner is found, and the winner updates the Bitcoin ledger with new valid transactions. The prize changes over time, but as of early 2020, each winner of this raffle was awarded 12.5 bitcoin."
                />

                <BulletList
                    text='At the beginning, a bitcoin was technically worthless. As of the end of 2019, it was trading at around $7,500. As bitcoin’s value has risen, its easy divisibility (the ability to buy a small fraction of one bitcoin) has become a key attribute. One bitcoin is currently divisible to eight decimal places (100 millionths of one bitcoin); the bitcoin community refers to the smallest unit as a ‘Satoshi.’'
                />

                <BulletList
                    text='Nakamoto set the network up so that the number of bitcoin will never exceed 21 million, ensuring scarcity. There are currently around 3 million bitcoin still available to be mined, which will happen more and more slowly. The last blocks will theoretically be mined in 2140.'
                />

                <img src={"../../bitcoin-attack.png"} />




                <div className={styles.contentSection}>
                    <p>
                        Cryptocurrencies and traditional currencies share some traits — like how you can use them to buy things or how you can transfer them electronically — but they’re also different in interesting ways. Here are a few highlights.

                    </p>



                </div>

                {/*Question and answer section*/}

                <div className={styles.definitionSection}>
                    <h1>Key question</h1>
                    <h2>How does bitcoin have value?</h2>
                    <p>Essentially the same way a traditional currency does – because it’s proven itself to be a viable and convenient way to store value, which means it can easily be traded for goods, services, or other assets. It’s scarce, secure, portable (compared to, say, gold), and easily divisible, allowing transactions of all sizes.</p>





                </div>
                <img src={"../../2a_bitcoin-stats.gif"} />


                <div className={styles.headingSection}>
                    <h1>How to get Bitcoin</h1>
                </div>


                <div className={styles.contentSection}>
                    <p>
                        The easiest way to buy bitcoin is to purchase it through an online exchange like Coicap. Coincap makes it easy to buy, sell, send, receive, and store bitcoin without needing to hold it yourself using something called public and private keys.
                    </p>

                    <p>
                        However, if you choose to buy and store bitcoin outside of an online exchange, here’s how that works.

                    </p>

                    <p className={styles.paragraph}>1. Each person who joins the bitcoin network is issued a public key, which is a long string of letters and numbers that you can think of like an email address, and a private key, which is equivalent to a password.</p>

                    <p className={styles.paragraph}>2. When you buy bitcoin—or send/receive it—you get a public key, which you can think of as a key that unlocks a virtual vault and gives you access to your money.</p>

                    <p className={styles.paragraph}>3. Anyone can send bitcoin to you via your public key, but only the holder of the private key can access the bitcoin in the “virtual vault” once it’s been sent.

                    </p>

                    <p className={styles.paragraph}>4.
                        There are many ways to store bitcoin both online and off. The simplest solution is a virtual wallet.
                    </p>

                    <p>5.
                        If you want to transfer money from your wallet to a bank account after selling your bitcoin, the Coincap app makes it as easy as transferring funds from one bank to another. Similar to conventional bank transfers or ATM withdrawals, exchanges like Coincap set a daily limit, and it may take between a few days and a week for the transaction to be completed.
                    </p>


                </div>


                <div className={styles.definitionSection}>
                    <h1>Key question</h1>
                    <h2>What’s the difference between Bitcoin and Blockchain?</h2>

                    <p>All bitcoin transactions and public keys are recorded on a virtual ledger called the blockchain. The ledger is effectively a chronological list of transactions. This ledger is copied—exactly—across every computer that is connected to the bitcoin network, and it is constantly checked and secured using a vast amount of computing power across the globe. The blockchain concept has turned out to be powerful and adaptable, and there are now a wide variety of non-cryptocurrency-related blockchains that are used for things like supply-chain management. The ‘Bitcoin Blockchain’ specifically refers to the virtual ledger that records bitcoin transactions and private keys.</p>





                </div>

                <div className={styles.headingSection}>
                    <h1>How to use Bitcoin</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        Back in 2013, a bitcoin enthusiast named Laszlo Hanyecz created a message-board post offering 10,000 BTC – which then was worth around $25 – to anyone who would deliver two pizzas to his Jacksonville, Florida, home. As the legend goes, those two pizzas, which another bitcoin early-adopter bought from a local Papa John’s, marked the first successful purchase of non-virtual goods using bitcoin. Thankfully it’s a lot easier to use bitcoin these days!

                    </p>
                </div>




                <BulletList
                    text='It’s simple: Transactions using BTC aren’t that different from those using a credit or debit card, but instead of being asked to enter card info, you’ll simply be entering the payment amount and the vendor’s public key (similar to an email address) via a wallet app. (When transacting in person using smartphones or tablets, often a QR code will pop up to simplify the process – when you scan the code, your wallet app will automatically enter the pertinent information.)'
                />

                <BulletList
                    text='It’s private: One of the benefits of paying with bitcoin is that doing so limits the amount of personal information you need to provide. The only time you need to share your name and address is if you’re purchasing physical goods that need to be shipped.'
                />

                <BulletList
                    text='It’s flexible: As to what you should do with your bitcoin, that depends completely on your personal interests.'
                />


                <div className={styles.headingSection}>
                    <h1>What makes Bitcoin a new kind of money?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        Bitcoin is global. You can send it across the planet as easily as you can pay with cash in the physical world. It isn't closed on weekends, doesn’t charge you a fee to access your money, and doesn't impose any arbitrary limits.
                    </p>
                    <p>

                        Bitcoin is irreversible. Bitcoin is like cash, in the sense that transactions cannot be reversed by the sender. In comparison, credit cards, conventional online payment systems, and banking transactions can be reversed after the payment has been made—sometimes months after the initial transaction—due to the centralized intermediaries that complete the transactions. This creates higher fraud risk for merchants, which can lead to higher fees for using credit cards.
                    </p>

                    <p>
                        Bitcoin is private. When paying with bitcoin, there are no bank statements, or any need to provide unnecessary personal information to the merchant. Bitcoin transactions don’t contain any identifying information other than the bitcoin addresses and amounts involved.
                    </p>

                    <p>
                        Bitcoin is secure. Due to the cryptographic nature of the Bitcoin network, bitcoin payments are fundamentally more secure than standard debit/credit card transactions. When making a bitcoin payment, no sensitive information is required to be sent over the internet. There is a very low risk of your financial information being compromised, or having your identity stolen.
                    </p>

                    <p>
                        Bitcoin is open. Every transaction on the Bitcoin network is published publicly, without exception. This means there's no room for manipulation of transactions (save for a highly unlikely 51% attack scenario) or changing the supply of bitcoin. The software that constitutes the core of Bitcoin is free and open-source so anyone can review the code.

                    </p>

                    <p>
                        Bitcoin is safe. In more than ten years of existence, the bitcoin network has never been successfully hacked. And because the system is permissionless and open-sourced, countless computer scientists and cryptographers have been able to examine all aspects of the network and its security.

                    </p>



                </div>

                <div className={styles.headingSection}>
                    <h1>Where does Bitcoin come from?
                    </h1>
                </div>


                <div className={styles.contentSection}>
                    <p>
                        Bitcoin is virtually ‘mined’ by a vast, decentralized (also referred to as ‘peer-to-peer’) network of computers that are constantly verifying and securing the accuracy of the blockchain. Every single bitcoin transaction is reflected on that ledger, with new information periodically gathered together in a “block,” which is added to all the blocks that came before.

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

export default Blockchain;