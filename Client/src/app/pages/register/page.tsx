'use client'

import { useState } from 'react'
interface RegisterProps {
  showText: boolean
  setShowText: () => void
  showConfirmText: boolean
  setLogin: () => void
  setShowConfirmText: () => void
}

type RegisterInputStates = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function Register({
  showText,
  setShowText,
  setLogin,
  showConfirmText,
  setShowConfirmText,
}: RegisterProps) {
  const initialState: RegisterInputStates = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const [fields, setFields] = useState(initialState)

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const doesNotMatch = fields.password !== fields.confirmPassword
    if (doesNotMatch) {
      console.log('The password and confirm password do not match')
    } else {
      console.log('register', fields)
    }
    setFields(initialState)
  }

  const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1 className='text-black'>Create Your Account</h1>
        <label>
          <span>Name</span>
          <input
            type='text'
            name='name'
            value={fields.name}
            onChange={formChangeHandler}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type='email'
            name='email'
            value={fields.email}
            onChange={formChangeHandler}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type={showText ? 'text' : 'password'}
            name='password'
            value={fields.password}
            onChange={formChangeHandler}
          />
          <span onClick={setShowText}>icon</span>
        </label>
        <label>
          <span>Confirm Password</span>
          <input
            type={showConfirmText ? 'text' : 'password'}
            name='confirmPassword'
            value={fields.confirmPassword}
            onChange={formChangeHandler}
          />
          <span onClick={setShowConfirmText}>icon</span>
        </label>
        <button type='submit'>SIGN UP</button>
      </form>
      <div>
        <h3>If you already have an account, just sign in!</h3>
        <button onClick={setLogin}>SIGN IN</button>
      </div>
    </div>
  )
}
