import PageLine1 from '../assets/PageLine1.svg';
import SkillEach from './SkillEach';

import cpp from '../assets/c-.png';
import csharp from '../assets/c-sharp.png';
import css from '../assets/css-3.png';
import figma from '../assets/figma.png';
import git from '../assets/git_4494740.png';
import html from '../assets/html.png';
import c from '../assets/letter-c.png';
import python from '../assets/python.png';
import react from '../assets/science (1).png';
import tailwind from '../assets/tailwind-css.svg';
import unity from '../assets/unity.png';

function SkillsHome() {
    return (
        <div>
            <div className='flex flex-wrap gap-7 justify-self-center px-7'>
                <SkillEach icn1={python} name="Python" skillLevel = "Excellent" />
                <SkillEach icn1={c} name="C" skillLevel = "Good"/>
                <SkillEach icn1={cpp} name="C++" skillLevel = "Good"/>
                <SkillEach icn1={csharp} name="C#" skillLevel = "Good"/>
                <SkillEach icn1={html} name="HTML" skillLevel = "Excellent"/>
                <SkillEach icn1={css} name="CSS" skillLevel = "Good" />
                <SkillEach icn1={react} name="React" skillLevel = "Good"/>
                <SkillEach icn1={tailwind} name="Tailwind CSS" skillLevel = "Average" />
                <SkillEach icn1={figma} name="Figma" skillLevel = "Very Good" />
                <SkillEach icn1={unity} name="Unity" skillLevel = "Very Good"/>
                <SkillEach icn1={git} name="Git" skillLevel = "Good"/>
            </div>
            <img src={PageLine1} alt="Page separator" className='pt-10 pb-2 w-full h-auto' />
        </div>
    );
}

export default SkillsHome;
