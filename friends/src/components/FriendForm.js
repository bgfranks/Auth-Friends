import React, { useState } from 'react'
import { axiosWithAuth } from '../utilities/axiosWithAuth'

const FriendForm = () => {
  const [newFriend, setNewFreind] = useState({ name: '', age: '', email: '' })

  const handleChange = e => {
    setNewFreind({ ...newFriend, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/api/friends', newFriend)
      .then(res => {
        console.log(res)
        window.location.href = '/protected'
      })
      .catch(err => {
        console.log(err)
      })
    setNewFreind({ name: '', age: '', email: '' })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />
        <button>Add Friend</button>
      </form>
    </div>
  )
}

export default FriendForm
