import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateScrollPosition, setActiveNavLink } from '../../redux/actions/scrollAction';

const About = () => {
    interface RootState {
        scrollPosition: number;
    }

    const scrollPosition = useSelector((state: RootState) => state.scrollPosition);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateScrollPosition(scrollPosition));
        
        const aboutElement = document.getElementById('about');
        if (aboutElement) {
            const rect = aboutElement.getBoundingClientRect();
            const isAboutInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (isAboutInViewport) {
                dispatch(setActiveNavLink('about')); 
            }
        }
    }, [scrollPosition, dispatch]);
    
    return (
        <div id='about' className='h-screen'>About</div>
    )
}

export default About;
