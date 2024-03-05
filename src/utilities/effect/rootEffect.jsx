import gsap from "gsap"

const rootEffect = (socialIcoRef, logoRef, footerRef) => {
    gsap.to(footerRef, {
        scrollTrigger: {
            trigger: footerRef,
            start: '20px 90%',
            // markers:true,
            onEnter: () => {
                const windowWidth = window.innerWidth
                gsap.from(logoRef, {
                    transition: '0.5s',
                    translateX: (logoRef.offsetWidth - windowWidth+55) / 2,
                    ease: 'power4.inOut',
                })
                gsap.from(socialIcoRef, {
                    transition: '0.5s',
                    translateX: '-15rem',
                    ease: 'power4.inOut',
                })
            },
            onLeaveBack: () => {
                gsap.from(logoRef, {
                    translateX: '0',
                    transition: '0.5s',
                    ease: 'power4.inOut',
                })
                gsap.from(socialIcoRef, {
                    translateX: '0',
                    transition: '0.5s',
                    ease: 'power4.inOut',
                })
            }
        }

    })
}

export default rootEffect