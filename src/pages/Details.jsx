import { useEffect, useRef } from "react"
import TopComponent from "../components/details/TopComponent"
import Mid1Component from "../components/details/Mid1Component"
import detailEffect from "../utilities/effect/detailEffect"
import Mid2Component from "../components/details/Mid2Component"
import BotComponent from "../components/details/BotComponent"
import { useOutletContext, useParams } from "react-router-dom"
import NotFound from "./NotFound"

const Details = () => {
    const container1Ref = useRef(null)
    const botContainerRef = useRef(null)
    const { id } = useParams()
    const { data, storageImg } = useOutletContext()
    const prokerData = data?.proker.find(item => item.linkTo === id)

    const prokerImg = storageImg?.proker.find(item => item.id === prokerData?.id)

    useEffect(() => {
        if (prokerData) {      
            // window.scrollTo(0, 0)
            detailEffect(container1Ref.current, botContainerRef.current)
            document.title = prokerData.title
            window.addEventListener("resize", () => {
                detailEffect(container1Ref.current, botContainerRef.current)
            })
        }
    }, [prokerData])

    useEffect(() => {
        detailEffect(container1Ref.current, botContainerRef.current)
    },[storageImg])

    return prokerData ? (
        <div className="">
            <div className=" py-44"></div>
            <TopComponent containerRef={container1Ref} imgData={prokerImg} data={prokerData} />
            <Mid1Component data={prokerData} mainData={data.main} />
            <Mid2Component imgData={prokerImg} data={prokerData} />
            <BotComponent botContainerRef={botContainerRef} imgData={prokerImg} />
        </div>
    ) : (
        <NotFound />
    )
}

export default Details