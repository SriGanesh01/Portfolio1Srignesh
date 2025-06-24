import undraw_code_typing from '../assets/undraw_code_typing.svg';
import NameTitle from '../assets/NameTitle.svg';

function HeroHome() {
    return (
        <div className="flex flex-col items-center text-white h-auto ">
            <img src={NameTitle} alt="SRIGANESH.P Developer" className='w-full h-auto'/>
            <div className='flex pt-7 mt-[-45px] bg-transparent'>
                <div className="flex justify-start w-full w-md px-5 mt-[-12px] bg-transparent mb-[-20px] pt-11">
                    <img src={undraw_code_typing} alt="Coding Icon" className="w-[250px] h-auto pb-[160px]" />
                </div>
                <div className="bg-[#102939] p-4 rounded-3xl border-2 border-[#959366] text-white w-md mx-5 my-12 shadow-lg mb-36">
                    <div className="bg-[#102939] text-[15px] sm:text-[25px] lg:text-[40px] font-normal font-podkova">
                        Unity & React Developer
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroHome;
