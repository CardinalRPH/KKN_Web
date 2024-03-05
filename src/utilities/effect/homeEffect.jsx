import gsap from "gsap"

const homeEffect = (mainText, secondText, trisContainer, textData, defaultGroup, navigate) => {

    gsap.fromTo(mainText, { text: defaultGroup, opacity: 0, y: 150 }, { y: 0, opacity: 1, duration: 2, ease: 'power4.out' })
    trisContainer.forEach((trisElement, index) => {
        const lSideTris = trisElement.querySelector('#leftSideTris')
        const rSideTris = trisElement.querySelector("#rightSideTris")
        const centerSideTris = trisElement.querySelector("#centerSideTris")
        gsap.to(trisElement, {
            scrollTrigger: {
                trigger: trisElement,
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                toggleActions: 'play none none reverse',
                onEnter: () => {
                    gsap.fromTo(mainText, { text: textData[index].title.toUpperCase(), opacity: 0, y: 150 }, {
                        y: 0, opacity: 1, ease: 'power4.out', onComplete: () => {
                            if (index >= 0) {
                                mainText.onclick = () => {
                                    navigate(`/proker/${textData[index].linkTo}`)
                                }
                            }
                        }
                    })
                    gsap.fromTo(secondText, { text: textData[index].type.toUpperCase(), opacity: 0, y: 150 }, {
                        y: 0, opacity: 1, ease: 'power4.out', onComplete: () => {
                            if (index >= 0) {
                                secondText.onclick = () => {
                                    navigate(`/proker/${textData[index].linkTo}`)
                                }
                            }
                        }
                    })

                },
                onLeaveBack: () => {
                    gsap.fromTo(mainText, { text: index - 1 < 0 ? defaultGroup : textData[index - 1].title.toUpperCase(), opacity: 0, y: -150 }, {
                        y: 0, opacity: 1, ease: 'power4.out', onComplete: () => {
                            if (index - 1 >= 0) {
                                mainText.onclick = () => {
                                    navigate(`/proker/${textData[index-1].linkTo}`)
                                }
                            } else {
                                mainText.onclick = () => { }
                            }
                        }
                    })
                    gsap.fromTo(secondText, { text: index - 1 < 0 ? '' : textData[index - 1].type.toUpperCase(), opacity: 0, y: -150 }, {
                        y: 0, opacity: 1, ease: 'power4.out', onComplete: () => {
                            if (index - 1 >= 0) {
                                secondText.onclick = () => {
                                    navigate(`/proker/${textData[index-1].linkTo}`)
                                }
                            } else {
                                secondText.onclick = () => { }
                            }
                        }
                    })

                }
            }
        })
        gsap.to(lSideTris, {
            scrollTrigger: {
                trigger: trisElement,
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                scrub: true
            }, translateY: '-75%'
        })
        gsap.to(rSideTris, {
            scrollTrigger: {
                trigger: trisElement,
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                scrub: true
            }, translateY: '-75%'
        })
        gsap.to(centerSideTris, {
            scrollTrigger: {
                trigger: trisElement,
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                scrub: true
            }, scale: 0.9
        })
    });

}

export default homeEffect