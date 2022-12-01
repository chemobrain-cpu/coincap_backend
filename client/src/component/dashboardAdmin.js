import React from 'react'
import styles from './dashboardAdmin.module.css'

let DashboardAdmin = ({ username, email, imageUrl, navigateHandler,deleteHandler,id }) => {

  const truncate = (str, len) => {
    if (str.length > len) {
      if (len <= 3) {
        return str.slice(0, len - 3) + "...";
      }
      else {
        return str.slice(0, len) + "...";
      };
    }
    else {
      return str;
    };
  };


  return <div className={styles.dashboard_main_user} >
    <div className={styles.dashboard_main_user_imgCon}>
      {imageUrl ? <img src={imageUrl} /> : <i className='material-icons' style={{ color: 'grey', fontSize: 50 }}>person</i>}
    </div>
    <div className={styles.dashboard_main_user_infoCon} onClick={() => navigateHandler(id)}>
      <h2>{truncate(email, 15)}.com</h2>
    </div>
    <div className={styles.deleteCon} onClick={() => deleteHandler(id)}>
      <i className='material-icons' style={{ color: 'grey', fontSize: 24 }}>delete</i>
    </div>

  </div>
}

export default DashboardAdmin