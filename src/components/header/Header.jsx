import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
        <h3>Avhishek</h3>
        <button className={styles.btn}>Login</button>
      
    </div>
  )
}

export default Header
