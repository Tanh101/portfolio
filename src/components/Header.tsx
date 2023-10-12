import React, { useState } from 'react'
import '../index.css'

const Header = () => {
    const [active, setActive] = useState('home');
    return (
        <header className='header relative z-[999]'>
            <nav className='navbar w-full text-xl font-bold top-0 left-1/2 h-[3.5rem] lg:h-[4rerm]  lg:rounded-3xl flex items-center 
            justify-around fixed sm:top-2 sm:w-[36rem] shadow-sm sm:bg-[#2c2a2a]'>
                <a className={active === 'home' ? 'active' : ''} href="#" onClick={() => setActive('home')}>
                    Home
                </a>
                <a className={active === 'about' ? 'active' : ''} href="#about" onClick={() => setActive('about')}>
                    About
                </a>
                <a className={active === 'projects' ? 'active' : ''} href="#projects" onClick={() => setActive('projects')}>
                    Projects
                </a>
                <a className={active === 'skills' ? 'active' : ''} href="#skills" onClick={() => setActive('skills')}>
                    Skills
                </a>
                <a className={active === 'contact' ? 'active' : ''} href="#contact" onClick={() => setActive('contact')}>
                    Contact
                </a>
            </nav>
        </header>
    );
}

export default Header