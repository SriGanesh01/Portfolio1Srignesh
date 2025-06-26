import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";



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
                front.classList.add('z-[-1]');
                back.classList.remove('z-[-1]');
            }, 380);
        } else {
            console.log("cooler");
            back.classList.add('floatflip');
            back.classList.remove('floatflipreverse');
            front.classList.remove('floatflip');
            front.classList.add('floatflipreverse');

            setTimeout(() => {
                back.classList.add('z-[-1]');
                front.classList.remove('z-[-1]');
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
        <div className="h-screen flex flex-col">
            <div className="">
                <Header />
            </div>
            <div  className="flex-1 flex gap-30 items-center justify-center">
                <div className="relative">
                    <div className="w-85 relative">
                        <div onClick={() => SetClickState(!ClickState)} tabIndex="0" className="turnabit">
                            {/* <div  className="absolute h-full w-full bg-transparent z-12" tabIndex="0"></div> */}
                            <img ref={cardFlipRef} className={`rounded-xl drop-shadow-[0_0_24px_rgba(234,231,199,0.6)] outline-offset-2 object-cover`} tabIndex="0" src="../assets/MyPhoto.jpg" alt="" />
                            <div ref={cardFlipBackRef} className={`absolute top-0 left-0 h-full w-full bg-black rounded-xl`}></div>
                        </div>
                        <div className="">
                            <p className="rotate-[285deg] font-handwritten1 text-6xl pb-4 absolute top-10 left-[-11px] z-[-1]">Click</p>
                            <img className="absolute -rotate-2 top-[-4px] left-[13.7px] w-12.5 z-[-1]" src="../assets/Home/arrow1.png" alt="" />
                        </div>
                        <div className="">
                            <p className="rotate-[105deg] font-handwritten1 text-6xl pb-4 absolute bottom-10 right-[-11px]  z-[-1]">Click</p>
                            <img className="absolute rotate-[182deg] bottom-[-4px] right-[13.7px] w-12.5 z-[-1]" src="../assets/Home/arrow1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="h-[540px] flex flex-col justify-between">
                    <div className="flex flex-col">
                        <div className="font-secondary text-[62px]">Hello&#44; I&#39;m Sriganesh P</div>
                        <div className="font-tretiary font-extralight text-[42px]">Unity & <br /> React Developer</div>
                        <br />
                        <div className="font-tretiary font-thin text-[16px]">Based in Tamil Nadu&#44; India</div>
                    </div>
                    <div className="flex flex-col">
                        <div ref={ItemBorder} className="px-1 py-1 flex flex-row justify-between align-middle gap-3 outline-3 rounded-full w-fit mb-3 ml-4">
                            <a href="https://www.linkedin.com/in/sriganesh-prakash-725a50279/"><img ref={LinkedPos} className="SocialIcons min-w-15" src="../assets/Home/Icons/LinkedIn.svg" alt="" /></a>
                            <a href="https://github.com/SriGanesh01"><img ref={GitPos} className="SocialIcons min-w-15" src="../src/assets/Home/Icons/GitHub.svg" alt="" /></a>
                            <a href="https://mail.google.com/mail/?view=cm&to=psriganesh2005@gmail.com"><img ref={MailPos} className="SocialIcons min-w-15" src="../assets/Home/Icons/Mail.svg" alt="" /></a>
                            <a href="https://www.instagram.com/_sriganesh___/"><img ref={InstaPos} className="SocialIcons min-w-15" src="../assets/Home/Icons/Instagram.svg" alt="" /></a>
                            <a href="public/CV_SRIGANESH_P_v5.pdf"><img ref={ResumePos} className="SocialIcons min-w-15" src="../assets/Home/Icons/CV.svg" alt="" /></a>
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
