import React, { useState, useContext } from 'react'
import { findListItemIdx } from '../utils/arrayMethods'

interface Message {
  id: string
  text: string
  seen: boolean
  created: string
}

interface INotificationContext {
  messages: Message[]
  push: (m: Message) => void
  toggle: (id: string) => void
}

const defaultNotificationContext: INotificationContext = {
  messages: [],
  push: () => {},
  toggle: () => {},
}

const NotificationContext = React.createContext<INotificationContext>(
  defaultNotificationContext
)

export const NotificationProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const msgs: Message[] = [
      {
        id: '1',
        text: 'added new article: database',
        seen: false,
        created: '0-0-0',
      },
      {
        id: '2',
        text: 'added new article: dApp',
        seen: false,
        created: '0-0-0',
      },
    ]
    return msgs
  })

  function push(m: Message) {
    const listMsgs = [...messages, m]
    setMessages(listMsgs)
  }

  function toggle(id: string) {
    const msgList = [...messages]
    const [idx, err] = findListItemIdx(id, messages)
    if (err !== null) throw err

    msgList[idx].seen = !msgList[idx].seen
    setMessages(msgList)
  }

  return (
    <NotificationContext.Provider value={{ messages, toggle, push }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)
