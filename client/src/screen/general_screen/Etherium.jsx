import React, { useState } from 'react';
import styles from './Ethereum.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import LearnCard from "../../component/learnCard"
import Footer from "../../component/Footer"
import BulletList from "../../component/bulletListItem"
import { useNavigate } from 'react-router-dom'
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
                    <h1>What is Ethereum?</h1>
                    <p>
                        From how to buy it and how it works to smart contracts and ETH2, a complete beginner's guide to the second-biggest cryptocurrency

                    </p>

                </div>

                <img src={"../../what-is-ethereum.png"} />

                <div className={styles.definitionSection}>
                    <p>
                        Ethereum is the second-biggest cryptocurrency by market cap after Bitcoin. It is also a decentralized computing platform that can run a wide variety of applications — including the entire universe of DeFi.
                    </p>

                </div>


                <div className={styles.contentSection}>
                    <p>
                        Ethereum, which launched in 2015, is the second-biggest cryptocurrency by market cap after Bitcoin. But unlike Bitcoin, it wasn’t created to be digital money. Instead, Ethereum’s founders set out to build a new kind of global, decentralized computing platform that takes the security and openness of blockchains and extends those attributes to a vast range of applications.
                    </p>

                    <p>
                        Everything from financial tools and games to complex databases are already running on the Ethereum blockchain. And its future potential is only limited by developers’ imaginations. As the nonprofit Ethereum Foundation puts it: “Ethereum can be used to codify, decentralize, secure and trade just about anything.”
                    </p>

                </div>

                <BulletList
                    text="You can check the latest prices on Coinbase's Ethereum asset page."
                />

                <BulletList
                    text="Ethereum has become a popular investment vehicle and store of wealth (and can be used, like Bitcoin, to send or receive value without an intermediary)."
                />

                <BulletList
                    text="The Ethereum blockchain allows developers to build and run a huge variety of applications: everything from games and advanced databases to complex decentralized financial instruments — meaning that they don’t require a bank or any other institution in the middle."
                />
                <BulletList
                    text="Ethereum-based apps are built using “smart contracts.” Smart contracts, like regular paper contracts, establish the terms of an arrangement between parties. But unlike an old-fashioned contract, smart contracts automatically execute when the terms are met without the need for either participating party to know who is on the other side of the deal — and without the need for any kind of intermediary. "
                />

                <BulletList
                    text="Ethereum, like Bitcoin, is an open source project that is not owned or operated by a single individual. Anyone with an internet connection can run an Ethereum node or interact with the network."
                />

                <BulletList
                    text="Much like Bitcoin’s decentralized blockchain allows any two strangers, anywhere in the world, to send or receive money without a bank in the middle, smart contracts running on Ethereum’s decentralized blockchain allow developers to build complex applications that should run exactly as programmed without downtime, censorship, fraud, or third-party interference."
                />

                <div className={styles.contentSection}>
                    <p>
                        Popular Ethereum-based innovations include stablecoins (like DAI, which has its value pegged to the dollar by smart contract), decentralized finance apps (collectively known as DeFi), and other decentralized apps (or Dapps).
                    </p>

                </div>

                <div className={styles.definitionSection}>
                    <h1>What’s the difference between Ethereum, Ether, and ETH?</h1>
                    <p>
                        Ethereum is the name of the network. “Ether” is the native cryptocurrency token used by the Ethereum network. That said, in day-to-day usage most people call the token “ETH” (or just “Ethereum”). As a way of sending, receiving, or storing value ETH works much like Bitcoin. But it also has a special role on Ethereum network. Because users pay fees in ETH to execute smart contracts, you can think of it as the fuel that keeps the whole thing running (which is why those fees are called “gas”).
                        If Bitcoin is “digital gold,” ETH can be seen as “digital oil.”
                    </p>

                </div>

                <div className={styles.headingSection}>
                    <h1>Is Ethereum secure?</h1>
                    <p>
                        ETH is currently secured by the Ethereum blockchain in much the same way Bitcoin is secured by its blockchain. A huge amount of computing power — contributed by all the computers on the network — verifies and secures every transaction, making it virtually impossible for any third party to interfere.
                    </p>


                </div>

                <img src='../../is-ethereum-secure (1).png' />

                <div className={styles.contentSection}>
                    <p>
                        The fundamental ideas behind cryptocurrencies help make them safe: the systems are permissionless and the core software is open-source, meaning countless computer scientists and cryptographers have been able to examine all aspects of the networks and their security.

                    </p>
                    <p>
                        Apps running on the Ethereum blockchain, however, are only guaranteed to be as secure as their developers have made them. For example, code can sometimes contain bugs that could result in loss of funds. While their source code is also visible to all, the user bases of each individual app are much smaller than Ethereum’s as a whole, and so fewer eyes are on them. It’s important to do research on any decentralized app you plan to use.
                    </p>

                    <p>
                        The Ethereum protocol is currently being updated in ways that are intended to make it faster and even more secure. See the Ethereum 2.0 section below for more.
                    </p>




                </div>

                <div className={styles.headingSection}>
                    <h1>How does Ethereum work?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        You might have heard that the Bitcoin blockchain is a lot like a bank’s ledger, or even a checkbook. It’s a running tally of every transaction made on the network going back to the very beginning — and all the computers on the network contribute their computing power towards the work of ensuring that the tally is accurate and secure.
                    </p>

                    <p>
                        he Ethereum blockchain, on the other hand, is more like a computer: while it also does the work of documenting and securing transactions, it’s much more flexible than the Bitcoin blockchain. Developers can use the Ethereum blockchain to build a huge variety of tools — everything from logistics management software to games to the entire universe of DeFi applications (which span lending, borrowing, trading, and more).
                    </p>

                </div>

                <BulletList
                    text="Ethereum uses a 'virtual machine' to achieve all this, which is like a giant, global computer made up of many individual computers running the Ethereum software. Keeping all of those computers running involves investment in both hardware and electricity by participants. To cover those costs, the network uses its own Bitcoin-like cryptocurrency called Ether (or, more commonly, ETH)."
                />


                <BulletList
                    text="ETH keeps the whole thing running. You interact with the Ethereum network by using ETH to pay the network to execute smart contracts. As a result, the fees paid in ETH are called “gas.”"
                />

                <BulletList
                    text="Gas rates vary depending on how busy the network is. A new version of the Ethereum blockchain called Ethereum 2.0, which aims to increase efficiency, began rolling out in December 2020. (The transition to the new blockchain is scheduled to happen over the next two years.)"

                />


                <div className={styles.headingSection}>
                    <h1>What is Ethereum 2.0?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        Ethereum 2.0 (often referred to as ETH2) is a major upgrade to the Ethereum network. It’s designed to allow the Ethereum network to grow while increasing security, speed, and efficiency.
                    </p>

                    <p>
                        As of early 2021, Ethereum 2.0 and Ethereum 1.0 exist side by side — but the original blockchain will eventually merge with ETH2 blockchain. (If you’re an ETH holder you won’t have to do anything — your holdings on the ETH 1.0 blockchain will automatically migrate to the ETH2 blockchain.) The transition to ETH2 began in December of 2020, and is scheduled to take two years.

                    </p>
                    <p>
                        Why is Ethereum 2.0 necessary? Moving a popular cryptoasset to a new platform is a complex endeavor, but for Ethereum to scale and evolve, it needs to happen. That’s because the “Proof of Work” method used by the ETH 1.0 blockchain to verify transactions causes bottlenecks, increases fees, and consumes substantial resources (particularly electricity).
                    </p>

                    <p>
                        What is Proof of Work?  How do cryptocurrency networks make sure that nobody spends the same money twice without a central authority like Visa or Paypal in the middle? They use a consensus mechanism. When ETH 1.0 launched, it adopted the consensus mechanism pioneered by Bitcoin: the aptly named Proof of Work.
                    </p>

                </div>


                <BulletList
                    text="Proof of Work requires a huge amount of processing power, which is contributed by virtual “miners” around the world who compete to be the first to solve a time-consuming math puzzle. "

                />

                <BulletList
                    text="The winner gets to update the blockchain with the latest verified transactions, and is rewarded with a predetermined amount of ETH.  "
                />

                <BulletList
                    text="This process happens every 30 seconds (compared to Bitcoin’s approximately 10-minute cadence). As traffic on the network has increased, the limitations of Proof of Work have caused bottlenecks during which fees spike unpredictably. "
                />

                <div className={styles.headingSection}>
                    <h1>What is staking?</h1>
                </div>

                <img src="../../what-is-proof-of-stake (1).png" />

                <div className={styles.contentSection}>
                    <p>
                        Ethereum’s founders were aware of Proof of Work’s limitations. So a very different solution was devised for Ethereum 2.0. — one that will ultimately allow the network to efficiently process thousands of Ethereum transactions a second.
                    </p>
                    <p>
                        Ethereum 2.0 uses a consensus mechanism called Proof of Stake, which is faster, less resource-intensive, and (at least theoretically) more secure. The end result is similar to Proof of Work’s, in that a network participant is chosen to verify the latest transactions, update the blockchain, and earn some ETH.


                    </p>
                </div>

                <BulletList
                    text="Rather than requiring a network of miners racing to solve a puzzle, Proof of Stake requires a robust network of participants who are literally invested in the success of the enterprise."
                />




                <BulletList
                    text="These stakeholders are called validators. Instead of contributing processing power as miners do, validators contribute ETH to a staking pool."
                />

                <BulletList
                    text="The act of contributing ETH to the pool is called staking. If you choose to stake some of your ETH, you will earn rewards in proportion to the size of your stake. For most users, staking will function much like an interest-bearing savings account. "
                />

                <BulletList
                    text="The network selects a winner based on the amount of ETH each validator has in the pool and the length of time they’ve had it there — literally rewarding the most invested participants. "
                />

                <BulletList
                    text="Once the winner has validated the latest block of transactions, other validators can attest that the block is accurate. When a threshold number of these attestations have been made, the network updates the blockchain. "
                />

                <BulletList
                    text="All participating validators receive a reward in ETH, which is distributed by the network in proportion to each validator’s stake. "

                />








                <div className={styles.headingSection}>
                    <h1>How do you buy Ethereum?</h1>
                </div>



                <div className={styles.contentSection}>
                    <p>
                        However you acquire your ETH, you’ll need to understand a few basic concepts. Every address on the Ethereum network is issued a public key and a private key, and you’ll need a wallet to manage your crypto holdings.
                    </p>

                </div>

                <BulletList
                    text="Public key: Think of this as the crypto version of an email address. Your Ethereum public key is where people can send you ETH and Ethereum-based tokens like USDC and Dai. You can safely give this out to others."

                />

                <BulletList
                    text="Private key: Think of this like your password. You should generally avoid giving this out to people. A private key is a long string of letters and numbers. (It can also be in the form of a series of words called a seed phrase.) It’s crucial to keep track of your private keys. If you lose them, you lose your Ether forever."

                />

                <BulletList
                    text="Wallet: To store and secure your Ether you’ll need a wallet. If you’re just starting out, the easiest option is to make an account via the Coinbase app or coinbase.com — in which case you’ll interact with a “custodial wallet” that stores and secures your private keys for you. As you progress you might want to investigate other wallet options that are built for interacting with decentralized finance (or DeFi) protocols such as Compound (a lending and savings app) or Uniswap (a decentralized exchange that allows you to trade cryptocurrencies)."

                />

                <div className={styles.headingSection}>
                    <h1>How does Ethereum have value?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        There are a few ways of thinking about the answer to this question. On one level, Ethereum’s value is set by markets like any other asset. People buy it with Bitcoin, dollars, euros, yen, and other currencies 24 hours a day. Depending on demand, the price can fluctuate from day to day. (Ethereum’s value tends to be volatile compared to currencies such as the US dollar or equities like Fortune 500 stocks because it is still an emerging technology.)

                    </p>
                    <p>
                        But why the market prices it the way it does is a much more complicated question. To many investors Ethereum’s value is based on its flexibility as a platform for issuing stablecoins and running DeFi applications — resulting in a growing user base and growing transaction fees.
                    </p>
                </div>


                <div className={styles.headingSection}>
                    <h1>What’s next for Ethereum?</h1>
                </div>


                <div className={styles.contentSection}>
                    <p>
                        As of early 2021, Ethereum is host to the vast majority of blockchain applications and has a market cap of just under $200 billion, with over $55 billion locked into tokens on the blockchain. Popular stablecoins such as USDC and USDT mostly live on Ethereum today due to its network effects.

                    </p>
                    <p>
                        But a variety of new smart contract blockchains are beginning to compete in the space. So while Ethereum is the dominant market leader today, there is growing pressure for it to successfully execute the transition to Ethereum 2.0.
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

export default Blockchain;