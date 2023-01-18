import logo from '../images/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import arrow from '../images/icon-arrow-down.svg'

const NavbarHero = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'about'
        },
        {
            id: 2,
            link: 'services'
        },
        {
            id: 3,
            link: 'projects'
        },
    ]

    return (
        <div className="px-8 pt-8 pb-5" id='hero-image'>
            <div className='flex justify-between items-center'>
                {/* LOGO */}
                <div>
                    <img src={logo} alt="" className='w-40' />
                </div>

                {/* HAMBURGER ICON */}
                <div onClick={() => setNav(!nav)} className="text-white cursor-pointer sm:hidden">
                    {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
                </div>

                {/* MOBILE MENUS */}
                {nav && (
                    <ul className='flex flex-col justify-start items-center gap-y-6 absolute top-32 py-8 w-10/12 bg-white sm:hidden'>
                        {links.map(({ id, link }) => (
                            <li key={id} className='capitalize text-darkGrayishBlue'>{link}</li>
                        ))}
                        <li className='py-6 px-8 bg-yellow rounded-full'>contact</li>
                    </ul>
                )}

                {/* DESKTOP MENUS */}
                <ul className='hidden sm:flex items-center gap-x-10'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='capitalize text-white text-lg cursor-pointer'>
                            {link}
                        </li>
                    ))}
                    <li className='bg-white uppercase text-veryDarkGrayishBlue py-4 px-7 rounded-[30px] cursor-pointer duration-300 hover:bg-cyanLight hover:text-white ' id='main-font'>contact</li>
                </ul>
            </div>

            <div className='flex flex-col justify-center items-center gap-y-20 mt-24'>
                <h2 id='main-font' className='uppercase text-white text-[42px] leading-[48px] text-center tracking-widest md:text-5xl'>
                    We are Creatives
                </h2>
                <img src={arrow} alt="" />
            </div>
        </div>
    );
}

export default NavbarHero;