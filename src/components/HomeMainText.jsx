/* eslint-disable react/prop-types */
const HomeMainText = ({ mainTextRef, secondTextRef }) => {
    return (
        <div className="fixed bottom-1/3 w-screen z-1 flex flex-col z-10 justify-center mix-blend-difference">
            <h1 className="text-center cursor-pointer font-roboto md:text-8xl textStroke  sm:text-6xl text-6xl font-semibold text-black "ref={mainTextRef}></h1>
            <h2 className="text-center font-roboto md:text-4xl textStroke  sm:text-2xl text-2xl font-medium text-black" ref={secondTextRef}></h2>
        </div>
    )
}

export default HomeMainText