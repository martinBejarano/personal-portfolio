import EventEmitter from 'events';

import Experience from './Experience'

import gsap from 'gsap'


export default class Preloader extends EventEmitter {

    constructor(canvas) {
        super();
        this.experience = new Experience();
        this.world = this.experience.world;
        this.sizes = this.experience.sizes;

        this.world.on("worldready", () => {
            this.setPreloader();
        })

    }

    setIntro() {
        return new Promise((resolve) => {
            window.scrollTo(0,0)
            this.loaderTimeLine = new gsap.timeline({
                
            });

            let mm = gsap.matchMedia();

            mm.add({
                mobile: `(max-width: 768px)`,
                desktop: `(min-width: 778px)`
            }, (context) => {

                let { mobile, desktop } = context.conditions;

                let duration = context.isReverted ? 0 : 1;

                this.loaderTimeLine.to(".preloader", {
                    duration: duration,
                    opacity: 0,
                    onComplete: () => { document.querySelector(".preloader").style.display = "none" }
                })
                
                gsap.set(this.world.room.actualRoom.position, {
                    x: () => { if (desktop) {return gsap.utils.clamp(2.2, 2.4, this.sizes.width * 0.005)} else {return 0}},
                    z: () => { if (desktop) {return gsap.utils.clamp(0, 0.2, this.sizes.width * 0.005)} else {return 0}},
                })

                this.loaderTimeLine.to(this.world.room.actualRoom.scale, {
                    duration: duration,
                    x: () => { if (desktop) {return gsap.utils.clamp(1, 1.2, 768 * 0.0005)} else {return 0} },
                    y: () => { if (desktop) {return gsap.utils.clamp(1, 1.2, 768 * 0.0005)} else {return 0} },
                    z: () => { if (desktop) {return gsap.utils.clamp(1, 1.2, 768 * 0.0005)} else {return 0} },
                }, "same-0")

                this.loaderTimeLine.from(".section-0__title-container", {
                    duration: duration,
                    opacity: 0,
                    x: mobile ? 0 : -1000,
                    y: mobile ? -100 : 0,
                    onComplete: () => { resolve()},
                    onUpdate: ()=>{
                        if (this.loaderTimeLine.progress() == 1) {resolve()}
                    }
                }, "same-0")

                this.loaderTimeLine.eventCallback("onUpdate", ()=>{
                    if (this.loaderTimeLine.progress() == 1) {resolve()}
                })
            });

            
        })
    }

    async setPreloader() {
        await this.setIntro();

        this.emit("loadAnimationFinished")
    }
}