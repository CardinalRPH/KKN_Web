import gsap from "gsap"

const detailEffect = (container1Ref, botContainerRef) => {
    const img1Ref = container1Ref.querySelector("#imgRef")
    const textRef = container1Ref.querySelector("#textRef")
    const botImgRef = botContainerRef.querySelector("#botImgRef")
    const backdropRef = botImgRef.querySelector("#backdropRef")
    gsap.to(img1Ref, {
        scrollTrigger: {
            trigger: container1Ref,
            start: 'top 230px',
            end: `${img1Ref.offsetHeight} center`,
            // markers: true,
            scrub: true,
        },
        scale: 0.80
    })
    gsap.to(textRef, {
        scrollTrigger: {
            trigger: container1Ref,
            start: 'top 230px',
            end: `${img1Ref.offsetHeight} center`,
            // markers: true,
            scrub: true,
        },
        translateY: '20rem',
    })
    gsap.to(backdropRef, {
        scrollTrigger: {
            trigger: botContainerRef,
            start: 'top center',
            end: `${(botImgRef.offsetHeight)/2}px center`,
            scrub: true,
            // markers: true,
            onUpdate: (self) => {
                const brightnessValue = self.progress * 0.5;
                backdropRef.style.backdropFilter = `brightness(${1 - brightnessValue})`;
            }
        },
        ease: 'power4.inOut'
    });
}

export default detailEffect