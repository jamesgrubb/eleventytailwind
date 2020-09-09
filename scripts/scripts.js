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

const bend = gsap.timeline()

bend.to('.bend', { attr: { d: 'M0 20 C20 15 80 15 100 20' }, duration: 2, yoyo: true, repeat: -1 })