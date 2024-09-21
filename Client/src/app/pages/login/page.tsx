'use client'

import { useState } from 'react'

interface LoginProps {
  showText: boolean
  setShowText: () => void
  setRegister: () => void
}

type InputStates = {
  email: string
  password: string
}

export default function Login({
  showText,
  setShowText,
  setRegister,
}: LoginProps) {
  const inputInitialStates: InputStates = {
    email: '',
    password: '',
  }

  const [fields, setFields] = useState(inputInitialStates)

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('hello', fields)
    setFields(inputInitialStates)
  }

  const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    setFields((prev: any) => ({
      ...prev,
      [e.target.name]: value,
    }))
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1 className='text-black'>Welcome</h1>
        <label>
          <span>Email</span>
          <input
            type='email'
            name='email'
            onChange={formChangeHandler}
            value={fields.email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type={showText ? 'text' : 'password'}
            name='password'
            onChange={formChangeHandler}
            value={fields.password}
          />
          <span onClick={setShowText}>Icon</span>
        </label>
        <button>SIGN IN</button>
      </form>
      <div>
        <h3>Do not have an account? Please Sign up!</h3>
        <button onClick={setRegister}>SIGN UP</button>
      </div>
    </div>
  )
}
