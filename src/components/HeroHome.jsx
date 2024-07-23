import undraw_code_typing from '../assets/undraw_code_typing.svg';

function HeroHome() {
    return (
        <div className="flex flex-col items-center text-white h-auto ">
            <div className="flex flex-col items-start w-full w-md px-5 mt-8 mb-6">
                <p className="font-rubik font-bold text-[190px] bg-transparent">SRIGANESH.P</p>
                <p className="text-[60px] font-normal font-podkova mt-[-85px] bg-transparent">Developer</p>
            </div>
            <div className='flex pt-7 mt-[35px]'>
                <div className="flex justify-start w-full w-md px-5 mt-[-12px] bg-transparent mb-[-20px] pt-11">
                    <img src={undraw_code_typing} alt="Coding Icon" className="w-[250px] h-auto pb-[160px]" />
                </div>
                <div className="bg-[#102939] p-4 rounded-3xl border-2 border-[#959366] text-white w-md mx-5 my-12 shadow-lg mb-36">
                    <div className="bg-[#102939] text-[40px] font-normal font-podkova">
                        I am a passionate developer specializing in creating user-friendly applications, with a strong background in Front-End Web Development and Game Development.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroHome;
