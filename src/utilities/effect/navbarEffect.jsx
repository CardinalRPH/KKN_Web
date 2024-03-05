import gsap from "gsap"

const navbarEffect = (navState, navRef, navText) => {
    if (navState) {
        gsap.to(navRef, {
            opacity: 1,
            translateY: 0,
            transition: '0.5s',
            ease: 'power4.inOut',
            onComplete: () => {
                navText.forEach(element => {
                    gsap.fromTo(element, {
                        opacity: 0,
                        transition: '0.5s',
                        y: 150,
                    }, {
                        y: 0,
                        opacity: 1,
                        transition: '0.5s',
                        ease: 'power4.out'
                    })
                });
            }
        })
    } else {
        navText.forEach(element => {
            gsap.fromTo(element, {
                opacity: 1,
                y: 0
            }, {
                y: -150,
                opacity: 0,
                ease: 'power4.out',
                onComplete: () => {
                    gsap.to(navRef, {
                        translateY: '-100vh',
                        transition: '0.5s',
                        ease: 'power4.inOut',
                    })
                }
            })
        });

    }

    const navColor1= 'bg-softYellow'
    const navColor2= 'bg-softGreen'
    const navColor3= 'bg-softBlue'
    const defaultBg = 'bg-softCream'
    navText[0].addEventListener('mouseenter', () => {
        navRef.classList.remove(defaultBg);
        navRef.classList.add(navColor1)
    })
    navText[0].addEventListener('mouseout', () => {
        navRef.classList.remove(navColor1)
        navRef.classList.add(defaultBg);
    })
    navText[1].addEventListener('mouseenter', () => {
        navRef.classList.remove(defaultBg);
        navRef.classList.add(navColor2)
    })
    navText[1].addEventListener('mouseout', () => {
        navRef.classList.remove(navColor2)
        navRef.classList.add(defaultBg);
    })
    navText[2].addEventListener('mouseenter', () => {
        navRef.classList.remove(defaultBg);
        navRef.classList.add(navColor3)
    })
    navText[2].addEventListener('mouseout', () => {
        navRef.classList.remove(navColor3)
        navRef.classList.add(defaultBg);
    })

}

export default navbarEffect