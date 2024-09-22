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
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-row justify-center items-center shadow-lg mx-auto w-1/2 rounded-l p-6 absolute top-0 right-0 left-0'>
        <form
          onSubmit={submitHandler}
          className='flex flex-col justify-center items-center '
        >
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
        <div className='flex flex-col justify-center items-center '>
          <h3 className='w-1/2 text-align-center'>
            Do not have an account? Please Sign up!
          </h3>
          <button onClick={setRegister}>SIGN UP</button>
        </div>
      </div>
    </div>
  )
}
