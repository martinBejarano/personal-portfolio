import * as THREE from 'three'

import Experience from '../Experience'

export default class Environment{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setLights();
    }

    setLights(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 4)
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(2048,2048);
        this.sunLight.shadow.normalBias = 0.05;

        this.sunLight.position.set(3, 6, 3)
        this.scene.add(this.sunLight);

        this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
        this.scene.add(this.ambientLight)
    }
}