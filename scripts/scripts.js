gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()
const q = gsap.timeline({ defaults: { duration: 2 } })
const items = document.querySelectorAll('.item')
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

gsap.from(".item", {
    stagger: 0.8,
    scrollTrigger: ".item", // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    y: 10
});

q.from('#question-mark', { opacity: 0, x: 80, ease: "back.out(1)" }, "+=1")
    .from("#leaf", { transformOrigin: "center", scale: 0.5, ease: "back.out(1)" }, "")
    .from('#pose', { transformOrigin: "center bottom", opacity: 0, rotate: 4, ease: "back.out(1)" }, "<=0.5")