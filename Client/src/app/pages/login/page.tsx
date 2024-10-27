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
    <div className='flex justify-center items-center align-items-center h-screen w-full'>
      <div className='flex flex-col w-1/2 shadow-lg p-10 mx-auto rounded-md gap-0.25'>
        <form
          onSubmit={submitHandler}
          className='flex flex-col justify-center items-center gap-3'
        >
          <h1 className='text-black text-lg font-bold text-2xl'>Welcome</h1>

          <label className='flex flex-col w-full'>
            <span className='mb-2'>Email</span>
            <input
              type='email'
              name='email'
              onChange={formChangeHandler}
              value={fields.email}
              className=' border border-gray-300 rounded-md w-full pt-2'
            />
          </label>

          <label className='flex flex-col mt-1 w-full'>
            <span className='mb-2'>Password</span>
            <div className='flex flex-row justify-center '>
              <input
                type={showText ? 'text' : 'password'}
                name='password'
                onChange={formChangeHandler}
                value={fields.password}
                className=' border border-gray-300 rounded-md w-full pt-2'
              />
              <span onClick={setShowText} className=''>
                Icon
              </span>
            </div>
          </label>

          <button className='rounded-md w-full mt-4'>SIGN IN</button>
        </form>

        <div className='flex flex-col justify-center items-center mt-5 gap-2'>
          <h3 className='text-center italic mb-0.5'>
            Do not have an account? Please Sign up!
          </h3>
          <button onClick={setRegister} className=' rounded-md'>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}
