import EventEmitter from 'events';

import Experience from '../Experience'
import Environment from './Envrioment'
import Floor from './Floor'
import Room from './Room'

export default class World extends EventEmitter{
    constructor(){
        super();
        this.experience = new Experience();
        this.resources = this.experience.resources;

        this.resources.on("ready", ()=>{
            this.environment = new Environment();
            this.floor = new Floor()
            this.room = new Room();
            this.emit("worldready")
        })
        
    }
    
    resize(){
        if(this.room){
            this.room.resize();
        }
    }
    update(){
        if(this.room){
            this.room.update();
        }
    }

}