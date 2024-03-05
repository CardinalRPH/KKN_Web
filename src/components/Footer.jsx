/* eslint-disable react/prop-types */
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = ({footerRef}) => {
    return (
        <footer className="flex flex-col items-center bg-neutral-900 text-center text-white" ref={footerRef}>
            <div className="container px-6 pt-6">
                <div className="mb-6">
                    <a href="https://www.instagram.com/kkn17langensari/" className="flex justify-center items-center" >
                        <h1 className="m-1 font-semibold font-roboto">Find More</h1>
                        <div className="m-1 h-10 w-10 rounded-full border-2 flex items-center justify-center border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </div>
                    </a>

                </div>
            </div>
            {/*Copyright section*/}
            <div className="w-full p-4 text-center font-roboto" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright:
                <a className="text-whitehite" href="https://github.com/CardinalRPH">CardinalRPH</a>
            </div>
        </footer>
    )
}

export default Footer