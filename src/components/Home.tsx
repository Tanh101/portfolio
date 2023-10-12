import React from 'react'
import black from '../assets/img/black.png'

const Home = () => {
    return (
        <div className='home pt-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 flex flex-col'>
            <div className='content mt-20 text-xl px-2 flex justify-center text-center h-screen'>
                <div className="name space-y-2 font-extrabold">
                    <p className='space-y-4'>Hello, </p>
                    <span>I'm</span>
                    <span className='text-[2rem] text-blue-400 opacity-1'>Tanh</span>
                    <div>
                        <span>Fullstack Developer</span>
                    </div>
                </div>
                <div className="avatar w-20 h-20 object-cover">
                    <img src={black} alt="" />
                </div>
            </div>
            <div>
                <button className='px-10 py-3 bg-blue-400'>Dowload My Resume</button>
            </div>
        </div>
    )
}

export default Home
