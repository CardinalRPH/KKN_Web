import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/* eslint-disable react/prop-types */
const GridTeamComponent = ({ teamData, teamImg }) => {
    const leader = teamData[0]
    const leaderImg = teamImg?.find(item => leader.id == item.fileName)

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="flex justify-center w-full">
                <div className="items-center mt-6 md:mb-8 mb-7 bg-gray-50 rounded-lg w-full md:w-2/4 md:h-60 shadow md:flex dark:bg-softBlueDark dark:border-gray-700">
                    <a href={leader?.social.link}>
                        {leaderImg ? (
                            <img className="w-full md:h-60  aspect-square object-cover rounded-lg sm:rounded-none sm:rounded-l-lg" src={leaderImg?.uri} alt={leader?.name} />
                        ) : (
                            <div className=" bg-slate-500 flex justify-center items-center text-softBlue animate-pulse w-full md:h-60  aspect-square object-cover rounded-lg sm:rounded-none sm:rounded-l-lg ">
                                <FontAwesomeIcon size="2xl" icon={faImage} />
                            </div>
                        )}
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href={leader?.social.link}>{leader?.name}</a>
                        </h3>
                        <span className="text-gray-100">{leader?.position}</span>
                        <div className="mt-3 mb-4 font-light text-gray-100">
                            <p className="m-0">{leader?.faculty}</p>
                            <p className="m-0">{leader?.subFaculty}</p>
                        </div>
                        <ul className="flex space-x-4 sm:mt-0">
                            <li>
                                <a href={leader?.social.link} className="text-gray-500 flex items-center hover:text-white">
                                    <FontAwesomeIcon size="xl" className="mr-1" icon={faInstagram} />
                                    <h4 className="mx-1">@{leader.social.username}</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid container gap-8 mb-6 lg:mb-16 lg:grid-cols-2">
                {teamData.map((item, index) => {
                    if (index > 0) {
                        const itemImg = teamImg?.find(iImg => item.id === iImg.fileName)
                        return (
                            <div key={index} className="items-center bg-gray-50 rounded-lg w-full md:h-60  shadow md:flex dark:bg-softBlueDark dark:border-gray-700">
                                <a href={item.social.link}>
                                    {itemImg ? (
                                        <img className="w-full aspect-square object-cover md:h-60  rounded-lg sm:rounded-none sm:rounded-l-lg" src={itemImg?.uri} alt={item.name} />
                                    ) : (
                                        <div className=" bg-slate-500 flex justify-center items-center text-softBlue animate-pulse w-full md:h-60  aspect-square object-cover rounded-lg sm:rounded-none sm:rounded-l-lg ">
                                            <FontAwesomeIcon size="2xl" icon={faImage} />
                                        </div>
                                    )}

                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href={item.social.link}>{item.name}</a>
                                    </h3>
                                    <span className="text-gray-100">{item.position}</span>
                                    <div className="mt-3 mb-4 font-light text-gray-100">
                                        <p className="m-0">{item.faculty}</p>
                                        <p className="m-0">{item.subFaculty}</p>
                                    </div>
                                    <ul className="flex space-x-4 sm:mt-0">
                                        <li>
                                            <a href={item.social.link} className="text-gray-500 flex items-center hover:text-white">
                                                <FontAwesomeIcon size="xl" className="mr-1" icon={faInstagram} />
                                                <h4 className="mx-1">@{item.social.username}</h4>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                })}


            </div>

        </div>

    )
}
export default GridTeamComponent