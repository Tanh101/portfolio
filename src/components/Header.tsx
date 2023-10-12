import { useState } from 'react'
import '../index.css'

const Header = () => {
    const [active, setActive] = useState('home');
    return (
        <header className='header ml-5 relative z-[999]'>
            <nav className='navbar flex items-center w-full text-base font-bold px-3 top-0 left-1/2 h-[4rem]  
                justify-around fixed shadow-sm bg-[#0f0907] lg:w-1/2 lg:text-xl lg:rounded-3xl lg:bg-slate-900
                lg:top-4'>
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