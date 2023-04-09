import React from 'react'
import './Notification.css'
import NotificationList from './NotificationList'


const Notification = () => {
  return (
    <div>
        <div className="title"><div className="title_text">お知らせ</div></div>
        <NotificationList/>
    </div>
  )
}

export default Notification