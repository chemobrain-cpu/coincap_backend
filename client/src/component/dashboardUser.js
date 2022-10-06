import React from 'react'
import styles from './dashboardUser.module.css'

let DashboardUser = ({username,email,imageUrl,navigateHandler,id}) => {
    if(!imageUrl){
        imageUrl = '../../action1.jpg'
    }

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


    return <div className={styles.dashboard_main_user} onClick={()=>navigateHandler(id)}>
                <div className={styles.dashboard_main_user_imgCon}>
                    <img src={imageUrl} />
                </div>
                <div className={styles.dashboard_main_user_infoCon}>
                    <h2>{truncate(username,18)}</h2>
                    <p>{truncate(email,15)}.com</p>
                </div>

            </div>
}

export default DashboardUser