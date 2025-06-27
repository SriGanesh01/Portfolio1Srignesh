import Menu from "./AnimatedIcons/Menu";

function Header() {
    return (
        <>
            <div>
                <div className="flex flex-row items-center justify-between py-2 px-2">
                    <p className="font-primary text-xl">Sriganesh P.</p>
                    <Menu />
                </div>
                <hr />
            </div>
        </>
    );
}

export default Header;