import { useEffect, useRef, useState } from 'react';
import avatar from '../../assets/img/avatar.png'
import { BsDownload } from 'react-icons/bs';
import './Home.css'

const Home = () => {

    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const resumeUrl: string = 'https://drive.google.com/file/d/1e15eJ0Ujl8mSJXyJExWf031LdB_BhnH2/view?usp=drive_link';
    const theme = localStorage.getItem('theme') || 'light';

    const handleDownload = () => {
        window.open(resumeUrl, '_blank');
    }

    const homeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('home-show');
                } else {
                    entry.target.classList.remove('home-show');
                }
            });
        });

        window.addEventListener('scroll', handleScroll);

        const hiddenElements = document.querySelectorAll('.home-hidden');
        hiddenElements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [theme]);

    useEffect(() => {
        const homeElement = document.querySelector('.home');
        theme === 'dark' ? homeElement?.classList.add('dark-mode') : homeElement?.classList.add('light-mode');
    }, [theme]);

    return (
        <div className='home scrolling-text font-roboto font-medium flex flex-col' style={{ left: `calc(100% - ${scrollPosition}px)` }}>
            <div className='content text-xl px-2 flex flex-col justify-center items-center text-center mb-4 h-screen'>
                <div className='flex items-center w-2/5 justify-center flex-wrap lg:px-6 lg:py-12'>
                    <div className="name space-y-4 font-extrabold px-2 lg:w-1/2 w-full">
                        <p className='my-2 text-3xl lg:text-4xl lg:mb-4'>Xin Chao, </p>
                        <span>I'm</span>
                        <span className='text-[1.5rem] ml-2 text-blue-400 opacity-1 lg:text-[2rem]'>Tanh</span>
                    </div>
                    <div className="avatar flex justify-center text-centers my-10 justify-centers lg:my-12 lg:w-1/2 w-full">
                        <img className='border-spacing w-48 rounded-full' src={avatar} alt="" />
                    </div>
                </div>
                <p ref={homeRef} style={{ left: `calc(100% - ${scrollPosition}px)` }}
                    className={`home-hidden text-sm mt-4 font-medium lg:text-base 'text-gray-300' : 'text-gray-800'}`}>
                    Backend Web Developer | Blogger
                </p>
                <div ref={homeRef} style={{ left: `calc(100% - ${scrollPosition}px)` }}
                    className='home-hidden mt-10 flex text-base font-extrabold mtb-5 p-3 justify-between rounded-md text-black bg-blue-400 items-center lg:mt-10'
                    onClick={handleDownload}>
                    <BsDownload>
                    </BsDownload>
                    <button className='ml-2'>My Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Home
