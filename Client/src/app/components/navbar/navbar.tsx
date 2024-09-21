import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <Link href='/pages/home'>Home</Link>
      <Link href='/pages/shop'>Shop</Link>
      <Link href='/pages/about-us'>About us</Link>
      <Link href='/pages/contact'>Contact</Link>
    </div>
  )
}
