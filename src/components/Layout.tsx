import Header from './Header/Header'
import About from './About/About'
import Project from './Projects/Project'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Footer from './Footer'
import Home from './Home/Home'
import { BsSun } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { darkTheme, lightTheme } from '../redux/actions/themeAction'
import AppState from '../types'

const Layout = () => {

    const theme = useSelector((state: AppState) => state.theme);
    const dispatch = useDispatch();
    const themeClassName = theme === 'dark' ? 'change-theme dark font-roboto' : 'change-theme light font-roboto';

    const handleChangeTheme = () => {
        theme === 'dark' ? dispatch(lightTheme("light")) : dispatch(darkTheme("dark"));
    }

    return (
        <div className={themeClassName}>
            <Header />
            <Home />
            <About />
            <Project />
            <Skills />
            <Contact />
            <Footer />
            <button className="border text-xl flex justify-center items-center hover:scale-110 
            change-theme fixed z-[999] ease-in duration-200 p-1 rounded-full w-12 h-12  bottom-4
             right-4"
                onClick={handleChangeTheme}>
                {theme === 'dark' ? <BsSun></BsSun> : <MdDarkMode></MdDarkMode>}
            </button>
        </div>
    )
}

export default Layout