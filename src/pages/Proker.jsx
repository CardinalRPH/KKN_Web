import { useEffect } from "react"
import Slider from "../components/Slider"
import prokerEffect from "../utilities/effect/prokerEffect"
import { useOutletContext } from "react-router-dom"
const Proker = () => {
    const { data, storageImg } = useOutletContext()
    useEffect(() => {
        const slide = document.querySelectorAll(".slide")
        prokerEffect(slide)
        document.title = "Proker"
    },[])
    return (
        <div className=" min-h-screen py-16">
            <Slider data={data?.proker} dataImg={storageImg?.proker} />
        </div>
    )

}

export default Proker