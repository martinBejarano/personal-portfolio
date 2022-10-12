import EventEmitter from 'events';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

import Experience from '../Experience'

export default class Resources extends EventEmitter{

    constructor(assets){      
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;
        
        this.assets = assets;

        this.items = {};
        this.queue = this.assets.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }

    setLoaders(){
        this.loaders = {}
        this.loaders.gltfloader = new GLTFLoader();
        this.loaders.dracoloader = new DRACOLoader();
        this.loaders.dracoloader.setDecoderPath("./draco/");
        this.loaders.gltfloader.setDRACOLoader(this.loaders.dracoloader);
    }

    startLoading(){

        for(const asset of this.assets){
            if(asset.type === "glbModel"){
                this.loaders.gltfloader.load(asset.path, (file)=>{
                    this.singleAssetLoaded(asset, file)
                }) 
            } 
        }
    }


    singleAssetLoaded(asset, file){
        this.items[asset.name] = file;
        this.loaded++;

        if(this.loaded === this.queue){
            this.emit("ready")
        }
    }
}