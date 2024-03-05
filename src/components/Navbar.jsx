import { useEffect, useRef } from "react"
import navbarEffect from "../utilities/effect/navbarEffect"
import { useNavigate } from "react-router-dom"

import galleryImg from "../assets/navbar/gallery.jpg"
import prokerImg from "../assets/navbar/proker.jpg"
import teamImg from "../assets/navbar/team.jpg"


/* eslint-disable react/prop-types */
const Navbar = ({ navState, setNavState }) => {
    const navRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        const navText = document.querySelectorAll('.navText')
        navbarEffect(navState, navRef.current, navText)
    }, [navState])

    const handleProkerClick = () => {
        navigate("/proker")
        setNavState(false)
    }

    const handleTeamClick = () => {
        navigate("/team")
        setNavState(false)

    }

    const handleGalleryClick = () => {
        navigate("/gallery")
        setNavState(false)

    }

    return (
        <div className=" min-h-screen fixed min-w-full top-0 z-20 -translate-y-full flex justify-center bg-softCream" ref={navRef}>
            <div className=" mt-20 flex flex-col w-1/2 justify-center items-center">
                <div onClick={handleProkerClick} className="flex cursor-pointer justify-around group my-5 hover:opacity-100 text-softGray1 hover:text-softBlack2">
                    <img className=" opacity-0 object-cover aspect-16/9 w-1/4 group-hover:md:opacity-100 transition-all" src={prokerImg} alt="" />
                    <h1 className=" font-roboto text-6xl font-medium navText">PROKER</h1>
                </div>
                <div onClick={handleTeamClick} className="flex cursor-pointer justify-around group my-5 hover:opacity-100 text-softGray1 hover:text-softBlack2">
                    <h1 className=" font-roboto text-6xl font-medium navText">TEAM</h1>
                    <img className=" opacity-0 object-cover aspect-16/9 w-1/4 group-hover:md:opacity-100 transition-all" src={teamImg} alt="" />
                </div>
                <div onClick={handleGalleryClick} className="flex cursor-pointer justify-around group my-5 hover:opacity-100 text-softGray1 hover:text-softBlack2">
                    <img className=" opacity-0 object-cover aspect-16/9 w-1/4 group-hover:md:opacity-100 transition-all" src={galleryImg} alt="" />
                    <h1 className=" font-roboto text-6xl font-medium navText ">GALLERY</h1>
                </div>
            </div>
        </div>
    )
}
export default Navbar