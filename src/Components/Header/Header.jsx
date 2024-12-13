import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div>
        <div className={styles.boxes}>
          <div className={styles.box1}>
             Home
          </div>
          <button className={styles.btn}>Submit</button>
        </div>
    </div>
  )
}

export default Header