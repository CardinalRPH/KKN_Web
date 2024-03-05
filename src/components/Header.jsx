import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavbarButton from "./NavbarButton"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import logo from "../assets/logo/logo.png"
import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const Header = ({ socialIcoRef, logoRef, navState, setNavState }) => {
    const navigate = useNavigate()

    const handleHomeClick = () => {
        navigate("/")
        setNavState(false)
    }

    return (
        <div className="flex w-full h-16 mt-5 fixed z-20">
            <div className=" mx-5 w-40 flex items-center justify-center">
                <div ref={socialIcoRef} className="w-full  h-full flex items-center justify-center">
                    <a href="https://www.instagram.com/kkn17langensari/" className="flex justify-center items-center" >
                        <h1 className="m-1 hidden md:block font-roboto font-semibold text-softBlack2">Find More</h1>
                        <div className="m-1 h-10 w-10 rounded-full border-2 flex items-center justify-center border-softBlack2 uppercase leading-normal text-softBlack2 transition duration-150 ease-in-out hover:bg-softBlack2 hover:bg-opacity-5 focus:outline-none focus:ring-0">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex justify-center grow">
                <div onClick={handleHomeClick} className="w-40 cursor-pointer h-full delay-75 flex justify-center items-center" ref={logoRef}>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className=" mx-5 w-40 flex justify-center items-center">
                <NavbarButton navState={navState} setNavState={setNavState} />
            </div>
        </div>
    )
}

export default Header