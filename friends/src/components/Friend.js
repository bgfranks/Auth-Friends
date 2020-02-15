import React from 'react'

const Friend = ({ name, email, age }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  )
}

export default Friend
