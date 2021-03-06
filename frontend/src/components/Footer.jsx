import React from 'react'
import { Link } from 'react-router-dom'
import pinterestLogo from '../../images/pinterest.svg'
import twitterLogo from '../../images/twitter.svg'
import instaLogo from '../../images/insta.svg'

const Footer = () => {
  return (
    <div className='px-6 md:flex'>
      <div className='my-8 flex'>

        <div className='mr-16'>

          <h1 className='text-4xl font-bold text-brand-primary '>company</h1>
          <ul>
            <Link to="/aboutus"><li className='text-xl text-brand-primary  cursor-pointer mt-2'>about us</li></Link>
            <Link to="/contactus"><li className='text-xl text-brand-primary  cursor-pointer mt-2'>contact us</li></Link>
            <Link to="/policy"><li className='text-xl text-brand-primary  cursor-pointer mt-2'>policy</li></Link>
          </ul>

        </div>

        <div>

          <h1 className='text-4xl font-bold text-brand-primary  '>shop</h1>
          <ul>
            <Link to="/packages"><li className='text-xl text-brand-primary  cursor-pointer mt-2'>packages</li></Link>
          </ul>

        </div>

      </div>

      <div className='mt-10 md:my-8 md:mx-16'>

        <h1 className='text-4xl font-bold text-brand-primary '>get the latest news & offers</h1>
        <form action="" className='flex flex-col'>
          <input className='mt-6 w-4/5 text-2xl bg-brand-primary dark:text-brand-secondary rounded-lg pl-4 py-2 text-white dark:placeholder:text-brand-secondary placeholder:text-white outline-none drop-shadow-lg' placeholder='Email Address*' type="email" name="email" id="email" />
          <button className='mt-4 w-4/5 text-2xl mobile-btn text-brand-primary  dark:bg-brand-secondary dark:text-brand-primary bg-white dark:hover:bg-brand-primary dark:hover:text-brand-secondary hover:bg-brand-primary hover:text-white' type="submit">subscribe</button>
        </form>

      </div>

      <div className='md:my-8 mt-10 pb-6'>

        <h1 className='text-4xl font-bold text-brand-primary '>socials</h1>
        <ul className='mt-2 flex gap-2'>
          <img className='cursor-pointer' src={pinterestLogo} alt="" />
          <img className='cursor-pointer' src={instaLogo} alt="" />
          <img className='cursor-pointer' src={twitterLogo} alt="" />
        </ul>

      </div>

    </div>
  )
}

export default Footer