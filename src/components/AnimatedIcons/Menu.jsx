import { useState } from "react";

function Menu() {

    const [MenuState, SetMenuState] = useState(false)

    return (
        <>
            <div className="flex flex-row gap-1 ">
                <div className="flex flex-col gap-[6px]">
                    <div className="w-[30px] h-[2px] rounded-4xl bg-[#EAE7C7]"></div>
                    <div className="w-[20px] h-[2px] rounded-4xl bg-[#EAE7C7]"></div>
                    <div className="w-[30px] h-[2px] rounded-4xl bg-[#EAE7C7]"></div>
                </div>
                <div className="flex flex-col space-y-[-4px] pr-2 -translate-y-1">
                    <div className="h-[14px] w-[2px] rotate-z-45 rounded-4xl bg-[#EAE7C7]"></div>
                    <div className="h-[14px] w-[2px] -rotate-z-45 rounded-4xl bg-[#EAE7C7]"></div>
                </div>
            </div>
        </>
    );
}
export default Menu