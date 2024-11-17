import Link from "next/link"
import About from "../about-page/page"

function Navbar() {
  return (
    <div className="p-2 bg-orange-500/10 font-semibold text-xl">
      <ul className="flex gap-7">
        <li>
        <Link href='/'>T-CHAT</Link>
        </li>
        <li>
        <Link href='/about-page'>About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
