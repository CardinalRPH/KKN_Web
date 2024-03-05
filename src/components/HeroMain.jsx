/* eslint-disable react/prop-types */
const HeroMain = ({ heroContainerRef }) => {
    return (
        <div className={` min-h-screen bg-cover bg-center`} ref={heroContainerRef}>
            <div className="w-full min-h-screen backdrop-blur-sm backdrop-brightness-75"></div>
        </div>
    )
}

export default HeroMain