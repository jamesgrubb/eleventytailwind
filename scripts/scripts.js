gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()

tl.from('header', {
    y: "-100%", scrollTrigger: {
        trigger: 'header',
        // markers: true,
        start: "300px, 10%",
        end: "200px, -200px",
        scrub: 1
    }
}
)