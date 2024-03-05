import gsap from "gsap"

const prokerEffect = (element) => {
    element.forEach(itemEl => {
        const textSlide = itemEl.querySelector("#textSlide")
        itemEl.onmouseover = () => {
            gsap.to(itemEl, {
                flex: 5,
                onComplete: () => {
                }
            })
            textSlide.style.opacity=1
        }
        itemEl.onmouseout = () => {
            gsap.to(itemEl, {
                flex: 1,
            })
            textSlide.style.opacity=0
        }
    })

}

export default prokerEffect