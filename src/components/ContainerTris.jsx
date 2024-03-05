import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
const ContainerTris = ({ link, navigate, img }) => {
    const handleClick = () => {
        navigate(link);
    }
    return (
        <div className="m-5 flex container-tris">
            <div className=" basis-1/3 min-h-screen hidden md:flex sm:hidden justify-center items-center">
                {img ? (
                    <img className=" shadow-xl object-cover aspect-11/16 h-80" id="leftSideTris" src={img?.img[1]} alt="" />
                ) : (
                    <div className="aspect-11/16 h-80 animate-pulse flex justify-center items-center bg-slate-500 text-softCream" id="leftSideTris" >
                        <FontAwesomeIcon size="2xl" className="" icon={faImage} />
                    </div>
                )}

            </div>
            <div className=" md:basis-1/3 min-h-screen flex justify-center items-center">
                {img ? (
                   <img onClick={handleClick} className=" aspect-9/16 object-cover h-full" id="centerSideTris" src={img?.img[0]} alt="" />
                ) : (
                    <div className=" aspect-9/16 h-full animate-pulse flex justify-center items-center bg-slate-500 text-softCream" id="centerSideTris">
                        <FontAwesomeIcon size="2xl" className="" icon={faImage} />
                    </div>
                )}
            </div>
            <div className=" basis-1/3 min-h-screen hidden md:flex sm:hidden justify-center items-end">
                {img ? (
                    <img className=" shadow-xl object-cover aspect-11/16 h-80" id="rightSideTris" src={img?.img[2]} alt="" />
                ) : (
                    <div className="aspect-11/16 h-80 animate-pulse flex justify-center items-center bg-slate-500 text-softCream" id="rightSideTris">
                        <FontAwesomeIcon size="2xl" className="" icon={faImage} />
                    </div>
                )}

            </div>
        </div>
    )
}

export default ContainerTris