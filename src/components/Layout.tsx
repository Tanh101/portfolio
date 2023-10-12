import { useState } from 'react'
import Header from './Header'
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import { BsSun } from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
const Layout = () => {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        const main = document.querySelector('.change-theme');
        main?.classList.toggle('dark');
        main?.classList.toggle('light');
    }

    return (
        <div className='change-theme dark font-roboto'>
            <Header/>
            <Home />
            <About />
            <Project />
            <Skills />
            <Contact />
            <Footer />
            <button className="border text-xl flex justify-center items-center hover:scale-110 
            change-theme fixed z-[999] ease-in duration-200 p-1 rounded-full w-12 h-12  bottom-4
             right-4"
                onClick={changeTheme}>
                {theme === 'dark' ? <BsSun></BsSun> : <MdDarkMode></MdDarkMode>}
            </button>
        </div>
    )
}

export default Layout