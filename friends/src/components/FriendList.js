import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utilities/axiosWithAuth'

import FriendForm from './FriendForm'
import Friend from './Friend'

const FriendList = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        console.log(res.data)
        setFriends(...friends, res.data)
        console.log(friends)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <FriendForm />
      {friends.map(friend => (
        <Friend
          key={friend.id}
          name={friend.name}
          age={friend.age}
          email={friend.email}
        />
      ))}
    </div>
  )
}

export default FriendList
