import React from 'react';
import styles from  './Footer.module.css';
import {useNavigate } from 'react-router-dom'

function Footer() {
    let navigate = useNavigate()
    let handleNavigate = (url) => {
        navigate(url)
    }


    return (<div className={styles.footer_section}>
        <div className={styles.footer_section_inner}>
             <div className={styles.footer_category}>
            <h1 className={styles.coinbase}>Coincap</h1>
            <p>© 2022 Coincap</p>
        </div>
        <div className={styles.footer_category}>
            <h1>Company</h1>
            <ul>
            <li onClick={()=>{handleNavigate('/support')}}>Contact support</li>
                <li onClick={()=>{handleNavigate('/policy')}}>Legal & privacy</li>
                <li onClick={()=>{handleNavigate('/policy')}}>Cookie policy</li>
                <li onClick={()=>{handleNavigate('/learn/crypto-basics/')}}>Blog</li>

            </ul>
            
        </div>
        <div className={styles.footer_category}>
            <h1>Learn</h1>
            <ul>
                <li onClick={()=>{handleNavigate('/learn/crypto-basics/')}}>Crypto basics</li>
                <li onClick={()=>{handleNavigate('/learn/tips-and-tutorials')}}>Tips & tutorials</li>
                <li onClick={()=>{handleNavigate('/learn/crypto-basics/what-is-bitcoin')}}> What is Bitcoin?</li>
                <li onClick={()=>{handleNavigate('/learn/crypto-basics/what-is-cryptocurrency')}}>What is crypto?</li>
                <li onClick={()=>{handleNavigate('/learn/crypto-basics/what-is-blockchain')}}>What is a blockchain?</li>
                <li onClick={()=>{handleNavigate('/learn/tips-and-tutorials/how-to-send-crypto')}}>how to send crypto</li>
               
            </ul>
            
        </div>

        <div className={styles.footer_category}>
            <h1>Learn</h1>
            <ul>
                <li onClick={()=>{handleNavigate('/learn/crypto-basics/')}}>Crypto basics</li>
                <li onClick={()=>{handleNavigate('/learn/crypto-basics/what-is-cryptocurrency')}}> What is cryptocurrency?</li>
                <li onClick={()=>{handleNavigate('/learn/crypto-basics/what-is-volatility')}}>What is volatility?</li>
                <li onClick={()=>{handleNavigate('/learn/crypto-basics/what-is-dogecoin')}}>What is a dogecoin?</li>
                <li onClick={()=>{handleNavigate('/learn/crypto-basics/what-is-ethereum')}}>what is ethereum</li>
            </ul>
            
        </div>

        </div>
       

    </div>
    );
}

export default Footer;