import undrawCodeTyping from '../assets/undraw_code_typing.svg';
import Github from '../assets/Github.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import Mail1 from '../assets/Mail1.svg';

function ContactHome() {
    return (
        <div className='mb-0'>
            <div className="flex w-full justify-between items-start bg-transparent p-5">
                <p className="text-white  text-[35px] sm:text-[55px] lg:text-[75px] font-light font-['M PLUS 2'] pt-3 lg:pt-0 sm:pt-1">THANK YOU</p>
                <img src={undrawCodeTyping} alt="Coding Icon" className="w-20 lg:w-48 sm:w-32 h-auto pt-5" />
            </div>
            <div className="text-white text-[20px] sm:text-[22px] lg:text-[40px] font-normal font-['Monda'] pl-5">Get in Touch :</div>
            <div className='flex flex-col space-y-6 pt-5'>
                <a className='flex' href='mailto:psriganesh2005@gmail.com?subject=Your Subject&body=Your message here' target='_blank'>
                    <img src={Mail1} alt="Mail" className='pl-5 w-16 sm:w-20 lg:w-32 h-auto' />
                    <div className="text-white text-[17px] sm:text-[25px] lg:text-[40px] font-normal font-['Monda'] pl-5 lg:pl-7">
                        psriganesh2005@gmail.com
                    </div>
                </a>

                <a className='flex' href='https://www.linkedin.com/in/sriganesh-prakash-725a50279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>
                    <img src={LinkedIn} alt="LinkedIn" className='pl-5 w-16 sm:w-20 lg:w-32 h-auto' />
                    <div className="text-white text-[17px] sm:text-[25px] lg:text-[40px] font-normal font-['Monda'] pl-5 pt-3 lg:pt-6 lg:pl-7">Sriganesh Prakash</div>
                </a>
                <a className='flex' href='https://github.com/SriGanesh01' target='_blank'>
                    <img src={Github} alt="Github" className='pl-5 w-16 sm:w-20 lg:w-32 h-auto' />
                    <div className="text-white text-[17px] sm:text-[25px] lg:text-[40px] font-normal font-['Monda'] pl-5 pt-3 lg:pt-6 lg:pl-7">Sriganesh01</div>
                </a>
            </div>
            <div className="text-white text-[50px] sm:text-[75px] lg:text-[150px] font-normal font-LondrinaOutline flex justify-end items-baseline mb-0 lg:mr-5">SRIGANESH.P</div>
        </div>
    );
}

export default ContactHome;
