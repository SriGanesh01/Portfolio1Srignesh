import Menu from "./AnimatedIcons/Menu";

function Header() {
    return (
        <>
            <div>
                <div className="flex flex-row items-center justify-between py-2 px-2 sm:px-5 md:px-7 lg:px-9">
                    <p className="font-primary text-xl sm:text-4xl">Sriganesh P.</p>
                    <Menu />
                </div>
                <hr />
            </div>
        </>
    );
}

export default Header;