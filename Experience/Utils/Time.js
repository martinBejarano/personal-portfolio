import EventEmitter from 'events'

export default class Time extends EventEmitter{

    constructor(canvas){      
        super();
        this.start = Date.now();
        this.current = this.start; 
        this.elapsed = this.start - this.current;
        this.delta = 16;
        

        this.update()
    }

    update(){
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start;
        
        this.emit("update")

        window.requestAnimationFrame(()=>this.update());
    }
}