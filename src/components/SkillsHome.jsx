import SkillLine from '../assets/SkillLine.svg';
import icons8reactjs from '../assets/icons8-react-js.svg';
import icons8tailwindcss from '../assets/icons8-tailwind-css.svg';
import icons8html from '../assets/icons8-html.svg';
import icons8css from '../assets/icons8-css.svg';
import U_Cube_1C_White from '../assets/U_Cube_1C_White 3.svg';
import LanguageGroup1 from '../assets/LanguageGroup1.svg';
import SkillsGroup1 from '../assets/SkillsGroup1.svg';
import PageLine1 from '../assets/PageLine1.svg';

function SkillsHome() {
    return (
        <>
            <div className='flex flex-col space-y-6 mt-[-70px] w-full h-auto bg-transparent'>
                <img src={LanguageGroup1} alt="" className='w-full h-auto' />
                <img src={SkillsGroup1} alt="" className='w-full h-auto' />
            </div>
            <img src={PageLine1} alt="" className='pt-10 pb-2 w-full h-auto' />
        </>
    );
}

export default SkillsHome;
