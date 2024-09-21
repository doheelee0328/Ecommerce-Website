interface RegisterProps {
  showText: boolean
  setShowText: () => void
  showConfirmText: boolean
  setLogin: () => void
  setShowConfirmText: () => void
}

export default function Register({
  showText,
  setShowText,
  setLogin,
  showConfirmText,
  setShowConfirmText,
}: RegisterProps) {
  return (
    <div>
      <form>
        <h1 className='text-black'>Create Your Account</h1>
        <label>
          <span>Name</span>
          <input type='text' />
        </label>
        <label>
          <span>Email</span>
          <input type='email' />
        </label>
        <label>
          <span>Password</span>
          <input type={showText ? 'text' : 'password'} />
          <span onClick={setShowText}>icon</span>
        </label>
        <label>
          <span>Confirm Password</span>
          <input type={showConfirmText ? 'text' : 'password'} />
          <span onClick={setShowConfirmText}>icon</span>
        </label>
      </form>
      <div>
        <h3>If you already have an account, just sign in!</h3>
        <button onClick={setLogin}>SIGN IN</button>
      </div>
    </div>
  )
}
