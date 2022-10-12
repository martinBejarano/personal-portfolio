import * as THREE from 'three'
import gsap from 'gsap'

import Experience from '../Experience'

export default class Floor{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setFloor();
    }

    setFloor(){
        this.geometry = new THREE.PlaneGeometry(150,150);
        this.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color("rgb(255, 199, 73)"),
        })
        
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.plane.rotation.x = -Math.PI / 2;
        this.plane.castShadow = true;
        this.plane.receiveShadow = true;

        this.scene.add(this.plane)
    }
}