import React from 'react';
import styles from './dashboardUser.module.css';

let DashboardUser = ({ username, email, imageUrl, navigateHandler, id }) => {

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



  return <div className={styles.dashboard_main_user} onClick={() => navigateHandler(id)}>
    <div className={styles.dashboard_main_user_imgCon}>
      {imageUrl ? <img src={imageUrl} /> : <i className='material-icons' style={{ color: 'grey', fontSize: 50 }}>person</i>}
    </div>
    <div className={styles.dashboard_main_user_infoCon}>
      <h2>{truncate(username, 18)}</h2>
      <p>{truncate(email, 15)}.com</p>
    </div>

  </div>
}



export default DashboardUser