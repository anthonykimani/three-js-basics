import './style.css'
import * as THREE from 'three'
import  gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'yellow'})
)

scene.add(cube1)

cube1.position.set(-1,0,0)
cube1.rotation.reorder('YXZ')
cube1.rotation.set(0,0,0)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// let time = Date.now()
// console.log(time)


// clock
const clock = new THREE.Clock()

// Using gsap
gsap.to(cube1.position,{duration:1,delay:1,x:2})
// Animations 
const tick = ()=>{
    // // sets a constant time  
    // const currentTime = Date.now()
    // console.log(currentTime)
    // const deltaTime = currentTime - time
    // time = currentTime

    // const elapsedTime = clock.getElapsedTime()


    // console.log('tick');
    // cube1.rotation.x = elapsedTime * Math.PI * 2
    // mesh.position.y = Math.sin(elapsedTime)
    // camera.position.x = Math.sin(elapsedTime)
    // camera.lookAt(mesh.position)


    // renders the scene
    renderer.render(scene, camera)
    // call the function for the next frame 
    window.requestAnimationFrame(tick)
}

tick()

