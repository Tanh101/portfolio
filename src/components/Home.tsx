import { useEffect, useState } from 'react';
import avatar from '../assets/img/avatar.png'
import { BsDownload } from 'react-icons/bs';
const Home = () => {

    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const resumeUrl:string = 'https://drive.google.com/file/d/1e15eJ0Ujl8mSJXyJExWf031LdB_BhnH2/view?usp=drive_link';
    
    const handleDownload = () => {
        window.open(resumeUrl, '_blank');
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='home scrolling-text font-roboto font-medium bg-[#0f0907] flex flex-col' style={{ left: `calc(100% - ${scrollPosition}px)`}}>
            <div className='content text-xl px-2 flex flex-col justify-center items-center text-center h-screen'>
                <div className="name space-y-4 font-extrabold">
                    <p className='my-2 text-3xl lg:text-4xl lg:mb-4'>Xin Chao, </p>
                    <span>I'm</span>
                    <span className='text-[1.5rem] ml-2 text-blue-400 opacity-1'>Tanh</span>
                    <p className='text-sm font-medium'>Backend Web Developer</p>
                </div>
                <div className="avatar my-10 w-28 justify-centers">
                    <img className=' rounded-full' src={avatar} alt="" />
                </div>
                <div className='flex my-4 p-3 justify-between rounded-md text-black bg-blue-400 items-center' onClick={handleDownload}>
                    <BsDownload>
                    </BsDownload>
                    <button className='ml-2'>My Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Home
