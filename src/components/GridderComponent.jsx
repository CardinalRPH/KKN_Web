/* eslint-disable react/prop-types */

import { faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

// eslint-disable-next-line react/prop-types
const renderLoading = () => {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto px-4 py-16 relative">
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex flex-1 flex-col gap-2">
                        <div className="flex flex-1 flex-col">
                            {/* img_01 */}
                            <div className="object-cover h-full photo-card min-h-96 min-w-52 xl:min-w-72 animate-pulse  text-softCream bg-slate-500 flex justify-center items-center">
                                <FontAwesomeIcon size="2xl" icon={faImage} />
                            </div>
                        </div>
                        <div className="hidden md:flex flex-1 flex-row gap-2">
                            <div className="flex flex-1 flex-col">
                                {/* img_02 */}
                                <div className="object-cover h-full photo-card min-h-96 min-w-52 xl:min-w-72  animate-pulse  text-softCream  bg-slate-500 flex justify-center items-center">
                                    <FontAwesomeIcon size="2xl" icon={faImage} />
                                </div>
                            </div>
                            <div className="hidden md:flex flex-1 flex-col">
                                {/* img_03 */}
                                <div className="object-cover h-full photo-card min-h-96 min-w-52 xl:min-w-72  animate-pulse  text-softCream bg-slate-500 flex justify-center items-center">
                                    <FontAwesomeIcon size="2xl" icon={faImage} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                        <div className="hidden md:flex flex-1 flex-row gap-2">
                            <div className="flex flex-1 flex-col">
                                {/* img_04 */}
                                <div className="object-cover h-full photo-card min-h-96 min-w-52 xl:min-w-72  animate-pulse  text-softCream bg-slate-500 flex justify-center items-center">
                                    <FontAwesomeIcon size="2xl" icon={faImage} />
                                </div>

                            </div>
                            <div className="hidden md:flex flex-1 flex-col">
                                {/* img_05 */}
                                <div className="object-cover h-full photo-card min-h-96 min-w-52 xl:min-w-72  animate-pulse  text-softCream bg-slate-500 flex justify-center items-center">
                                    <FontAwesomeIcon size="2xl" icon={faImage} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            {/* img_06 */}
                            <div className="object-cover h-full photo-card min-h-96 min-w-52 xl:min-w-72  animate-pulse  text-softCream bg-slate-500 flex justify-center items-center">
                                <FontAwesomeIcon size="2xl" icon={faImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section_2 */}
            <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative">
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex flex-1 flex-col">
                        <div className="flex flex-1 flex-col">
                            {/* img_01 */}
                            <div className="object-cover h-full photo-card min-h-96 min-w-52 xl:min-w-72  animate-pulse  text-softCream bg-slate-500 flex justify-center items-center">
                                <FontAwesomeIcon size="2xl" icon={faImage} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1">
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                {/* img_02 */}
                                <div className="object-cover h-full photo-card min-h-96 min-w-52 xl:min-w-72  animate-pulse  text-softCream bg-slate-500 flex justify-center items-center">
                                    <FontAwesomeIcon size="2xl" icon={faImage} />
                                </div>
                            </div>
                            <div>
                                {/* img_03 */}
                                <div className="object-cover h-full photo-card min-h-96 min-w-52 xl:min-w-72  animate-pulse  text-softCream bg-slate-500 flex justify-center items-center">
                                    <FontAwesomeIcon size="2xl" icon={faImage} />
                                </div>
                            </div>
                            <div>
                                {/* img_04 */}
                                <div className="object-cover h-full photo-card min-h-96 min-w-52 xl:min-w-72  animate-pulse  text-softCream bg-slate-500 flex justify-center items-center">
                                    <FontAwesomeIcon size="2xl" icon={faImage} />
                                </div>
                            </div>
                            <div>
                                {/* img_05 */}
                                <div className="object-cover h-full photo-card min-h-96 min-w-52 xl:min-w-72  animate-pulse  text-softCream bg-slate-500 flex justify-center items-center">
                                    <FontAwesomeIcon size="2xl" icon={faImage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
const GridderComponent = ({ imgOnclick, imgObject }) => {

    const renderGrid = () => {
        const imgData = imgObject.allImg
        const grids = []
        for (let i = 0; i < imgData.length; i += 11) {
            grids.push(
                <React.Fragment key={i}>
                    <div className="max-w-screen-2xl mx-auto px-4 py-16 relative">
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex flex-1 flex-col gap-2">
                                <div className="flex flex-1 flex-col">
                                    {/* img_01 */}
                                    <img onClick={() => imgOnclick(imgData[i])} className="object-cover h-full photo-card min-h-96" src={imgData[i]} />
                                </div>
                                <div className="hidden md:flex flex-1 flex-row gap-2">
                                    <div className="flex flex-1 flex-col">
                                        {/* img_02 */}
                                        <img onClick={() => imgOnclick(imgData[i + 1])} className="object-cover h-full photo-card min-h-96" src={imgData[i + 1]} />
                                    </div>
                                    <div className="hidden md:flex flex-1 flex-col">
                                        {/* img_03 */}
                                        <img onClick={() => imgOnclick(imgData[i + 2])} className="object-cover h-full photo-card min-h-96" src={imgData[i + 2]} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col gap-2">
                                <div className="hidden md:flex flex-1 flex-row gap-2">
                                    <div className="flex flex-1 flex-col">
                                        {/* img_04 */}
                                        <img onClick={() => imgOnclick(imgData[i + 3])} className="object-cover h-full photo-card min-h-96" src={imgData[i + 3]} />
                                    </div>
                                    <div className="hidden md:flex flex-1 flex-col">
                                        {/* img_05 */}
                                        <img onClick={() => imgOnclick(imgData[i + 4])} className="object-cover h-full photo-card min-h-96" src={imgData[i + 4]} />
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col">
                                    {/* img_06 */}
                                    <img onClick={() => imgOnclick(imgData[i + 5])} className="object-cover h-full photo-card min-h-96" src={imgData[i + 5]} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* section_2 */}
                    <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative">
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex flex-1 flex-col">
                                <div className="flex flex-1 flex-col">
                                    {/* img_01 */}
                                    <img onClick={() => imgOnclick(imgData[i + 6])} className="object-cover h-full photo-card min-h-96" src={imgData[i + 6]} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        {/* img_02 */}
                                        <img onClick={() => imgOnclick(imgData[i + 7])} className="object-cover h-full photo-card min-h-96" src={imgData[i + 7]} alt="" />
                                    </div>
                                    <div>
                                        {/* img_03 */}
                                        <img onClick={() => imgOnclick(imgData[i + 8])} className="object-cover h-full photo-card min-h-96" src={imgData[i + 8]} alt="" />
                                    </div>
                                    <div>
                                        {/* img_04 */}
                                        <img onClick={() => imgOnclick(imgData[i + 9])} className="object-cover h-full photo-card min-h-96" src={imgData[i + 9]} alt="" />
                                    </div>
                                    <div>
                                        {/* img_05 */}
                                        <img onClick={() => imgOnclick(imgData[i + 10])} className="object-cover h-full photo-card min-h-96" src={imgData[i + 10]} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        return grids
    }
    return (
        <div className="">
            {imgObject ? renderGrid() : renderLoading()}
        </div>

    )
}
export default GridderComponent