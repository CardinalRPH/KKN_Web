/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const GModal = ({ open, onClose, children }) => {
    return (
        <div
            onClick={onClose}
            className={`
          fixed inset-0 flex justify-center items-center transition-colors z-50
          ${open ? "visible bg-black/20" : "invisible"}
        `}
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
            bg-white rounded-xl shadow p-6 transition-all
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-gray-50 hover:bg-gray-50 hover:text-gray-600"
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                {children}
            </div>
        </div>
    )
}
export default GModal