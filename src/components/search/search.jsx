import { useState } from 'react'
import styles from './search.module.css'
import btn from '../Button/Button'

function search({ handler }) {
  const [searchValue, setSearchValue] = useState('')
  const searchEvent = (e) => {
    e.preventDefault()
    handler(searchValue)
  }

  return (
    <form className={styles.searchForm} action="#" onSubmit={searchEvent}>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
      />
      <btn text="Search" />
    </form>
  )
}

export default search