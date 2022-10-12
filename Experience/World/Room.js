import * as THREE from 'three'
import gsap from 'gsap'

import Experience from '../Experience'

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;

        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.05,
        }

        this.setModel();
        this.onMouseMove();
    }

    setModel() {
        const group = new THREE.Group();

        this.actualRoom.children.forEach(child => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach(groupChild => {
                    groupChild.castShadow = true;
                    groupChild.receiveShadow = true;
                })
            }

            if (child.name === "saumerios") {
                child.material = new THREE.MeshPhysicalMaterial;
                child.material.transmission = 0.9;
                child.material.roughness = 0;
            }
        });

        this.actualRoom.position.set(0,0,0)
        this.actualRoom.scale.set(0, 0, 0)

        this.scene.add(this.actualRoom)
    }

    onMouseMove() {
        window.addEventListener("mousemove", (e) => {
            this.rotation = ((e.clientX - window.innerWidth / 2) * 0.2) / window.innerWidth;
            this.lerp.target = this.rotation
        })
    }

    resize(){
        console.log(this.actualRoom.position)
    }

    update() {
        this.lerp.current = gsap.utils.interpolate(this.lerp.current, this.lerp.target, this.lerp.ease)
        this.actualRoom.rotation.y = this.lerp.current
    }
}