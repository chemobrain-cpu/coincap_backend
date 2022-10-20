import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import styles from './AdminNav.module.css';
import {useNavigate } from 'react-router-dom'

function Nav({navigateToApp}) {

  let navigate = useNavigate()
    let handleNavigate = (url) => {
        navigate(url)
    }


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showCompanyLink, setShowCompanyLink] = useState(false)
  const [showLearnLink, setShowLearnLink] = useState(false)
  const [showIndividualLink, setShowIndividualLink] = useState(false)
  const [showCompanyHiddenDesktopBlock, setShowCompanyHiddenDesktopBlock] = useState(false)

  const [showLearnHiddenDesktopBlock,setShowLearnHiddenDesktopBlock] = useState(false)

  const [showIndividualsHiddenDesktopBlock,setShowIndividualsHiddenDesktopBlock] = useState(false)

  const handleClick = () => {
    setClick(!click);
  }


  const closeCompanyDesktop = () => {
    setClick(false);
    setShowCompanyHiddenDesktopBlock(prev=>!prev)
    setShowIndividualsHiddenDesktopBlock(false)
    setShowLearnHiddenDesktopBlock(false)
  }
  const closeLearnDesktop = () => {
    setClick(false);
    setShowLearnHiddenDesktopBlock(prev=>!prev)
    setShowCompanyHiddenDesktopBlock(false)
    setShowIndividualsHiddenDesktopBlock(false)
  }
  const closeIndividualDesktop = () => {
    setClick(false);
    setShowIndividualsHiddenDesktopBlock(prev=>!prev)
    setShowLearnHiddenDesktopBlock(false)
    setShowCompanyHiddenDesktopBlock(false)
  }

  const closeMobileMenu = ()=>{
    setClick(false)
  }



  const showLearnLinkHandler = () => {
    setShowLearnLink(prev => !prev)
    setShowCompanyLink(false)
    setShowIndividualLink(false)

  }
  const showCompanyLinkHandler = () => {
    setShowCompanyLink(prev => !prev)
    setShowLearnLink(false)
    setShowIndividualLink(false)

  }
  const showIndividualLinkHandler = () => {
    setShowIndividualLink(prev => !prev)
    setShowLearnLink(false)
    setShowCompanyLink(false)

  }

  //this function hides button from small screen on initial rendering
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  //adding event to the global window
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Link to='/' className={styles.navbar_logo} onClick={closeMobileMenu} >
            Coinapp

          </Link>

          <button className={styles.getStarted} onClick={() => handleNavigate('/adminsignup')}>
            Get started
          </button>



          <div className={styles.menu_icon} onClick={handleClick}>
            <i className='material-icons' style={{ color: 'black' }}>
              menu
            </i>
          </div>

          <ul className={click ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`}>
            <li className={styles.nav_item}>
              <Link
                to='/'
                className={styles.nav_link}
                onClick={closeIndividualDesktop}
              >
              </Link>
              {/*<div className={styles.nav_link_small} onClick={showIndividualLinkHandler}>
                <button>
                  Individuals

                </button>
                <i className='material-icons'>
                  {showIndividualLink ? 'arrow_drop_down' : 'arrow_right'}

                </i>

              </div>*/}
              
              {/*showIndividualLink && <ul
                to='/products'
                className={styles.nav_link_list_con}
                onClick={closeMobileMenu}
              >
                <li className={styles.nav_link_list}>Buy and sell</li>
                <li className={styles.nav_link_list}>Earn</li>
                <li className={styles.nav_link_list}>Borrow</li>
                <li className={styles.nav_link_list}>Learning Rewards</li>
                <li className={styles.nav_link_list}>NFT</li>
                <li className={styles.nav_link_list}>Dirivatives</li>
              </ul>*/}

              {/*showIndividualsHiddenDesktopBlock && <div className={styles.hiddenblock}>
                <ul>
                  <li >Buy and sell</li>
                  <li  onClick={()=>alert('clicked me')}>Earn</li>
                  <li >NFT</li>
                  

                </ul>
                <ul>
                  <li >Borrow</li>
                  <li >Learning Rewards</li>
                  <li  onClick={()=>alert('clicked me')}>Dirivatives</li>

                </ul>
              </div>*/}

            </li>

            <li className={styles.nav_item}>
              <Link
                to='/learn'
                className={styles.nav_link}
                onClick={closeLearnDesktop}
              >
                Learn
              </Link>
              <div className={styles.nav_link_small} onClick={showLearnLinkHandler}>
                <button onClick={() => handleNavigate('/learn')}>
                  Learn

                </button>
                <i className='material-icons'>
                  {showLearnLink ? 'arrow_drop_down' : 'arrow_right'}

                </i>

              </div>
              {showLearnLink && <ul
                to='/learn'
                className={styles.nav_link_list_con}
                onClick={showLearnLinkHandler}
              >
                
                <li className={styles.nav_link_list} onClick={() => handleNavigate('/learn/tips-and-tutorials')}>Tips & Tutorials</li>
                <li className={styles.nav_link_list}onClick={() => handleNavigate('/learn/crypto-basics/')}>Crypto basics</li>

              </ul>}

              {/*showLearnHiddenDesktopBlock && <div className={styles.hiddenblock}>
                <ul>
                  <li >Tips & Tutorials</li>
                  <li  onClick={()=>alert('clicked me')}>Crypto basics</li>

                </ul>
               
              </div>*/}

            </li>


            {/*<li className={styles.nav_item}>
              
              <Link
                to="/"
                className={styles.nav_link}
                onClick={closeCompanyDesktop}
              >
                Company
              </Link>
              
              <div className={styles.nav_link_small} onClick={showCompanyLinkHandler}>
                <button>
                  Company

                </button>
                <i className='material-icons'>
                  {showCompanyLink ? 'arrow_drop_down' : 'arrow_right'}

                </i>

              </div>

              {showCompanyLink && <ul
                
                className={styles.nav_link_list_con}
                onClick={showCompanyLinkHandler}
              >
                <li className={styles.nav_link_list}>About</li>
                <li className={styles.nav_link_list}>Careers</li>
                <li className={styles.nav_link_list}>Blog</li>
                <li className={styles.nav_link_list}>Security</li>
              </ul>}

              {/*showCompanyHiddenDesktopBlock && <div className={styles.hiddenblock}>
                <ul>
                  <li >About</li>
                  <li  onClick={()=>alert('clicked me')}>Careers</li>

                </ul>
                <ul>
                  <li >Blog</li>
                  <li >Security</li>

                </ul>
              </div>


            </li>*/}

            <div className={styles.smbuttonContainer}>
              <li className={styles.nav_links_mobile_con}>
                <Link
                  to='/adminsignup'
                  className={styles.nav_links_mobile}
                  onClick={navigateToApp}
                >
                  Get started
                </Link>
              </li>
              <li className={styles.nav_links_mobile_con}>
                <Link
                  to='/adminlogin'
                  className={styles.nav_links_mobile2}
                  onClick={navigateToApp}
                >
                  Sign in
                </Link>
              </li>

            </div>

          </ul>

          {/*button for large screen */}
          <div className={styles.lgbuttonContainer}>
            {button && <Button buttonStyle='btn--outline' onClick={()=>handleNavigate('/adminlogin')} link={'/login'}>Login</Button>}
            {button && <Button buttonStyle='btn--colored' onClick={()=>handleNavigate('/adminsignup')} link={'/signup'}>Signup</Button>}

          </div>

        </div>
      </nav>
    </>
  );
}

export default Nav;