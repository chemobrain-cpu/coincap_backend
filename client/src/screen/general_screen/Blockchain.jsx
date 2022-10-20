import React, { useState } from 'react';
import styles from './Blockchain.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
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
                    <h1>What is a blockchain?</h1>

                </div>

                <img src={"../../Learn_Illustration_Ultimate_Guide_Blockchain.png"} />




                <div className={styles.contentSection}>
                    <p>
                        Cryptocurrencies like Bitcoin and Ethereum are powered by a technology called the blockchain. At its most basic, a blockchain is a list of transactions that anyone can view and verify. The Bitcoin blockchain, for example, contains a record of every time someone sent or received bitcoin. Cryptocurrencies and the blockchain technology that powers them make it possible to transfer value online without the need for a middleman like a bank or credit card company.
                    </p>

                </div>

                <BulletList
                    text="Almost all cryptocurrencies, including Bitcoin, Ethereum, Bitcoin Cash, and Litecoin, are secured via blockchain networks. Which means their accuracy is constantly being verified by a huge amount of computing power."
                />

                <BulletList
                    text='The list of transactions contained in the blockchain is fundamental for most cryptocurrencies because it enables secure payments to be made between people who don’t know each other without having to go through a third-party verifier like a bank.'

                />

                <BulletList
                    text='Due to the cryptographic nature of these networks, payments via blockchain can be more secure than standard debit/credit card transactions. When making a Bitcoin payment, for instance, you don’t need to provide any sensitive information. That means there is almost zero risk of your financial information being compromised, or your identity being stolen.'

                />

                <img src={"../../2a_bitcoin-stats.gif"} />

                <BulletList
                    text='Blockchain technology is also exciting because it has many uses beyond cryptocurrency. Blockchains are being used to explore medical research, improve the accuracy of healthcare records, streamline supply chains, and so much more.'
                />


                <div className={styles.definitionSection}>
                    <p>
                        Due to the cryptographic nature of these networks, payments via blockchain can be more secure than standard debit/credit card transactions.
                    </p>

                </div>

                <div className={styles.headingSection}>
                    <h1>What are some advantages of blockchains?</h1>

                </div>

                <BulletList
                    text='They’re global: which means that cryptocurrencies can be sent across the planet quickly and cheaply.'
                />
                <BulletList
                    text='They increase privacy: Cryptocurrency payments don’t require you to include your personal information, which protects you from being hacked or having your identity stolen.'
                />
                <BulletList
                    text='They’re open: Because every single transaction on cryptocurrency networks is published publicly in the form of the blockchain, anyone can scrutinize them. That leaves no room for manipulation of transactions, changing the money supply, or adjusting the rules mid-game. The software that constitutes the core of these currencies is free and open-source so anyone can review the code.'
                />

                <img src={"../../2a_crypto-vault.png"} />


                <div className={styles.definitionSection}>
                    <h1>
                        Key questions

                    </h1>
                    <h2>
                        What’s the main advantage blockchains have over the old financial system?

                    </h2>

                    <p>
                        Think about how much of your financial life takes place online, from shopping to investing – and how every single one of those transactions requires a bank or a credit card company or payment processor like Paypal in the middle of it. Blockchains allow for those transactions to happen without a middleman, and without the added costs and complexity that come with them.
                    </p>
                    <h2>
                        Is Bitcoin a blockchain?


                    </h2>
                    <p>
                        Bitcoin is a form of digital money. And the underlying technology that makes it possible is a blockchain.

                    </p>
                    <h2> How many kinds of blockchains are there?</h2>

                    <p>
                        Thousands, from the ones that power Bitcoin, Litecoin, Tezos, and countless other digital currencies to an increasing number that have nothing to do with digital money
                    </p>







                </div>

                <img src={'../../3a_crypto-mobile-family (3)'} />

                <div className={styles.headingSection}>
                    <h1>How does a blockchain work?</h1>

                </div>
                <div className={styles.contentSection}>
                    <p>
                        Picture a chain you might use for a ship’s anchor. But in this case, every link on the chain is a chunk of information that contains transaction data. At the top of the chain you see what happened today, and as you move down the chain you see older and older transactions. And if you follow it all the way down to the anchor sitting at the bottom of the harbor? You’ll have seen every single transaction in the history of that cryptocurrency. Which gives the blockchain powerful security advantages: it’s an open, transparent record of a cryptocurrency’s entire history. If anyone tries to manipulate a transaction it will cause the link to break, and the entire network will see what happened. That, in a nutshell, is blockchain explained.
                    </p>

                </div>

                <BulletList
                    text='Another way people often describe the blockchain is that it’s a ledger (sometimes you’ll hear the terms ‘distributed ledger’ or ‘immutable ledger’), that is similar to the balance sheet of a bank. Like a bank’s ledger, the blockchain tracks all the money flowing into, out of, and through the network.'
                />

                <BulletList
                    text='But unlike a bank’s books, a crypto blockchain isn’t maintained by any individual or organization, including banks and governments. In fact it isn’t centralized at all. Instead, it is secured by a large peer-to-peer network of computers running open-source software. The network is constantly checking and securing the accuracy of the blockchain.'
                />

                <BulletList
                    text='Where does new cryptocurrency come from? Every so often – around every ten minutes in the case of Bitcoin – a new chunk of transaction information (or a new block) is added to the chain of existing information. In exchange for contributing their computing power to maintaining the blockchain, the network rewards participants with a small amount of digital currency.'
                />

                <BulletList
                    text="A crypto blockchain is distributed across the digital currency’s entire network. No company, country, or third party is in control of it; and anyone can participate."
                />

                <div className={styles.definitionSection}>
                    <h1>
                        Key questions

                    </h1>
                    <h2>
                        How do you send and receive money over a blockchain?

                    </h2>

                    <p>The cryptocurrency network assigns each user a unique ‘address,’ which is made up of a private key and a public key. Anyone can send you money via your public key, which is akin to an email address. When you want to spend your money, you use your private key, which is basically your password, to digitally ‘sign’ transactions. The easiest way to manage your cryptocurrency is via software called a wallet, which you can get via an exchange like coincap.</p>




                </div>

                <div className={styles.headingSection}>
                    <h1>Who invented the blockchain?</h1>

                </div>

                <div className={styles.contentSection}>
                    <p>A person or group using the name Satoshi Nakamoto published a whitepaper online explaining the principles behind a new kind of digital money called Bitcoin in late 2008. Every cryptocurrency since is an evolution of the ideas laid out in that paper.</p>

                </div>

                <BulletList
                    text="Nakamoto’s goal was to create digital money that would make online transactions between two strangers anywhere in the world possible without requiring a third party like a credit card company or a payment processor like Paypal in the middle."
                />

                <BulletList
                    text="This required a system that would eliminate a thorny issue called the ‘double spending’ problem, where a person might use the same money more than once. The solution is a network that is constantly verifying the movement of Bitcoin. That network is the blockchain."
                />

                <BulletList
                    text="Every Bitcoin transaction is stored and verified by a global network of computers beyond the control of any person, company, or country."
                />

                <BulletList
                    text="The database that holds all of that information is called the blockchain. Bitcoins are ‘mined’ via that huge, decentralized (also known as peer-to-peer) network of computers, which are also constantly verifying and securing the accuracy of the blockchain. In exchange for contributing their computing power to the blockchain, miners are rewarded with small amounts of cryptocurrency."
                />

                <BulletList
                    text="Every single bitcoin transaction is reflected on the ledger, with new information periodically gathered together in a “block,” which is added to all the blocks that came before."
                />

                <BulletList
                    text="The miners’ collective computing power is used to ensure the accuracy of the ever-growing ledger. Bitcoin can’t exist separately from the blockchain; each new bitcoin is recorded on it, as is each subsequent transaction with all existing coins."
                />

                <div className={styles.headingSection}>
                    <h1>What's the future of blockchains?</h1>

                </div>

                <div className={styles.contentSection}>
                    <p>
                        The blockchain idea has turned out to be a platform that a huge range of applications can be built on top of. It’s still a new and rapidly developing technology, but many experts have described blockchain’s potential to change the way we live and work as being similar to the potential public internet protocols like HTML had in the early days of the World Wide Web.
                    </p>
                </div>

                <BulletList
                    text='The Bitcoin Cash and Litecoin blockchains work in a very similar way to the original Bitcoin blockchain. The Ethereum blockchain is a further evolution of the distributed ledger idea, because unlike the Bitcoin blockchain it’s not solely designed to manage a digital money. (That said Ethereum is a cryptocurrency and certainly can be used to send value to another person). Think of the Ethereum blockchain more like a powerful and highly flexible computing platform that allows coders to easily build all kinds of applications leveraging the blockchain.'
                />

                <BulletList
                    text=" For example, imagine a charity that wants to send money to a thousand people every day for a year. With Ethereum, that would only take a few lines of code. Or maybe you’re a video game developer that wants to create items like swords and armor that can be traded outside of the game itself? Ethereum is designed to do that, too."
                />




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
                <button 
                onClick={()=>{handleNavigate('/signup')}}>
                    Get Started

                </button>

            </div>


        </div>


        <Footer />

    </>

    );
}

export default Blockchain;