/* eslint-disable react/prop-types */
const NavbarButton = ({ navState, setNavState }) => {
    return (
        <button className=" fixed group" onClick={() => { setNavState(!navState) }}>
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all">
                <div className="flex flex-col justify-between w-[40px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div className={`bg-softBlack2 h-[3px] w-7 transform transition-all duration-300 origin-left ${navState && 'translate-x-10'}`} />
                    <div className={`bg-softBlack2 h-[3px] w-7 rounded transform transition-all duration-300 ${navState && 'translate-x-10'} delay-75`} />
                    <div className={`bg-softBlack2 h-[3px] w-7 transform transition-all duration-300 origin-left ${navState && 'translate-x-10 '} delay-150`} />
                    <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${navState && 'translate-x-0 w-12'} flex w-0`}>
                        <div className={`absolute bg-softBlack2 h-[3px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${navState && 'rotate-45'} `} />
                        <div className={`absolute bg-softBlack2 h-[3px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${navState && '-rotate-45'}`} />
                    </div>
                </div>
            </div>
        </button>
    )
}

export default NavbarButton