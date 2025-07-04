import Github from '../../assets/Home/Skills/Github.svg'
import GithubMono from '../../assets/Home/Skills/Github-1.svg'
import { useEffect, useReducer, useRef, useState } from 'react';

function EachSkill() {

    const Opacity = useRef();
    const InverseOpacity = useRef();

    const [HoverState, SetHoverState] = useState(0)

    useEffect(() => {
        if (HoverState === 1)
        {
            Opacity.current.classList.add('op')
            InverseOpacity.current.classList.remove('rop')
        }
        if (HoverState === 0)
        {
            Opacity.current.classList.add('rop')
            InverseOpacity.current.classList.remove('op')
        }
        
    }, [HoverState])



    return (
        <>
            <div className="w-full h-full border-[5px] bg-[#EAE7C7]/20 border-[#EAE7C7]/40 rounded-3xl flex flex-col items-center justify-center coolbox" onMouseEnter={() => SetHoverState(1)} onMouseLeave={() => SetHoverState(0)} >
                <div className='w-full relative h-full flex items-center justify-center'>
                    <div className='relative w-full h-full transform flex justify-center items-center' >
                        <img ref={Opacity} className='absolute op z-25 w-full h-full p-2' src={Github} alt="" />
                        <img ref={InverseOpacity} className='absolute rop z-26 w-full h-full p-2' src={GithubMono} alt="" />
                    </div>

                </div>
            </div>
        </>
    );
}
export default EachSkill