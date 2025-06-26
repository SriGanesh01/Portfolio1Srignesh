import { useState } from "react";

function Menu() {

    const [MenuState, SetMenuState] = useState(false)

    return (
        <>
            <div className="flex flex-row gap-1 ">
                <div className="flex flex-col gap-[6px]">
                    <div className="w-[40px] h-[6px] rounded-4xl bg-[#EAE7C7]"></div>
                    <div className="w-[30px] h-[6px] rounded-4xl bg-[#EAE7C7]"></div>
                    <div className="w-[40px] h-[6px] rounded-4xl bg-[#EAE7C7]"></div>
                </div>
                <div className="flex flex-col space-y-[-9px] pr-2">
                    <div className="h-[20px] w-[6px] rotate-z-45 rounded-4xl bg-[#EAE7C7]"></div>
                    <div className="h-[20px] w-[6px] -rotate-z-45 rounded-4xl bg-[#EAE7C7]"></div>
                </div>
            </div>
        </>
    );
}
export default Menu