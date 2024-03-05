import { faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/* eslint-disable react/prop-types */
const Mid2Component = ({ imgData, data }) => {
    return (
        <div className="flex justify-center flex-col md:flex-row  p-8 font-roboto">
            <div className=" basis-2/5">
                {imgData ? (
                    <img src={imgData?.img[1]} className=" aspect-9/13 w-full origin-left object-cover scale-75 md:scale-100" alt="" />
                ) : (
                    <div className=" text-softCream flex justify-center items-center aspect-9/13 w-full origin-left scale-75 md:scale-100 bg-slate-500 animate-pulse">
                        <FontAwesomeIcon size="2xl" icon={faImage} />
                    </div>
                )}
            </div>
            <div className="basis-3/5 py-4 md:px-10 text-softBlack2">
                <h3 className=" font-medium text-3xl">Manfaat</h3>
                {data?.desc2.map((item, index) => (
                    <p className="py-1" key={index}>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Mid2Component