import React from 'react'
import useEscapeKey from '../../hooks/use-escape-key'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])
  const handleEscape = React.useCallback(() => {
    setToasts([])
  },[])

  useEscapeKey(handleEscape);

  function addToast(message, variant) {
    const newToasts = [...toasts, { message, variant, id: crypto.randomUUID() }]

    setToasts(newToasts)
  }

  function removeToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id
    })

    setToasts(nextToasts)
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
