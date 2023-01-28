import styles from './nav.module.css'
import search from '../search/search'
import navBtns from '../navBtns/navBtns'

function nav() {
  return (
    <nav className={styles.nav}>
      <search />
      <navBtns />
    </nav>
  )
}

export default nav