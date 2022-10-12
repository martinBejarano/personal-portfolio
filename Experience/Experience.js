import * as THREE from 'three'

import Time from './Utils/Time'
import Sizes from './Utils/Sizes'

import Assets from './Utils/Assets'
import Resources from './Utils/Resources'

import Camera from './Camera'
import Renderer from './Renderer'

import World from './World/World'
import Preloader from './Preloader'
import Animations from './Animations'



export default class Experience{
    static instance

    constructor(canvas){
        
        if(Experience.instance){
            return Experience.instance
        }

        Experience.instance = this;

        
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        
        this.time = new Time()
        this.sizes = new Sizes();
        
        this.camera = new Camera();
        this.renderer = new Renderer();

        this.resources = new Resources(Assets)        
        this.world = new World();

        this.preloader = new Preloader();
        this.animations = new Animations();


        this.time.on("update", ()=>{
            this.update();
        })
        
        this.sizes.on("resize", ()=>{
            this.resize();
        })
    }


    resize(){
        this.renderer.resize();
        this.camera.resize();
        this.world.resize();
    }

    update(){
        this.renderer.update();
        this.world.update();
    }

}