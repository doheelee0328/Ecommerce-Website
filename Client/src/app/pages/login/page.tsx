interface LoginProps {
  showText: boolean
  setShowText: () => void
  setRegister: () => void
}

export default function Login({
  showText,
  setShowText,
  setRegister,
}: LoginProps) {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1 className='text-black'>Welcome</h1>
        <label>
          <span>Email</span>
          <input type='email' />
        </label>
        <label>
          <span>Password</span>
          <input type={showText ? 'text' : 'password'} />
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
