import React from 'react'
import './NotificationList.css'
import { List } from 'semantic-ui-react'


const NotificationList = () => {
  return (
    <div style={{ paddingLeft:'25px' }}>
         <List divided relaxed>
    <List.Item className='listitem'>
      <List.Content className='listcontent' floated='left'>
      <p className='day'>2023.03.02</p>
      <p className='notificationtitle'>面接スケジュール機能を消しました。</p>
      </List.Content>
    </List.Item>
    <List.Item className='listitem'>
      <List.Content className='listcontent' floated='left'>
      <p className='day'>2023.03.02</p>
      <p className='notificationtitle'>面接スケジュール機能を消しました。</p>
      </List.Content>
    </List.Item>
    <List.Item className='listitem'>
      <List.Content className='listcontent' floated='left'>
      <p className='day'>2023.03.02</p>
      <p className='notificationtitle'>面接スケジュール機能を消しました。</p>
      </List.Content>
    </List.Item>
    
  </List>
    </div>
  )
}

export default NotificationList