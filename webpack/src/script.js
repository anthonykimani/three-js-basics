import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:'blue'});
const mesh = new THREE.Mesh(geometry,material);


mesh.position.set(0.7,-0.6,1)

scene.add(mesh);

const axesHelper  = new THREE.AxesHelper()
scene.add(axesHelper)
// sizes

const sizes = {
    width:800,
    height:600
}

// camera

const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z = 1
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene,camera)
