var tl = gsap.timeline();
gsap.set(".a",{opacity: 0, y: 10});
gsap.set("#right #logo",{opacity: 0, scale:1.7})

tl.from("#left",{
    width: 0,
    duration: 1.3,
    ease: Expo.easeInOut
})
.from("#right",{
    width: 0,
    duration: 1,
    ease: Expo.easeInOut
})
.to(".a",{
    delay: -1.2,
    stagger: .2,
    opacity: 1,
    y: 0,
    duration: 1,
    ease: Expo.easeInOut
})
.to("#right #logo",{
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: -.2
})