import { useEffect } from "react"
import GridTeamComponent from "../components/GridTeamComponent"
import { useOutletContext } from "react-router-dom"

const Team = () => {
    const { data, storageImg } = useOutletContext()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="pt-24 flex flex-col items-center bg-softBlue">
            <h1 className=" text-6xl font-roboto font-semibold">TEAM</h1>
            <GridTeamComponent teamData={data?.team} teamImg={storageImg?.team} />
        </div>
    )
}

export default Team