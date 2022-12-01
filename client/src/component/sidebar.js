import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { useNavigate } from 'react-router-dom'
import {
  UilEstate,
  UilClipboardAlt,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import {useSelector } from "react-redux";





const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)
  const navigate = useNavigate()

  //get admin from redux
  let { admin} = useSelector(state => state.userAuth)

  const sidebarVariants = {
    false: {
      left: '0%'
    },
    true: {
      left: '-60%'
    }
  }

  const SidebarData = admin.isMainAdmin === true ? [
    {
      icon: UilEstate,
      heading: "update ",
      link: '/upgrade'
    },
    {
      icon: UilClipboardAlt,
      heading: "fund",
      link: '/fund'
    },
    {
      icon: UilClipboardAlt,
      heading: "Admins",
      //the administrator
      link: '/admin'
    },
    
  ]:[
    {
      icon: UilEstate,
      heading: "update ",
      link: '/upgrade'
    },
    {
      icon: UilClipboardAlt,
      heading: "fund",
      link: '/fund'
    },
  ]

  //this function hides button from small screen on initial rendering
  const expandMenu = () => {
    if (window.innerWidth >= 768) {
      setExpaned(false);
    }
  };

  useEffect(() => {
    expandMenu();
  }, []);

  //adding event to the global window
  window.addEventListener('resize', expandMenu);


  return (
    <>
      <div className="bars" style={expanded ? { left: '85%' } : { left: '85%' }} onClick={() => setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}

        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        {/* logo */}
        <div className="logo">
          <span>
            Coincap
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => {
                  setSelected(index)
                  navigate(`${item.link}`)

                }}
              >
                <item.icon />
                <span style={{ marginLeft: '5px' }}>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          

          <div
            className="menuItem "
            onClick={() => {
              navigate(`/adminlogin`)

            }}
          >
            <UilSignOutAlt />
            <span style={{ marginLeft: '5px' }}>logout</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;