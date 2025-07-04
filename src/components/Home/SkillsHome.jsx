import EachSkill from "./EachSkill";

function SkillsHome() {
    return (
        <>
            <div className="flex justify-center items-center h-screen my-14">
                <div className="grid grid-rows-5 grid-cols-6 gap-4">
                    <div className="min-w-41.5 min-h-[124.5px] row-span-2 col-span-4"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px]"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px]"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px]"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px] row-span-2"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px]"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px] row-span-2 col-span-2"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px] row-span-2 col-span-2"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px]"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px]"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px]"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px]"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px] col-span-3"><EachSkill /></div>
                    <div className="min-w-41.5 min-h-[124.5px]"><EachSkill /></div>
                </div>
            </div>
            <hr />
        </>
    );
}
export default SkillsHome