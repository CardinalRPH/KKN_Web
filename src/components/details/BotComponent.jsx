/* eslint-disable react/prop-types */

const BotComponent = ({ botContainerRef, imgData }) => {
    return (
        <div ref={botContainerRef} className="w-full py-8 aspect-16/9 md:aspect-16/7">
            <div id="botImgRef" className={`h-full w-full bg-cover ${!imgData && 'animate-pulse bg-slate-500  flex justify-center items-center'} bg-center bg-no-repeat"`} style={{ backgroundImage: `url(${imgData ? imgData?.img[2] : ''})` }} >
                <div id="backdropRef" className="w-full h-full"></div>
            </div>
        </div>
    )
}

export default BotComponent