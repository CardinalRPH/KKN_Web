import { useEffect, useRef } from "react"
import ContainerTris from "../components/ContainerTris"
import HeroMain from "../components/HeroMain"
import HomeMainText from "../components/HomeMainText"
import homeEffect from "../utilities/effect/homeEffect"
import { useLocation, useNavigate, useOutletContext } from "react-router-dom"
import heroImg from "../assets/hero/hero.jpg"

const Home = () => {
    const textMain = useRef(null)
    const textSecond = useRef(null)
    const heroContainer = useRef(null)
    const prokerRef = useRef(null)
    const { state } = useLocation();
    const { targetId } = state || {}
    const { data, storageImg } = useOutletContext()
    const navigate = useNavigate()


    useEffect(() => {
        const containerTrisRef = document.querySelectorAll(`.container-tris`)
        heroContainer.current.style.backgroundImage = `url(${heroImg})`
        homeEffect(textMain.current, textSecond.current, containerTrisRef, data.proker, data.main.group, navigate)
    }, [data.main.group, data.proker, navigate, storageImg])



    useEffect(() => {
        const proker = prokerRef.current
        targetId === 'proker' ? proker.scrollIntoView() : window.scrollTo(0, 0)
    }, [targetId])

    useEffect(() => {
        document.title = "KKN17 Langensari 2024"
    }, [])

    return (
        <div className=" bg-softCream">
            <HeroMain heroContainerRef={heroContainer} />
            <HomeMainText mainTextRef={textMain} secondTextRef={textSecond} />
            <div ref={prokerRef}>
                {data.proker.map((item, index) => {
                    const imgItem = storageImg?.proker.find(storeImg => storeImg.id === item.id)
                    return (
                        <ContainerTris link={item.linkTo} img={imgItem} navigate={navigate} key={index} />
                    )
                })}
            </div>
        </div>

    )
}

export default Home