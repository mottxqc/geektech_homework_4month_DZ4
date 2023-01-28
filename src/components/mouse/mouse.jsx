import styles from './mouse.module.css'
import btn from '../btn/btn'

function mouse({ mouse }) {
  const linkHandler = () => {
    window.location.replace(`/path-to-mouse/${mouse.id}`)
  }

  const cartHandler = () => {
    alert(
      `добавлен товар: ${mouse.title}\nИ id: ${mouse.id}`
    )
  }
  return (
    <li className={styles.mouse}>
      <img
        className={styles.mouseImage}
        src={mouse.image}
        alt={mouse.title}
      />
      <div className={styles.mouseText}>
        <h3 className={styles.mouseTitle}>{mouse.title}</h3>
        <div className={styles.mouseInfo}>
          <p className={styles.mousePrice}>${mouse.price}</p>
          <div className={styles.mouseButtons}>
            <Button text="Show more" handler={linkHandler} />
            <Button text="Add to cart" handler={cartHandler} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default mouse