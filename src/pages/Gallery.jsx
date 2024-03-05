import { useEffect, useState } from "react"
import GridderComponent from "../components/GridderComponent"
import galleryEffect from "../utilities/effect/galleryEffect"
import GModal from "../components/GModal"
import { useOutletContext } from "react-router-dom"

const Gallery = () => {
    const [modalState, setModalState] = useState(false)
    const [currentImage, setCurrentImage] = useState(null)
    const { storageImg } = useOutletContext()
    const photoClicked = (imgUri) => {
        setModalState(true)
        setCurrentImage(imgUri)
    }

    useEffect(() => {
        galleryEffect()
        document.title = "Gallery"
    }, [])
    return (
        <>
            <div className="pt-24 flex flex-col items-center  bg-gray-50">
                <h1 className=" text-6xl font-roboto font-semibold text-softBlack2">GALLERY</h1>
                <GridderComponent imgOnclick={photoClicked} imgObject={storageImg} />
            </div>
            <GModal open={modalState} onClose={() => { setModalState(false) }} >
                <img className="object-cover h-90vh" src={currentImage} />
            </GModal>
        </>
    )
}

export default Gallery