import Experience from "./Experience";
import gsap from 'gsap'
import ScrollTrigger from "https://cdn.skypack.dev/gsap@3.6.1/ScrollTrigger";
import ASScroll from "https://cdn.skypack.dev/@ashthornton/asscroll"





export default class Animations {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes
        this.preloader = this.experience.preloader;

        gsap.registerPlugin(ScrollTrigger)


        this.preloader.on("loadAnimationFinished", () => {
            this.room = this.experience.world.room.actualRoom;
            this.asscrol = this.setupASScroll();
            

            let mm = gsap.matchMedia();

            mm.add({
                mobile: `(max-width: 768px)`,
                desktop: `(min-width: 776px)`
            }, (context) => {

                let { mobile, desktop } = context.conditions;

                this.firstAnimation = gsap.timeline({

                    scrollTrigger: {
                        invalidateOnRefresh: true,
                        trigger: ".first-margin",
                        start: "top bottom",
                        endTrigger: ".section-1",
                        end: "bottom bottom",
                        scrub: 0.3,
                    }
                })

                this.secondAnimation = gsap.timeline({

                    scrollTrigger: {
                        invalidateOnRefresh: true,
                        trigger: ".second-margin",
                        start: "top bottom",
                        endTrigger: ".section-2",
                        end: "bottom bottom",
                        scrub: 0.3,
                    }
                })

                this.thirdAnimation = gsap.timeline({

                    scrollTrigger: {
                        invalidateOnRefresh: true,
                        trigger: ".third-margin",
                        start: "top bottom",
                        endTrigger: ".section-3",
                        end: "bottom bottom",
                        scrub: 0.3,
                    }
                })

                this.fourthAnimation = gsap.timeline({

                    scrollTrigger: {
                        invalidateOnRefresh: true,
                        trigger: ".fourth-margin",
                        start: "top bottom",
                        endTrigger: ".section-4",
                        end: "bottom bottom",
                        scrub: 0.3,
                    }
                })

                if (desktop) {
                    // DESKTOP ANIMATIONS

                    // First Animation --------------------------------------------------------->
                    
                    this.firstAnimation.fromTo(this.room.position, {
                        x: () => { return gsap.utils.clamp(2.2, 2.4, this.sizes.width * 0.005) },
                        z: () => { return gsap.utils.clamp(0, 0.2, this.sizes.width * 0.005) }
                    }, {
                        x: () => { return gsap.utils.clamp(5, 6, this.sizes.width * 0.005) },
                        z: () => { return gsap.utils.clamp(1, 1.5, this.sizes.width * 0.005) },
                    }, "same-0")

                    this.firstAnimation.fromTo(this.room.scale, {
                        x: () => { return gsap.utils.clamp(1, 1.2, 768 * 0.0005) },
                        y: () => { return gsap.utils.clamp(1, 1.2, 768 * 0.0005) },
                        z: () => { return gsap.utils.clamp(1, 1.2, 768 * 0.0005) },
                    }, {
                        x: () => { return 1.8 },
                        y: () => { return 1.8 },
                        z: () => { return 1.8 },
                    }, "same-0")

                    this.firstAnimation.to(".section-1__inner-container", {
                        scale: 1
                    }, "same-0")

                    this.firstAnimation.to(".section-0__title-container", {
                        x: "-80vw",
                    }, "same-0")



                    // Second Animation --------------------------------------------------------->

                    this.secondAnimation.to(this.room.position, {
                        x: () => { return gsap.utils.clamp(-4.8, -5, this.sizes.width * -0.005) },
                        z: () => { return gsap.utils.clamp(1, 1.5, this.sizes.width * 0.005) },
                    }, "same-1")

                    this.secondAnimation.to(this.room.scale, {
                        x: () => { return 1.8 },
                        y: () => { return 1.8 },
                        z: () => { return 1.8 },
                    }, "same-1")

                    this.secondAnimation.to(".section-2__inner-container", {
                        scale: 1
                    }, "same-1")


                    // Third Animation --------------------------------------------------------->


                    this.thirdAnimation.to(this.experience.world.room.actualRoom.position, {
                        x: () => { return gsap.utils.clamp(-3, -3.5, this.sizes.width * -0.005) },
                        z: () => { return gsap.utils.clamp(6.5, 7, this.sizes.width * 0.005) },
                    }, "same-2")

                    this.thirdAnimation.to(".section-3__inner-container", {
                        scale: 1
                    }, "same-2")

                    // Fourth Animation --------------------------------------------------------->

                    this.fourthAnimation.to(this.experience.world.room.actualRoom.position, {
                        x: () => { return gsap.utils.clamp(-2.5, -2.8, this.sizes.width * -0.005) },
                        z: () => { return gsap.utils.clamp(0, 0, this.sizes.width * 0.005) },
                    }, "same-3")

                    this.fourthAnimation.to(this.experience.world.room.actualRoom.scale, {
                        x: () => { return gsap.utils.clamp(0.8, 1, 768 * 0.0005) },
                        y: () => { return gsap.utils.clamp(0.8, 1, 768 * 0.0005) },
                        z: () => { return gsap.utils.clamp(0.8, 1, 768 * 0.0005) },
                    }, "same-3")

                    this.fourthAnimation.to(".section-4__inner-container", {
                        scale: 1
                    }, "same-3")

                } else {
                    // CELPHONE ANIMATIONS

                    this.room.scale.set(0.6, 0.6, 0.6)

                    // First Animation ------------------------------------------->

                    this.firstAnimation.fromTo(this.room.position, {
                        z: 10,

                    }, {
                        scrollTrigger: {
                            trigger: ".first-margin",
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 0.3,
                        },
                        x: 0,
                        z: 0
                    }, "same-0")
                    
                    this.firstAnimation.to(this.room.scale, {
                        scrollTrigger: {
                            trigger: ".first-margin",
                            start: "top bottom",
                            end: "bottom bottom",
                            invalidateOnRefresh: true,
                            scrub: 0.3,
                        },
                        x: 0.6,
                        y: 0.6,
                        z: 0.6
                    })

                    this.firstAnimation.to(this.room.position, {
                        scrollTrigger: {
                            trigger: ".section-1",
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 0.3,
                            invalidateOnRefresh: true
                        },
                        z: -10
                    }, "same-0").to(".section-1__inner-container", {
                        scrollTrigger: {
                            trigger: ".section-1",
                            start: "top bottom",
                            end: "center bottom",
                            scrub: 0.3,
                        },
                        scale: 1
                    }, "same-0")

                    this.firstAnimation.to(".section-0__title-container", {
                        y: "-80vh",
                    }, "same-0")




                    // Second Animation ------------------------------------------->

                    this.secondAnimation.fromTo(this.room.position, {
                        z: 10
                    }, {
                        scrollTrigger: {
                            trigger: ".second-margin",
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 0.3,
                        },
                        z: 0,
                        x: 1.4
                    }, "same-1").to(this.room.scale, {
                        scrollTrigger: {
                            invalidateOnRefresh: true,
                            trigger: ".second-margin",
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 0.3,
                        },
                        x: 1,
                        y: 1,
                        z: 1,
                    }, "same-1")

                    this.secondAnimation.to(this.room.position, {
                        scrollTrigger: {
                            trigger: ".section-2",
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 0.3,
                            invalidateOnRefresh: true
                        },
                        z: -10
                    }, "same-1").to(".section-2__inner-container", {
                        scrollTrigger: {
                            invalidateOnRefresh: true,
                            trigger: ".section-2",
                            start: "top bottom",
                            end: "center bottom",
                            scrub: 0.3,
                        },
                        scale: 1
                    }, "same-1")





                    // Third Animation ------------------------------------------->

                    this.thirdAnimation.fromTo(this.room.position, {
                        z: 10
                    }, {
                        scrollTrigger: {
                            trigger: ".third-margin",
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 0.3,
                        },
                        z: 0,
                        x: -1.4
                    }, "same-2").to(this.room.scale, {
                        scrollTrigger: {
                            invalidateOnRefresh: true,
                            trigger: ".third-margin",
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 0.3,
                        },
                        x: 1,
                        y: 1,
                        z: 1,
                    }, "same-2")

                    this.thirdAnimation.to(this.room.position, {
                        scrollTrigger: {
                            trigger: ".section-3",
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 0.3,
                            invalidateOnRefresh: true
                        },
                        z: -10
                    }, "same-2").to(".section-3__inner-container", {
                        scrollTrigger: {
                            trigger: ".section-3",
                            start: "top bottom",
                            end: "center bottom",
                            scrub: 0.3,
                        },
                        scale: 1
                    }, "same-2")




                    // Fourth Animation ------------------------------------------->

                    this.fourthAnimation.fromTo(this.room.position, {
                        z: 10
                    }, {
                        scrollTrigger: {
                            trigger: ".fourth-margin",
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 0.3,
                        },
                        z: 0,
                        x: 0
                    }, "same-2").to(this.room.scale, {
                        scrollTrigger: {
                            invalidateOnRefresh: true,
                            trigger: ".fourth-margin",
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 0.3,
                        },
                        x: 0.6,
                        y: 0.6,
                        z: 0.6,
                    }, "same-2")

                    this.fourthAnimation
                        .to(this.room.position, {
                            scrollTrigger: {
                                trigger: ".section-4",
                                start: "top bottom",
                                end: "bottom bottom",
                                scrub: 0.3,
                                invalidateOnRefresh: true
                            },
                            z: -2.5
                        }, "same-2")
                        .to(".section-4__inner-container", {
                            scrollTrigger: {
                                trigger: ".section-4",
                                start: "top bottom",
                                end: "center bottom",
                                scrub: 0.3,
                            },
                            scale: 1
                        }, "same-2")



                }
            })
        })

    }

    setupASScroll() {
        // https://github.com/ashthornton/asscroll
        const isIOS = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod']
            .includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)

        const asscroll = new ASScroll({
            disableRaf: true,
            touchScrollType: isIOS ? 'transform' : 'scrollTop',
            ease: 0.06,
        });

        gsap.ticker.add(asscroll.update);

        ScrollTrigger.defaults({
            scroller: asscroll.containerElement
        });

        ScrollTrigger.scrollerProxy(asscroll.containerElement, {
            scrollTop(value) {
                if (arguments.length) {
                    asscroll.currentPos = value;
                    return;
                }
                return asscroll.currentPos;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
            },
            fixedMarkers: true
        });

        asscroll.on("update", ScrollTrigger.update);
        ScrollTrigger.addEventListener("refresh", asscroll.resize);

        requestAnimationFrame(() => {
            asscroll.enable({
                newScrollElements: document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]")
            });
        });
        return asscroll;
        // https://github.com/ashthornton/asscroll
    }
}




