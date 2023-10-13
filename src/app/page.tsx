import Image from 'next/image'
import styles from './page.module.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

export default function Page() {
  return (
 <>
     <div id="root" className='bg-black'>
    <Home/>
  </div>
 </>
  )
  }