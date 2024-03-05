import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        document.title= "404 Not Found"
    }, [])
    return (
        <div className="h-screen w-full flex justify-between items-center px-5 bg-softCream text-softBlack1">
            <div className="lg:flex justify-center w-1/2 hidden">
                <h1 className=" text-9xl">X</h1>
            </div>
            <div className="">
                <h1 className=" text-7xl md:text-8xl font-medium font-roboto animate-pulse">404</h1>
                <h1 className=" text-7xl md:text-8xl font-medium font-roboto">PAGE NOT</h1>
                <h2 className=" text-7xl md:text-8xl font-medium font-roboto">FOUND</h2>
                <div onClick={()=> {navigate("/")}} className="flex items-center my-6">
                    <FontAwesomeIcon size="2xl" className="px-2" icon={faChevronLeft} />
                    <h3 className=" px-2 text-4xl">Back to Home Page</h3>
                </div>
            </div>

        </div>
    )
}

export default NotFound