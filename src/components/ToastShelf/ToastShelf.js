import React from 'react'

import Toast from '../Toast'
import { ToastContext } from '../ToastProvider'

import styles from './ToastShelf.module.css'

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext)

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts?.map(({ id, variant, message }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast id={id} toasts={toasts} variant={variant}>
              {message}
            </Toast>
          </li>
        )
      })}
    </ol>
  )
}

export default ToastShelf
