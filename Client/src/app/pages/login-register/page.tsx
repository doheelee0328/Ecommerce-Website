'use client'

import { useReducer } from 'react'
import Register from '../register/page'
import Login from '../login/page'

type LoginRegister = {
  register: boolean
  showTextLogin: boolean
  showTextRegister: boolean
  showTextRegisterConfirmPassword: boolean
}

export default function LoginRegister() {
  const initialState: LoginRegister = {
    register: false,
    showTextLogin: false,
    showTextRegister: false,
    showTextRegisterConfirmPassword: false,
  }

  const [
    {
      register,
      showTextLogin,
      showTextRegister,
      showTextRegisterConfirmPassword,
    },
    setState,
  ] = useReducer(
    (state: any, action: any) => ({ ...state, ...action }),
    initialState
  )

  return (
    <>
      {register ? (
        <Register
          showText={showTextRegister}
          showConfirmText={showTextRegisterConfirmPassword}
          setShowText={() => setState({ showTextRegister: !showTextRegister })}
          setShowConfirmText={() =>
            setState({
              showTextRegisterConfirmPassword: !showTextRegisterConfirmPassword,
            })
          }
          setLogin={() => setState({ register: false })}
        />
      ) : (
        <Login
          showText={showTextLogin}
          setShowText={() => setState({ showTextLogin: !showTextLogin })}
          setRegister={() => setState({ register: true })}
        />
      )}
    </>
  )
}
