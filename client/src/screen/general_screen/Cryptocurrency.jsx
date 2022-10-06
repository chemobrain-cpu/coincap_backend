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
                    <h1>What is cryptocurrency?</h1>
                </div>

                <img src={"../../Learn_Illustration_What_is_a_Crypto_Wallet (1).png"} />







                <BulletList
                    text="The most popular cryptocurrencies, by market capitalization, are Bitcoin, Ethereum, Bitcoin Cash and Litecoin. Other well-known cryptocurrencies include Tezos, EOS, and ZCash. Some are similar to Bitcoin. Others are based on different technologies, or have new features that allow them to do more than transfer value."
                />

                <BulletList
                    text="Crypto makes it possible to transfer value online without the need for a middleman like a bank or payment processor, allowing value to transfer globally, near-instantly, 24/7, for low fees."
                />

                <BulletList
                    text="If a bank or government isn’t involved, how is crypto secure? It’s secure because all transactions are vetted by a technology called a blockchain."

                />

                <BulletList
                    text="A cryptocurrency blockchain is similar to a bank’s balance sheet or ledger. Each currency has its own blockchain, which is an ongoing, constantly re-verified record of every single transaction ever made using that currency."

                />

                <BulletList
                    text="Unlike a bank’s ledger, a crypto blockchain is distributed across participants of the digital currency’s entire network"

                />

                <BulletList
                    text="No company, country, or third party is in control of it; and anyone can participate. A blockchain is a breakthrough technology only recently made possible through decades of computer science and mathematical innovations."

                />

                <div className={styles.headingSection}>
                    <h1>Why is cryptocurrency the future of finance?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>Cryptocurrencies are the first alternative to the traditional banking system, and have powerful advantages over previous payment methods and traditional classes of assets. Think of them as Money 2.0. -- a new kind of cash that is native to the internet, which gives it the potential to be the fastest, easiest, cheapest, safest, and most universal way to exchange value that the world has ever seen.</p>
                </div>

                <BulletList
                    text="Cryptocurrencies can be used to buy goods or services or held as part of an investment strategy, but they can’t be manipulated by any central authority, simply because there isn’t one. No matter what happens to a government, your cryptocurrency will remain secure."

                />
                <img src="../../BTC-outperforming.gif" />

                <BulletList
                    text="Digital currencies provide equality of opportunity, regardless of where you were born or where you live. As long as you have a smartphone or another internet-connected device, you have the same crypto access as everyone else."

                />
                <BulletList
                    text="Cryptocurrencies create unique opportunities for expanding people’s economic freedom around the world. Digital currencies’ essential borderlessness facilitates free trade, even in countries with tight government controls over citizens’ finances. In places where inflation is a key problem, cryptocurrencies can provide an alternative to dysfunctional fiat currencies for savings and payments."

                />
                <BulletList
                    text="As part of a broader investment strategy, crypto can be approached in a wide variety of ways. One approach is to buy and hold something like bitcoin, which has gone from virtually worthless in 2008 to thousands of dollars a coin today. Another would be a more active strategy, buying and selling cryptocurrencies that experience volatility."

                />
                <BulletList
                    text="One option for crypto-curious investors looking to minimize risk is USD Coin, which is pegged 1:1 to the value of the U.S. dollar. It offers the benefits of crypto, including the ability to transfer money internationally quickly and cheaply, with the stability of a traditional currency. Coinbase customers that hold USDC earn rewards, making it an appealing alternative to a traditional savings account."

                />

                <div className={styles.headingSection}>
                    <h1>Why invest in cryptocurrency?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>
                        Online exchanges like Coinbase have made buying and selling cryptocurrencies easy, secure, and rewarding.
                    </p>
                </div>

                <BulletList
                    text="It only takes a few minutes to create a secure account, and you can buy cryptocurrency using your debit card or bank account."

                />

                <BulletList
                    text="You can buy as little (or as much) crypto as you want, since you can buy fractional coins. For example, you can buy $25.00 worth of bitcoin."

                />


                <BulletList
                    text="Many digital currencies, including USD Coin and Tezos, offer holders rewards just for having them."

                />

                <BulletList
                    text="On Coinbase, you can earn 1% APY on— that’s much higher than most traditional savings accounts."

                />
                <BulletList
                    text="You can also earn up to 5% APY when you stake Tezos on Coinbase. Learn more about Tezos staking rewards."

                />
                <BulletList
                    text="Unlike stocks or bonds, you can easily transfer your cryptocurrency to anyone else or use it to pay for goods and services."

                />

                <BulletList
                    text="Millions of people hold bitcoin and other digital currencies as part of their investment portfolios."

                />

                <img src="../../1a_bitcoin-trading.gif"
                />


                <div className={styles.headingSection}>
                    <h1>What is a stablecoin?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>USD Coin is an example of a cryptocurrency called stablecoins. You can think of these as crypto dollars—they’re designed to minimize volatility and maximize utility. Stablecoins offer some of the best attributes of cryptocurrency (seamless global transactions, security, and privacy) with the valuation stability of fiat currencies.</p>
                </div>

                <BulletList
                    text="Stablecoins do this by pegging their value to an external factor, typically a fiat currency like the U.S. dollar or a commodity like gold."

                />
                <BulletList
                    text="As a result, their valuations are less likely to shift dramatically from day to day. That stability can increase their utility for everyday use as money, because both buyers and merchants can be confident that the value of their transaction will remain relatively consistent over a longer timeframe."

                />
                <BulletList
                    text="They can also work as a safe and stable way to save money, like a traditional savings account."

                />

                <div className={styles.headingSection}>
                    <h1>How does cryptocurrency work?</h1>
                </div>


                <div className={styles.contentSection}>
                    <p>Bitcoin is the first and most well-known, but there are thousands of types of cryptocurrencies. Many, like Litecoin and Bitcoin Cash, share Bitcoin’s core characteristics but explore new ways to process transactions. Others offer a wider range of features. Ethereum, for example, can be used to run applications and create contracts. All four, however, are based on an idea called the blockchain, which is key to understanding how cryptocurrency works.</p>

                </div>

                <BulletList
                    text="At its most basic, a blockchain is a list of transactions that anyone can view and verify. The Bitcoin blockchain, for example, is a record of every time someone sends or receives bitcoin. This list of transactions is fundamental for most cryptocurrencies because it enables secure payments to be made between people who don’t know each other without having to go through a third-party verifier like a bank."

                />
                <BulletList
                    text="Blockchain technology is also exciting because it has many uses beyond cryptocurrency. Blockchains are being used to explore medical research, improve the sharing of healthcare records, streamline supply chains, increase privacy on the internet, and so much more."

                />
                <BulletList
                    text="The principles behind both bitcoin and the Bitcoin blockchain first appeared online in a white-paper published in late 2007 by a person or group going by the name Satoshi Nakamoto."

                />
                <BulletList
                    text="The blockchain ledger is split across all the computers on the network, which are constantly verifying that the blockchain is accurate.This means there is no central vault, entity, or database that can be hacked, stolen, or manipulated."

                />


                <div className={styles.definitionSection}>
                    <h1>Key concept</h1>
                    <p>
                        Cryptocurrencies use a technology called public-private key cryptography to transfer coin ownership on a secure and distributed ledger. A private key is an ultra secure password that never needs to be shared with anyone, with which you can send value on the network. An associated public key can be freely and safely shared with others to receive value on the network. From the public key, it is impossible for anyone to guess your private key.
                    </p>

                </div>

                <div className={styles.headingSection}>
                    <h1>What is cryptocurrency mining?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>Most cryptocurrencies are ‘mined’ via a decentralized (also known as peer-to-peer) network of computers. But mining doesn’t just generate more bitcoin or Ethereum - it’s also the mechanism that updates and secures the network by constantly verifying the public blockchain ledger and adding new transactions.</p>
                </div>

                <BulletList
                    text="Technically, anyone with a computer and an internet connection can become a miner. But before you get excited, it’s worth noting that mining is not always profitable. Depending on which cryptocurrency you’re mining, how fast your computer is, and the cost of electricity in your area, you may end up spending more on mining than you earn back in cryptocurrency."

                />

                <BulletList
                    text="As a result, most crypto mining these days is done by companies that specialize in it, or by large groups of individuals who all contribute their computing power."

                />
                <BulletList
                    text="How does the network encourage miners to participate in maintaining the blockchain? Again, taking Bitcoin as an example, the network holds a lottery in which all the mining rigs around the world race to become the first to solve a math problem, which also verifies and updates the blockchain with new transactions. Each winner is awarded new bitcoin, which can then make its way into the broader marketplace."
                />

                <div className={styles.definitionSection}>
                    <h1> Key question</h1>
                    <h2>Where do cryptocurrencies get their value?</h2>
                    <p> The economic value of cryptocurrency, like all goods and services, comes from supply and demand.
                        Supply refers to how much is available—like how many bitcoin are available to buy at any moment in time. Demand refers to people’s desire to own it—as in how many people want to buy bitcoin and how strongly they want it. The value of a cryptocurrency will always be a balance of both factors.
                        There are also other types of value. For example, there’s the value you get from using a cryptocurrency. Many people enjoy spending or gifting crypto, meaning that it gives them a sense of pride to support an exciting new financial system. Similarly, some people like to shop with bitcoin because they like its low fees and want to encourage businesses to accept it.</p>
                </div>

                <div className={styles.headingSection}>
                    <h1>How to buy bitcoin and other cryptocurrency</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>The easiest way to acquire cryptocurrency is to purchase on an online exchange like Coinbase.</p>
                </div>

                <BulletList
                    text="On Coinbase, you can buy major cryptocurrencies like
                    Bitcoin (BTC), Litecoin (LTC), Ethereum (ETH), Bitcoin Cash (BCH), Ethereum Classic (ETC). Or you can explore emerging coins like Stellar Lumens or EOS. For some cryptocurrencies Coinbase offers opportunities to earn some for free.)"

                />

                <BulletList
                    text="One good approach is to ask yourself what you’re hoping to do with crypto and choose the currency that will help you achieve your goals. For example, if you want to buy a laptop with crypto, bitcoin might be a good option because it is the most widely accepted cryptocurrency. On the other hand, if you want to play a digital card game, then Ethereum is a popular choice."

                />
                <BulletList
                    text="Keep in mind that you do not need to buy a whole coin. On Coinbase, you can buy portions of coins in increments as little as 2 dollars, euros, pounds, or your local currency."

                />


                <div className={styles.headingSection}>
                    <h1>How do you store cryptocurrency?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>Storing crypto is similar to storing cash, which means you need to protect it from theft and loss. There are many ways to store crypto both online and off, but the simplest solution is via a trusted, secure exchange like Coinbase.</p>
                </div>

                <BulletList
                    text="Coinbase customers can securely store, send, receive, and convert crypto by signing into their account on a computer, tablet, or phone."
                />
                <BulletList
                    text="Want to transfer money from your wallet to a bank account? The Coinbase app makes it as easy as transferring funds from one bank to another. (Much like conventional bank transfers or ATM withdrawals, exchanges like Coinbase set a daily limit, and it might take from a few days to a week for the transaction to be completed."

                />

                <div className={styles.headingSection}>
                    <h1>What can you do with cryptocurrency?</h1>
                </div>

                <div className={styles.contentSection}>
                    <p>There’s a wide range of things you can do with cryptocurrency, and the list grows with time. Here are a few ways to get started, from participating in everyday activities to exploring new technological frontiers:</p>
                </div>

                <BulletList
                    text="Shop: Over 8,000 global merchants accept cryptocurrency via Coinbase Commerce."

                />

                <BulletList
                    text="Donate to causes: There are benefits to donating and accepting crypto, and many nonprofit organizations accept bitcoin donations."

                />

                <BulletList
                    text="Gift it: Cryptocurrency makes a great gift for friends and family who are interested in learning about new technology."

                />
                <BulletList
                    text="Explore unique new combinations of money and technology: Orchid is a VPN, which helps protect you when you’re online, and a digital currency at the same time. Basically it’s broken down into two parts, the Orchid VPN app and the OXT cryptocurrency, and it all runs on the Ethereum network. Intrigued?"
                />
                <BulletList
                    text="Travel the world: Because cryptocurrency isn’t tied to a specific country, traveling with crypto can cut down on money exchange fees. There’s already a small but thriving community of self-titled “crypto nomads” who primarily, or in some cases exclusively, spend crypto when they travel."
                />
                <BulletList
                    text=" Buy property in a virtual gaming world: Decentraland, which also runs on the Ethereum blockchain, is the first virtual world entirely owned by its users. Users can buy and sell land, avatar clothing, and all kinds of other stuff while partying in virtual nightclubs or mingling in virtual art galleries."
                />
                <BulletList
                    text="Explore decentralized finance, or DeFi: A wide variety of new players are aiming to recreate the entire global financial system, from mutual-fund-like investments to loan-lending mechanisms and way beyond, without any central authorities."
                />




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
                <button onClick={()=>{handleNavigate('/signup')}}>
                    Get Started

                </button>

            </div>


        </div>


        <Footer />

    </>

    );
}

export default Blockchain;