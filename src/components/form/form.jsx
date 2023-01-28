import { useState } from 'react'
import styles from './form.module.css'
import btn from '../btn/btn'

function form({ display, closeForm }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rPassword, setRPassword] = useState('')
  const [check, setCheck] = useState(false)

  function formHandler(e) {
    e.preventDefault()
    if (
      email.match(emailRegExp) &&
      password.match(passwordRegExp) &&
      password === rPassword
    ) {
      alert('Форма отправлена')
      setEmail('')
      setPassword('')
      setRPassword('')
      setCheck('')
    } else {
      alert('Ошибка')
    }
  }

  return (
    <div
      className={styles.modal}
      style={{ display: display }}
      onClick={() => closeForm('none')}
    >
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <form action="#" className={styles.form} onSubmit={formHandler}>
          <h2>Sign in</h2>
          <label>
            E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={check}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={check}
            />
          </label>
          <label>
            Repeat password:
            <input
              type="password"
              value={rPassword}
              onChange={(e) => setRPassword(e.target.value)}
              disabled={check}
            />
          </label>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                checked={check}
                onChange={() => setCheck((prev) => !prev)}
              />
            </label>
          </div>
          <Button
            text="Sign in"
            isDisabled={!check}
            className={check && "disabledButton"}
          />
        </form>
      </div>
    </div>
  )
}

export default form