import React from 'react'
import { axiosWithAuth } from '../utilities/axiosWithAuth'

const Login = () => {
  return (
    <div>
      <form>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
