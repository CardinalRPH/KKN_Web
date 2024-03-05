
import { useEffect, useRef, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import rootEffect from "../utilities/effect/rootEffect"
import Navbar from "../components/Navbar"
import { Outlet, useLocation } from "react-router-dom"
import { ScrollTrigger } from "gsap/all"
import loadAllImage from "../utilities/loadAllImage"
import data from "../data/mainData.json"

const RootLayout = () => {
    const socialIcoRef = useRef(null)
    const logoRef = useRef(null)
    const footerRef = useRef(null)
    const [navState, setNavState] = useState(false)
    const location = useLocation()

    //storage
    const [storageImg, setStorageImg] = useState(null)

    useEffect(() => {
        ScrollTrigger.refresh()
    }, [location.pathname])

    useEffect(() => {
        //this is get img from firebase
        loadAllImage(setStorageImg)
        rootEffect(socialIcoRef.current, logoRef.current, footerRef.current)
    }, [])
    return (
        <div className=" bg-gray-50">
            <Navbar navState={navState} setNavState={setNavState} />
            <Header socialIcoRef={socialIcoRef} logoRef={logoRef} navState={navState} setNavState={setNavState} />
            <Outlet context={{ navState, setNavState, storageImg, data }} />
            <Footer footerRef={footerRef} />
        </div>
    )
}

export default RootLayout

