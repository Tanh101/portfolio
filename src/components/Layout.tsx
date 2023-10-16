import Header from './Header/Header';
import About from './About/About';
import Project from './Projects/Project';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer';
import Home from './Home/Home';
import { BsSun } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { useState, useEffect } from 'react'; // Import useEffect
import { useDispatch} from 'react-redux';
import { updateScrollPosition } from '../redux/actions/scrollAction';

const Layout = () => {
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'dark');

    const themeClassName = theme === 'dark' ? 'change-theme dark font-roboto' : 'change-theme light font-roboto';

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    //scroll
    const dispatch = useDispatch();
    window.onscroll = () => {
        const scrollPosition = window.scrollY;
        dispatch(updateScrollPosition(scrollPosition));
    };

    return (
        <div className={themeClassName}>
            <Header />
            <Home />
            <About />
            <Project />
            <Skills />
            <Contact />
            <Footer />
            <button className={`${theme === 'dark' ? '' : 'border-gray-500'} border text-xl flex justify-center items-center hover:scale-110 
            change-theme fixed z-[999] ease-in duration-200 p-1 rounded-full w-12 h-12  bottom-4
             right-4`}
                onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                }}>
                {theme === 'dark' ? <BsSun /> : <MdDarkMode />}
            </button>
        </div>
    );
};

export default Layout;
