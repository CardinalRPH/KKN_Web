/* eslint-disable react/prop-types */

import { faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TopComponent = ({ containerRef, data, imgData }) => {
    return (
        <div className="" ref={containerRef}>
            <div className="text-center absolute w-full z-10 mix-blend-difference" id="textRef">
                <h1 className="font-roboto font-medium sm:text-6xl text-6xl md:text-8xl text-white">{data?.title.toUpperCase()}</h1>
                <h4 className=" text-3xl text-white">{data?.type.toUpperCase()}</h4>
            </div>
            <div className="flex flex-col items-center mx-4 py-24">
                {imgData ? (
                    <img className="h-full aspect-9/13 w-full md:w-1/2 origin-top object-cover" src={imgData?.img[0]} alt="" id="imgRef" />
                ) : (
                    <div className="bg-slate-500 flex text-white justify-center items-center animate-pulse h-full aspect-9/13 w-full md:w-1/2 origin-top" id="imgRef">
                        <FontAwesomeIcon size="2xl" icon={faImage} />
                    </div>
                )}


            </div>
        </div>

    )
}

export default TopComponent