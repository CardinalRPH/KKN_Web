import { useNavigate } from "react-router-dom";
import wordSplit from "../utilities/wordSplit";

/* eslint-disable react/prop-types */
const Slider = ({ dataImg, data }) => {
    const navigate = useNavigate()
    return (
        <div className="flex w-full h-screen  items-center justify-center">
            <div className="flex flex-col md:flex-row w-5/6 h-5/6">
                {data.map((item, index) => {
                    const imgUri = dataImg?.find(img => img.id === item.id)
                    return (
                        <div key={index} className={`slide relative flex justify-center items-center flex-auto bg-cover bg-center transition-all duration-75 ease-in-out bg-slate-500 ${!imgUri && 'animate-pulse'}`} style={{ backgroundImage: `url(${imgUri?.img[0]})` }} >
                            <div id="textSlide" className=" opacity-0 transition-all backdrop-brightness-50 w-full left-0 right-0 m-0 h-full ease-in absolute">
                                <div className="flex justify-center items-center h-full">
                                    <h1 onClick={()=>{navigate(item.linkTo)}} className="text-center cursor-pointer font-roboto text-5xl font-medium text-softCream">{wordSplit(item.title)}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Slider