import * as THREE from 'three'

import Experience from './Experience'

export default class Camera{
    constructor(){
       this.experience = new Experience();
       this.sizes = this.experience.sizes;
       this.scene = this.experience.scene;

        this.createOrthographicCamera();
    }

    createOrthographicCamera(){
        this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.frustrum) / 2,
            (this.sizes.aspect * this.frustrum) / 2,
            this.frustrum / 2,
            -this.frustrum / 2,
            -10,
            10
        );

        this.orthographicCamera.position.y = 1.10;
        this.orthographicCamera.position.x = -0.185;
        this.orthographicCamera.rotation.x = - Math.PI / 6;
        
        this.scene.add(this.orthographicCamera);
    }

    

    resize(){
        this.orthographicCamera.left = (-this.sizes.aspect * this.frustrum) / 2,
        this.orthographicCamera.right = (this.sizes.aspect * this.frustrum) / 2,
        this.orthographicCamera.top =  this.frustrum / 2,
        this.orthographicCamera.bottom = -this.frustrum / 2,
        this.orthographicCamera.updateProjectionMatrix();
    }
}