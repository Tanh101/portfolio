import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const about = document.getElementById('about');
            if (about) {
                const rect = about.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    console.log('about is in the viewport');
                    about.classList.add('active-navbar');
                }
            }
        });
    });

    return (
        <div id='about' className='h-screen'>About</div>
    )
}

export default About