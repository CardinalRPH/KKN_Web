import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

const galleryEffect = () => {
    ScrollTrigger.batch(".photo-card", {
        onEnter: batch => gsap.to(batch, { autoAlpha: 1, stagger: 0.1 }),
    })
}

export default galleryEffect