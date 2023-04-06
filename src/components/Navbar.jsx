import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { styles } from '../style';
import { logo, menu, close } from '../assets';
const Navbar = () => {
  const [activePage, setActivePage] = useState();
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX}`} w-full flex items-center py-5 fixed top-0 z-20 bg-primary>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActivePage("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className='text-white text[18] font-bold cursor-pointer'>Vagia Tourlida</p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link) => {
              return <li key={link.id} className={`${activePage === link.title ?
                'text-white' : 'text-secondary'} hover:text-white text-s[18px] font-medium cursor-pointers`} onClick={() => {
                  setActivePage(link.title)
                }}>
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            })
          }
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='mobile-menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => {
            setToggle(!toggle);
          }} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {
                navLinks.map((link) => {
                  return <li key={link.id} className={`${activePage === link.title ?
                    'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {
                      setActivePage(link.title)
                      setToggle(!toggle);
                    }}>
                    <a href={`#${link.id}`}>
                      {link.title}
                    </a>
                  </li>
                })
              }
            </ul>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar