
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";

import LinkedInIcon from "../../assets/Home/Icons/LinkedIn.svg";
import GitHub from "../../assets/Home/Icons/GitHub.svg";
import Mail from "../../assets/Home/Icons/Mail.svg";
import Instagram from "../../assets/Home/Icons/Instagram.svg";
import Resume from "../../assets/Home/Icons/CV.svg";
import Arrow1 from "../../assets/Home/arrow1.png"
import MyPhoto1 from "../../assets/Home/MyPhoto.jpg"
import Location from "../../assets/Home/Location.svg"


function HeroHome() {

    const cardFlipRef = useRef();
    const cardFlipBackRef = useRef();
    const [ClickState, SetClickState] = useState(true);
    const onRender = useRef(false)
    const LinkedPos = useRef()
    const GitPos = useRef()
    const MailPos = useRef()
    const InstaPos = useRef()
    const ResumePos = useRef()
    const ItemBorder = useRef()
    const [post, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!onRender.current) {
            cardFlipBackRef.current.classList.add('z-[-1]');
            cardFlipRef.current.classList.remove('z-[-1]');
            onRender.current = true
            return;
        }

        console.log("it is")
        CardFlipFullAnim()

    }, [ClickState])

    function CardFlipFullAnim() {
        const front = cardFlipRef.current;
        const back = cardFlipBackRef.current;

        if (!ClickState) {
            console.log("cool");
            front.classList.add('floatflip');
            front.classList.remove('floatflipreverse');
            back.classList.remove('floatflip');
            back.classList.add('floatflipreverse');

            setTimeout(() => {
                front.classList.add('bk');
                front.classList.remove('nbk');
                back.classList.remove('bk');
                back.classList.add('nbk');
            }, 380);
        } else {
            console.log("cooler");
            back.classList.add('floatflip');
            back.classList.remove('floatflipreverse');
            front.classList.remove('floatflip');
            front.classList.add('floatflipreverse');

            setTimeout(() => {
                back.classList.add('bk');
                back.classList.remove('nbk');
                front.classList.remove('bk');
                front.classList.add('nbk');
            }, 380);
        }

        // SetClickState(!ClickState);
    }

    function AniStuff(AnyPos) {
        const pos = AnyPos.current.getBoundingClientRect();

        const distX = Math.abs((pos.left + (pos.width / 2)) - post.x)
        const distY = Math.abs((pos.top + (pos.height / 2)) - post.y)

        const item = AnyPos.current

        if (distY <= 40 && distX <= 33) {
            item.classList.remove('ExpandP2')
            item.classList.remove('ExpandP1')
            item.classList.add('ExpandP4')
        }
        else if (distY < 30 && distX <= 100) {
            item.classList.remove('ExpandP4')
            item.classList.remove('ExpandP1')
            item.classList.add('ExpandP2')
        }
        else {
            item.classList.remove('ExpandP2')
            item.classList.remove('ExpandP4')
            item.classList.add('ExpandP1')
        }
    }

    function ExpandBorder() {
        const item = ItemBorder.current;
        const pos = item.getBoundingClientRect();
        const Midy = (pos.left + (pos.width / 2))
        const Midx = (pos.top + (pos.height / 2))

    }

    useEffect(() => {
        AniStuff(LinkedPos)
        AniStuff(GitPos)
        AniStuff(MailPos)
        AniStuff(InstaPos)
        AniStuff(ResumePos)

        // console.log("Position is X : ", distX, "Y : ", distY)

    }, [post])





    useEffect(() => {
        const handleMouseMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    })





    return (
        <div className="lg:h-screen lg:flex lg:flex-col lg:justify-between">
            <div className="">
                <Header />
            </div>
            <div className="sm:flex sm:justify-center sm:font-secondary hidden sm:text-[64px] sm:ml-[-2px] lg:hidden">Hello&#44; I&#39;m Sriganesh P</div>
            <div  className=" flex flex-col sm:flex-row-reverse sm:gap-12 sm:justify-center sm:mb-5 lg:flex-row lg:gap-30 lg:px-9 ">
                <div className="flex relative justify-center">
                    <div className="flex w-42.5 sm:w-52 lg:w-85 relative justify-center mt-5">
                        <div onClick={() => SetClickState(!ClickState)} tabIndex="0" className="turnabit">
                            {/* <div  className="absolute h-full w-full bg-transparent z-12" tabIndex="0"></div> */}
                            <img ref={cardFlipRef} className={` h-42.5 w-42.5 sm:h-full sm:w-auto sm:relative rounded-full sm:rounded-xl drop-shadow-[0_0_24px_rgba(234,231,199,0.6)] outline-offset-2 object-cover object-top sm:object-cover `} tabIndex="0" src={MyPhoto1} alt="" />
                            {/* <img ref={cardFlipRef} className={`rounded-xl drop-shadow-[0_0_24px_rgba(234,231,199,0.6)] outline-offset-2 object-cover`} tabIndex="0" src={MyPhoto1} alt="" /> */}

                            <div ref={cardFlipBackRef} className={`absolute rounded-full sm:rounded-xl top-0 left-0 h-full w-full bg-black`}></div>
                        </div>


                        {/* //! */}
                        <div className="hidden lg:block">
                            <p className="  lg:rotate-[285deg] lg:font-handwritten1 lg:text-6xl lg:pb-4 lg:absolute lg:top-10 lg:left-[-11px] lg:z-[-1]">Click</p>
                            <img className=" lg:absolute lg:-rotate-2 lg:top-[-4px] lg:left-[13.7px] lg:w-12.5 lg:z-[-1]" src={Arrow1} alt="" />
                        </div>
                        <div className="hidden lg:block">
                            <p className=" lg:rotate-[105deg] lg:font-handwritten1 lg:text-6xl lg:pb-4 lg:absolute lg:bottom-10 lg:right-[-11px]  lg:z-[-1]">Click</p>
                            <img className=" lg:absolute lg:rotate-[182deg] lg:bottom-[-4px] lg:right-[13.7px] lg:w-12.5 lg:z-[-1]" src={Arrow1} alt="" />
                        </div>
                        {/* //! */}


                    </div>
                </div>
                
                <div className="max-[20.5rem]:mx-5 mt-5 mb-3 h-auto flex flex-col justify-between">
                    <div className="flex flex-col justify-center">
                        <div className="max-[20.5rem]:text-[28px] max-[20.5rem]:justify-normal flex justify-center font-secondary text-[32px] sm:hidden lg:flex lg:text-[49px] min-[72rem]:text-[62px] ">Hello&#44; I&#39;m Sriganesh P</div>
                        <div className="max-[20.5rem]:ml-0 max-[20.5rem]:justify-normal flex justify-center ml-[-46px] lg:justify-normal lg:ml-0">
                            <div className="max-[20.5rem]:text-[28px] max-[20.5rem]:justify-normal  font-tretiary font-extralight text-[30px] sm:text-[37px] lg:text-[38px] min-[72rem]:text-[42px] ">Unity & <br className="" /> React Developer</div>
                        </div>
                        <br />
                        <div className="max-[20.5rem]:ml-0 max-[20.5rem]:justify-normal flex gap-2 justify-center text-left ml-[-39px] sm:ml-[-99px] lg:justify-normal lg:ml-0 ">
                            <div className="font-tretiary font-thin text-[16px]">Based in Tamil Nadu&#44; India </div>
                            <a className="" href="https://maps.app.goo.gl/DR8QozvhKgo4gNsp8" target="_blank" ><img className="-translate-y-[5px] h-6 tapping" src={Location} alt="" /></a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-8 sm:ml-[-40px] lg:justify-normal lg:items-start lg:ml-0">
                        <div ref={ItemBorder} className="py-1 px-1.5 flex flex-row justify-between align-middle gap-3 outline-3 rounded-full w-fit mb-3 sm:mb-0">
                            <a href="https://www.linkedin.com/in/sriganesh-prakash-725a50279/" target="_blank" ><img ref={LinkedPos} className="SocialIcons w-13 lg:min-w-15 lg:w-auto" src={LinkedInIcon} alt="" /></a>
                            <a href="https://github.com/SriGanesh01"><img ref={GitPos} className="SocialIcons w-13 lg:min-w-15 lg:w-auto " src={GitHub} alt="" target="_blank" /></a>
                            <a href="https://mail.google.com/mail/?view=cm&to=psriganesh2005@gmail.com"><img ref={MailPos} className="SocialIcons w-13 lg:min-w-15 lg:w-auto" src={Mail} alt="" target="_blank" /></a>
                            <a href="https://www.instagram.com/_sriganesh___/"><img ref={InstaPos} className="SocialIcons w-13 lg:min-w-15 lg:w-auto" src={Instagram} alt="" target="_blank" /></a>
                            <a href="/CV_SRIGANESH_P_v5.pdf" target="_blank" download ><img ref={ResumePos} className="SocialIcons w-13 lg:min-w-15 lg:w-auto" src={Resume} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default HeroHome;




{/* <svg className='heart1' width="162" height="155" viewBox="0 0 162 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M162 154.932V53.4981C162 24.0706 138.144 0.214844 108.717 0.214844C79.2893 0.214844 53.5875 20.5852 53.5875 50.0127C24.16 50.0127 0.304321 72.2208 0.304321 101.648C0.304321 131.076 24.16 154.932 53.5875 154.932H162Z" fill="" />
            </svg> */}
